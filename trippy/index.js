const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/trippy')
app.use(express.json())


const HotelSchema = new mongoose.Schema({
  "name": String,
  "address": String,
  "city": String,
  "country": String,
  "stars": {
    type: Number,
    min: 1,
    max: 5
  },
  "hasSpa": Boolean,
  "hasPool": Boolean,
  "priceCategory": {
    type: Number,
    min: 1,
    max: 3
  }
})

const HotelModel = mongoose.model('hotel', HotelSchema)


app.get('/hotels', (req, res, next) => {
  HotelModel.find({}).exec().then((hotels) => {
    res.json(hotels)
  })
})


app.post('/hotels', (req, res) => {
  res.json(req.body)
  console.log(req.body);
  const newHotel = new HotelModel(req.body)
  newHotel.save()
})

app.get('/hotels/:id', (req, res) => {

  HotelModel.findById(req.params.id).exec().then((hotel) => {
    res.json(hotel)
  })
})


app.put('/hotels/:id', (req, res) => {
  console.log(req.query);

  const id = { _id: req.params.id };
  const newName = { name: req.query.name }
  HotelModel.findOneAndUpdate(id, newName).exec().then((hotel) => {
    res.json(hotel)
  })
})

app.delete('/hotels/:id', (req, res) => {
  HotelModel.findByIdAndDelete(req.params.id).exec().then((hotel) => {
    res.json(hotel)
  })
})




const restaurantSchema = new mongoose.Schema({

})



app.listen(3009)