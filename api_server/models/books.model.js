const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema({
    categoryID: {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    },
    book_name: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: { 
        type: Number,
        required: true
    }

})

const Books = mongoose.model('books', bookSchema)
module.exports = Books