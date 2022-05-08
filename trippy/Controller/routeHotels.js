const express = require('express')
var router = express.Router()
const HotelModel = require('../Model/hotelModels')


router.get('/', (req, res, next) => {
  HotelModel.find({}).exec().then((hotels) => {
    res.json(hotels)
  })
})


router.post('/hotels', (req, res) => {
  res.json(req.body)
  console.log(req.body);
  const newHotel = new HotelModel(req.body)
  newHotel.save()
})

router.get('/hotels/:id', (req, res) => {

  HotelModel.findById(req.params.id).exec().then((hotel) => {
    res.json(hotel)
  })
})


router.put('/hotels/:id', (req, res) => {
  console.log(req.query);

  const id = { _id: req.params.id };
  const newName = { name: req.query.name }
  HotelModel.findOneAndUpdate(id, newName).exec().then((hotel) => {
    res.json(hotel)
  })
})

router.delete('/hotels/:id', (req, res) => {
  HotelModel.findByIdAndDelete(req.params.id).exec().then((hotel) => {
    res.json(hotel)
  })
})

module.exports = router;