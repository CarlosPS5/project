const app = require('express')

const router = app.Router()

const users = require('./users')

const home = router.get('/', (req,res) => {
    res.send("Home")
})

module.exports = {
    users,
    home
}