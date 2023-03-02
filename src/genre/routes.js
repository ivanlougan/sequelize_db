const { Router } = require("express");

genreRouter = Router();

const { addGenre, getAllBooks } = require("./controllers");

genreRouter.post("/genres/addgenre", addGenre);
genreRouter.get("/genres/getbooksbygenre/:genre", getAllBooks);

module.exports = genreRouter;