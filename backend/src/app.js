const express = require('express')
const cors = require('cors')
//IMPORT MONGOOSE
const mongoose = require('mongoose')

//DB CONNECT
mongoose.connect('mongodb://localhost:27017/backend')
.then((db) => {
    console.log("DB Connected")
}).catch((err) => console.log("Error de conexión"))

const routes = require('./routes')
const app = express()

//Setting
app.set('port',4000)

//Middlewares
app.use(express.json())
app.use(cors())

//Routes
app.use('/', routes.home)
app.use('/users', routes.users)


//Listen port
app.listen(app.get('port'), () => {
    console.log("Server listening on port", app.get('port'))
})