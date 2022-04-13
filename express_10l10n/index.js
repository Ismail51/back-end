const express = require('express');
const engine = require('express-handlebars').engine
const app = express();
app.use(express.static('public'));

const trans = require('./translation.json')

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/:lang?', (req, res) => {
  const lang = req.params.lang
  if (lang === "fr") {
    res.render('home', { ...trans.fr, lang: "fr" })
  }
  else if (lang === "en") {
    res.render('home', { ...trans.en, lang: "en" })
  }
  else if (lang === "es") {
    res.render('home', { ...trans.es, lang: "es" })
  }
  else {
    res.render('home', trans.fr)
  }
})


app.listen(3000);