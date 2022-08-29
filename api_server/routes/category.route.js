const express = require('express');
const router = express.Router();
const category_controller = require('../controllers/category.controller')

router
    .get('/', category_controller.get_All_Categories)
    .post('/create_category', category_controller.create_Category)

router
    .get('/category_By_Id/:id', category_controller.get_By_Id)
    .put('/update_category/:id', category_controller.update_Category)
    .delete('/delete_category/:id', category_controller.delete_Category_By_Id)

module.exports = router