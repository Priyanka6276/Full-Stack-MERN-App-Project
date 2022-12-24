const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flashcardSchema = new Schema({
    language: {
        type: String,
        required: true,
    },
    english: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Flashcard", flashcardSchema)