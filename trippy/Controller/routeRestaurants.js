const express = require('express')
var router = express.Router()
const restaurantModel = require('../Model/restaurantModels')


router.get('/', (req, res, next) => {
  restaurantModel.find({}).exec().then((restaurant) => {
    res.json(restaurant)
  })
})


router.post('/', (req, res) => {
  res.json(req.body)
  console.log(req.body);
  const newrestaurant = new restaurantModel(req.body)
  newrestaurant.save()
})

router.get('/:id', (req, res) => {

  restaurantModel.findById(req.params.id).exec().then((restaurant) => {
    res.json(restaurant)
  })
})


router.put('/:id', (req, res) => {
  console.log(req.query);

  const id = { _id: req.params.id };
  const newName = { name: req.query.name }
  restaurantModel.findOneAndUpdate(id, newName).exec().then((restaurant) => {
    res.json(restaurant)
  })
})

router.delete('/:id', (req, res) => {
  restaurantModel.findByIdAndDelete(req.params.id).exec().then((restaurant) => {
    res.json(restaurant)
  })
})

module.exports = router;