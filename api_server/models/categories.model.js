const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categorySchema = new Schema ({
    category: {
        type: String,
        required: true
    }
})

const Category = mongoose.model('categories', categorySchema)
module.exports = Category