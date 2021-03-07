const express = require('express')

const UserController = require('../controllers')

const router = express.Router()

router.get("/all", UserController.users.all)
router.post("/create", UserController.users.create)
router.get("/get/:id", UserController.users.get)
router.put("/update/:id", UserController.users.update)
router.delete("/remove/:id", UserController.users.remove)

module.exports = router

