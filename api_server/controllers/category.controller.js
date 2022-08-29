const Categories = require('../models/categories.model');

/**
 * ### Descriptions
 * Get a list of Categories
*/

exports.get_All_Categories = async (req, res, next) => {
    try {
        const items = await Categories.find();
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
 * Get Categories by Id
*/
exports.get_By_Id = async (req, res) => {
    try {
        const item = await Categories.findById(req.params.id);
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
 * Create a new Category
*/
exports.create_Category = async (req, res) => {
    let data = {
        category: req.body.category,
    }
    try {
        const category_info = await Categories.create(data);

        res.status(200).json({
            status: 'Success',
            length: category_info.length,
            results: category_info
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
 * Create a new Category
*/
exports.update_Category = async (req, res) => {
    let data = {
    }
    try {
        const category_info = await Categories.findByIdAndUpdate(req.params.id, data);

        res.status(200).json({
            status: 'Success',
            length: category_info.length,
            results: category_info
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
 * Delete Category
*/
exports.delete_Category_By_Id = async (req, res) => {
    try {
        const category = await Categories.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'Success',
            length: category.length,
            results: category
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: error
        })
    }
}