const user = require('../models/user')

const login = db => async (req, res) => {
    try {
        const userFromDB = await user.login(db)(req.body.email, req.body.passwd)
        req.session.user = userFromDB
        res.redirect('/')
    } catch (err) {
        res.status(403).send(err.toString())
    }
}
const logout = (req, res) => {
    req.session.destroy(() => {})
    res.redirect('/')
}
module.exports = {
    login,
    logout
}