const mongoose = require("mongoose")
const Schema = mongoose.Schema

const vocabSchema = new Schema({
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

const Vocab = mongoose.model("Vocab", vocabSchema)

module.exports = Vocab