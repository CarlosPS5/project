const { User } = require('../models')

const all = async (req,res) => {
    const users = await User.find()
    const data = {
        status: "success",
        data: {users},
        code: 200
    }
    res.json(data)
}

const create = async (req,res) => {
    const data = req.body
    const user = new User(data)
    const response = await user.save()
    res.json(response)
}

const get = async (req,res) => {
    const user = await User.findById(req.params.id)
    const data = {
        status: "success",
        data: {user},
        code: 200
    }
    res.json(data)
}

const update = async (req,res) => {
    const user = await User.findById(req.params.id)

    user.name = req.body.name
    user.age = req.body.age
    user.description = req.body.description

    const userData = await user.save()

    const response = {
        status : 'success',
        data: {
            users: [userData]
        },
        code: 200
    }
    res.json(response)
}

const remove = async (req,res) => {
    const data = await User.remove({_id: req.params.id})

    const response = {
        status: 'success',
        data: {},
        code: 200
    }
    res.json(response)
}

module.exports = {
    all,
    create,
    get,
    update,
    remove
}