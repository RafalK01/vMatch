const mongoose = require('mongoose')

const wordListSchema = new mongoose.Schema({
  words: [{ type: String, required: true }],
  translations: [{ type: String, required: true }]
})

const WordList = mongoose.model('WordList', wordListSchema)

module.exports = WordList