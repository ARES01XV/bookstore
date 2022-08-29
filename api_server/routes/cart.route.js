const express = require('express');
const router = express.Router();
const cart_controller = require('../controllers/cart.controller')

router
    .get('/', cart_controller.get_All_Item)
    .post('/', cart_controller.Add_to_Cart)
    .delete('/:id', cart_controller.delete_from_cart)

module.exports = router