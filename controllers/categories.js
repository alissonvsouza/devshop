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

const adminGetCategories = db => async (req, res) => {
    const categories = await category.getCategories(db)()
    res.render('admin/categories/index', {
        categories
    })
}
const adminCreateCategory = (db) => async (req, res) => {
    if (req.method === 'GET') {
        res.render('admin/categories/create')
    } else {
        await db('categories').insert(req.body)
        res.redirect('/administration/categories')
    }
}

module.exports = {
    getCategory,
    adminGetCategories,
    adminCreateCategory
}
