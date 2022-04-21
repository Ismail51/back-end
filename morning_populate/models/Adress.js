const mongoose = require('mongoose');


const adress = new mongoose.Schema({

  streetName: String,
  streetNumber: String,
  postCode: String,
  city: String
});

const adressModel = mongoose.model('adress', adress)
module.exports = adressModel