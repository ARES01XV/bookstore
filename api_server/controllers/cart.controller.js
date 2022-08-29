const Cart =  require('../models/cart.model')

// Get Cart Items
exports.get_All_Item = async (req, res, next) => {
    try{
        let get_All = await Cart.find().populate('productID')
        res.status(200).json({
            status: 'Success',
            length: get_All.length,
            results: get_All
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: error
        })
    }
}

// Add to cart
exports.Add_to_Cart = async (req, res) => {
    try {
        const create_Item = await Cart.create(req.body)
        res.status(200).json({
            status: 'Success',
            length: create_Item.length,
            results: create_Item
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: error
        })
    }
}

//Delete
exports.delete_from_cart = async (req, res) => {
    try{
        const delete_item = await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'Success',
            length: delete_item.length,
            results: delete_item
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: error
        })
    }
}
