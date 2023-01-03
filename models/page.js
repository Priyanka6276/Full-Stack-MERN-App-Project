const mongoose = require("mongoose")
const Schema = mongoose.Schema

const pageSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required:true
    },
    entry: {
        type: String,
        required: true
    },
    tags: {
        type:[String]
    }
})



const Page = mongoose.model("page", pageSchema)

module.exports = Page