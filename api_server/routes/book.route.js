const express = require('express');
const router = express.Router();
const book_controller = require('../controllers/book.controllers');

router
    .get('/', book_controller.get_All_Books)
    .post('/create_book', book_controller.create_Book)
    .get('/admin_books', book_controller.admin_books)

router
    .get('/book_By_Id/:id', book_controller.get_By_Id)
    .get('/get_category_books/:id', book_controller.get_Books_By_Category)
    .put('/update_book/:id', book_controller.update_Book)
    .delete('/delete_book/:id', book_controller.delete_Book_By_Id)

module.exports = router
