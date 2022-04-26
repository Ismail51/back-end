const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const heroes = require('./heroes')
const heroModel = require('./heroes')
async function connect() {
  await mongoose.connect('mongodb://localhost:27017/heroes')
}
connect()

// heroes.insertMany([
//   {
//     slug: "iron-man",
//     name: "Iron Man",
//     power: ["money"],
//     color: "red",
//     isAlive: true,
//     age: 46,
//     image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
//   },
//   {
//     slug: "thor",
//     name: "Thor",
//     power: ["electricty", "worthy"],
//     color: "blue",
//     isAlive: true,
//     age: 300,
//     image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
//   },
//   {
//     slug: "dardevil",
//     name: "Daredevil",
//     power: ["blind"],
//     color: "red",
//     isAlive: false,
//     age: 30,
//     image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
//   }
// ])

const app = express()

app.use(morgan())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.get('/heroes', function (req, res) {
  heroes.find({}).then(data => {
    res.json(data)
  })
})

app.get('/heroes/:slug', function (req, res) {
  heroes.find({ slug: req.params.slug }).then(data => {
    res.json(data)
  })
})

app.get('/heroes/:slug/power', function (req, res) {
  heroes.find({ slug: req.params.slug }).then(data => {
    res.json(data[0].power)
    console.log(data);
  })
})

app.post('/heroes', function (req, res) {
  heroes.insertMany(req.body)
  res.json(req.body)
  console.log(req.body);
})

app.put('/heroes/:slug/powers', function (req, res) {
  const data = req.body
  heroModel.findOneAndUpdate(
    { slug: req.params.slug },
    { $push: { power: data.power } },
    { new: true }
  )
  then(data => {
    res.json(data)
  })
  console.log(req.body);
})



app.listen(3000)

