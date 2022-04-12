const { application } = require('express');
const express = require('express');
const app = express();
const data = require('./data.json')
const axios = require('axios')

const port = 8000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});

app.get('/game-of-thrones/json', (req, res) => {
  res.json(data)
})

app.get('/game-of-thrones/url', (req, res) => {
  axios.get('https://thronesapi.com/api/v2/Characters')
    .then(response => res.json(response.data))
})

app.get('/pokemon/:limit/:offset', (req, res) => {
  const limit = req.params.limit
  const offset = req.params.offset

  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => res.json(response.data))
})

app.get('/pokemon/:id', (req, res) => {
  const id = req.params.id
  // console.log("get/pokemon:id id >>>>", id);
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => res.json(response.data.name))
})