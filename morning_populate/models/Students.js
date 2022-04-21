const mongoose = require('mongoose');


const students = new mongoose.Schema({
  firstname: String,
  surname: String,
  adress: {
    type: mongoose.Types.ObjectId,
    ref: 'adress',
  }
});

const studentModel = mongoose.model('students', students)
module.exports = studentModel