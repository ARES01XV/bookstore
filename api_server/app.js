const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors(["*", "http://localhost:4200"]))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routers
const book_Router = require('./routes/book.route')
const category_Router = require('./routes/category.route')
const cart_Router = require('./routes/cart.route')

// Routes
app.use('/books', book_Router),
app.use('/category', category_Router)
app.use('/cart', cart_Router)

// Start Express App
mongoose
    .connect("mongodb://localhost:27017/BookStore")
    .then((x) => {
        console.log(
            `Connected to MongoDB Successfully! Database name: "${x.connections[0].name}"`
        );
    })
const server = app.listen(PORT, () =>
    console.log(`Connected to http://localhost:${PORT}`)
);