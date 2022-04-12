const express = require('express');
const app = express();


var authors = [
  {
    name: "Lawrence Nowell",
    nationality: "UK",
    books: ["Beowulf"]
  },
  {
    name: "William Shakespeare",
    nationality: "UK",
    books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
  },
  {
    name: "Charles Dickens",
    nationality: "US",
    books: ["Oliver Twist", "A Christmas Carol"]
  },
  {
    name: "Oscar Wilde",
    nationality: "UK",
    books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
  },
]


app.get('/', (req, res) => {
  res.send('Authors API')
});

app.get('/Authors/:ID', (req, res) => {
  const ID = req.params.ID - 1
  res.send(`${authors[ID].name} , ${authors[ID].nationality}`)
  console.log(req.params.ID);
});


app.get('/Authors/:ID/books', (req, res) => {
  const ID = req.params.ID - 1
  res.send(authors[ID].books)
  console.log(req.params.ID);
})

app.get('/Json/Authors/:ID', (req, res) => {
  const ID = req.params.ID - 1
  res.json({
    name: authors[ID].name,
    nationality: authors[ID].nationality
  })
  console.log(req.params.ID);
})

app.get('/Json/Authors/:ID/books', (req, res) => {
  const ID = req.params.ID - 1
  res.json({
    books: authors[ID].books
  })
  console.log(req.params.ID);
})




const port = 8000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});