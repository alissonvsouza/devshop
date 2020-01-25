const init = db => {
    const router = require('express').Router()
    const categories = require('../../controllers/categories')

    router.get('/', categories.adminGetCategories(db))
    router.get('/new', categories.adminCreateCategory(db))
    router.post('/new', categories.adminCreateCategory(db))

    return router
}
module.exports = init
