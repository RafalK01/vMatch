// server.js
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5001

const WordList = require('../server/models/List.model')

app.use(cors())


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/vMatch')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));
// Define routes
app.get('/api', (req, res) => {
  WordList.find()
  .then((wordlist) => {res.json(wordlist)})
  .catch(err => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});
