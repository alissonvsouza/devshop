const category = require('../models/category')
const product = require('../models/product')

const getCategory = db => async (req, res) => {
    const products = await product.getProductsByCategoryId(db)(req.params.id)
    const cat = await category.getCategory(db)(req.params.id)
    res.render('category', {
        products,
        category: cat[0]
    })
}
module.exports = {
    getCategory
}
