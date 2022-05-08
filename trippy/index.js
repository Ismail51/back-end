const express = require('express')
const router = require('./Controller/routeHotels')
const router2 = require('./Controller/routeRestaurants')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/trippy')
app.use(express.json())
app.use('/Hotels', router)
app.use('/Restaurant', router2)



const restaurantSchema = new mongoose.Schema({

})



app.listen(3009)