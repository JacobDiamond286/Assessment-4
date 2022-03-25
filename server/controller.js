const books = require('./db.json')
let globalID = 4



module.exports = {
    getBooks: (req, res) => {
        res.status(200).send(books)
    },

    deleteBook: (req, res) => {
        let index = books.findIndex(book => book.id === +req.params.id)
        books.splice(index, 1)
        res.status(200).send(houses)
    },

    createBook: (req, res) => {
        let { title, price, imageURL } = req.body
        let newBook = {
            id: globalID,
            title,
            price,
            imageURL
        }
        books.push(newBook)
        res.status(200).send(books)
        globalID++
        console.log(books)
    },

    updateBook: (req, res) => {
        let { id } = req.params
        let { type } = req.body

        let index = books.findIndex(book => book.id === +id)

        if (books[index].rating === 5 && type === 'plus') {
            res.status(400).send('5 is the max rating')
        } else if (books[index].rating === 1 && type === 'minus') {
            res.status(400).send('1 is the lowest rating')
        } else if (type === 'plus'){
            books[index].rating++
            res.status(200).send(movies)
        } else if (type === 'minus'){
            books[index].rating--
            res.status(200).send(movies)
        } else {
            res.status(400)
        }
    }
}