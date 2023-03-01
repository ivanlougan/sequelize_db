const addBook = async (req, res) => {
    res.status(201).json({
        message: "hello boogie"
    })
}

module.exports = {
    addBook,
}