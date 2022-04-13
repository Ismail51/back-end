const express = require('express')
const app = express()
const engine = require('express-handlebars').engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.render('form')
})

app.post("/submit", (req, res) => {
  res.redirect("/")
  console.log(req.body);
})


app.listen(3000)



