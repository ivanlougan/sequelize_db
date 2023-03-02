const Book = require("../books/module");
const Genre = require("./model");

const addGenre = async (req, res) => {
    try {
        const genre = await Genre.create(req.body);

        res.status(201).json({ message: "success", genre: genre})
        
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}

const getAllBooks = async (req, res) => {
    try {
        const genre = await Genre.findAll({
            where: { genre: req.params.genre},
            include: Book, 
        });
        console.log(genre)

        res.status(200).json({ message: "success", genre: genre});
        
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}




module.exports = {
    addGenre,
    getAllBooks
}