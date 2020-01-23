const init = db => {
    const categories = require('./categories')
    // const products = require('./products')
    
    const router = require('express').Router()

    router.use((req, res, next) => {
        if (req.session.user) {
            if (req.session.user.roles.indexOf('admin') < 0) {
                res.redirect('/')
            } else {
                next()
            }
        } else {
            res.redirect('/')
        }
    })

    router.get('/', (req, res) => res.send('admin'))
    router.use('/categories', categories(db))
    // router.use('/products', products(db))

    return router
}
module.exports = init
