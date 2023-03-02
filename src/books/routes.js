const { Router } = require("express");

const bookRouter = Router();

const { getSingleBookByTitle, addBook, getAllBooks, getAllBooksByGenre, updateBook, deleteAllBooks, deleteBook } = require("./controllers");

bookRouter.post("/books/addbook", addBook);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.get("/books/getbook/:title", getSingleBookByTitle);
bookRouter.get("/books/getallbooksbygenre", getAllBooksByGenre);
bookRouter.put("/books/updatebook", updateBook);
bookRouter.delete("/books/deleteallbooks", deleteAllBooks);
bookRouter.delete("/books/deletebook", deleteBook);


module.exports = bookRouter;