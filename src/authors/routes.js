const { Router } = require("express");

authorRouter = Router();

const { addAuthor, getAuthorAndBooks } = require("./controllers");

authorRouter.post("/authors/addauthor", addAuthor);
authorRouter.get("/authors/getauthorsandbooks/:author", getAuthorAndBooks);

module.exports = authorRouter;