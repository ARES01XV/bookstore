const Books = require('../models/books.model');

/**
 * ### Descriptions
 * Get a list of books
*/

exports.get_All_Books = async (req, res, next) => {
    try {
        const items = await Books.find();
        res.status(200).json({
            status: 'Success',
            length: items.length,
            results: items
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: error
        })
    }
}

/**
 * ### Descriptions
 * Get Books by Id
*/
exports.get_By_Id = async (req, res) => {
    try {
        const item = await Books.findById(req.params.id);
        res.status(200).json({
            status: 'Success',
            length: item.length,
            results: item
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: error
        })
    }
}

/**
 * ### Descriptions
 * Create a new Book
*/
exports.create_Book = async (req, res) => {
    let data = {
        categoryID: req.body.categoryID,
        book_name: req.body.book_name,
        image_url: req.body.image_url,
        author: req.body.author,
        price: req.body.price,
    }
    try {
        const book_info = await Books.create(data);

        res.status(200).json({
            status: 'Success',
            length: book_info.length,
            results: book_info
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: error
        })
    }
}

/**
 * ### Descriptions
 * Create a new Book
*/
exports.update_Book = async (req, res) => {
    let data = {
        categoryID: req.body.categoryID,
        book_name: req.body.book_name,
        image_url: req.body.image_url,
        author: req.body.author,
        price: req.body.price,
    }
    try {
        const book_info = await Books.findByIdAndUpdate(req.params.id, data);

        res.status(200).json({
            status: 'Success',
            length: book_info.length,
            results: book_info
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: error
        })
    }
}

/**
 * ### Descriptions
 * Get Books Base on a category
*/
exports.get_Books_By_Category = async (req, res) => {
    try {
        const book = await Books.find({ categoryID: req.params.id }).populate('categoryID')
        res.status(200).json({
            status: 'success',
            length: book.length,
            results: book
        })
        console.log(book)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 'Fail',
            message: error
        })
    }
}

//Admin books
exports.admin_books = async (req, res) => {
    try {
        const book = await Books.find().populate('categoryID')
        res.status(200).json({
            status: 'success',
            length: book.length,
            results: book
        })
        console.log(book)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 'Fail',
            message: error
        })
    }
}

/**
 * ### Descriptions
 * Delete Book
*/
exports.delete_Book_By_Id = async (req, res) => {
    try {
        const book = await Books.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'Success',
            length: book.length,
            results: book
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: error
        })
    }
}