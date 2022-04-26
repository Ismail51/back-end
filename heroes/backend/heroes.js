const mongoose = require('mongoose')

const heroes = new mongoose.Schema({
  slug: String,
  name: String,
  power: [String],
  color: String,
  isAlive: Boolean,
  age: Number,
  image: String
})

const heroModel = mongoose.model('Hero', heroes)
module.exports = heroModel