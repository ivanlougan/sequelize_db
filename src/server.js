require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5001;

const Book = require("./books/module");
const Author = require("./authors/model");
const Genre = require("./genre/model");

const bookRouter = require("./books/routes");
const authorRouter = require("./authors/routes");
const genreRouter = require("./genre/routes");

const app = express();

app.use(express.json());

const syncTables = () => {

    Author.hasMany(Book);
    Book.belongsTo(Author);

    Genre.hasMany(Book);
    Book.belongsTo(Genre);

    Book.sync( { alter: true });
    Author.sync({ alter: true });
    Genre.sync({ alter: true });
};

app.use(bookRouter);
app.use(authorRouter);
app.use(genreRouter);

app.get("/health", (req, res) => 
    res.status(200).json( {
        message: "API is working"
    }
    ));

app.listen(port, () => {
    syncTables();
    console.log( `server is listening on port: ${port}` );
});