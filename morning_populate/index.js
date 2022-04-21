const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/STUDENT_DB');

const studentModel = require('./models/Students')
const adressModel = require('./models/Adress')

const location = new adressModel({
  streetName: 'rue de la reunion',
  streetNumber: '20',
  postCode: '75020',
  city: 'meaux'
})

const adressID = location._id
const pupil = new studentModel({
  firstname: 'tiri',
  surname: 'henri',
  adress: adressID

})

studentModel.find({ 'firstname': 'Patrique' }).populate('adress').then(res => {
  console.log(res);
})


// location.save()
// pupil.save()
