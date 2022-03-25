const express = require("express");
const cors = require("cors");

const app = express();

const {
  getBooks,
  deleteBook,
  createBook,
  updateBook
} = require('./controller')


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get('/api/books', getBooks)
app.post('/api/books', createBook)
app.delete('/api/books/:id', deleteBook)
app.put('/api/books/:id', updateBook)

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
    "A feather in the hand is better than a bird in the air.",
    "A fresh start will put you on your way."
  ];
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);

})

app.get("/api/affirmations", (req, res) => {
  let affirmations = ["You Can Do This!", "You are strong!", "You are confident!", "You are Successful!", "You are powerful!"];
  res.status(200).send(affirmations);
});

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
