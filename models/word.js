const mongoose = require("mongoose")
const Schema = mongoose.Schema
require("./category")

const wordSchema = new Schema({
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
},
{
    timestamps: true
})

const Word = mongoose.model("word", wordSchema)

module.exports = Word