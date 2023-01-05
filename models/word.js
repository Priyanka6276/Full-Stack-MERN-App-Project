const mongoose = require("mongoose")
const Schema = mongoose.Schema




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
    },
    notes: {
        type:String,
    }
},
{
    timestamps: true
})

const Word = mongoose.model("word", wordSchema)

module.exports = Word