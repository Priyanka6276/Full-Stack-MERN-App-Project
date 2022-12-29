require("dotenv").config()
require("./database")

const Category = require("../models/category")
const Word = require("../models/word")

(async function(){
    await Category.deleteMany({})
    const categories = await Category.create([
        {name:"Transporation"},
        {name:"Animal"},
        {name:"Home"}
    ])

    await Word.deleteMany({})
    const words = await Word.create([
        {language: "개", english:"dog", category:categories[1]},
        {language: "버스", english:"bus", category:categories[0]},
        {language: "집", english:"house", category:categories[2]},
    ])
    console.log(words)
    process.exit()
})

// const mongoose = require("mongoose")
// const Vocab = require("../models/word")
// const db = mongoose.connection

// db.on("open", () => {
//     const startVocab = [
//         {
//             language: "개",
//             english: "dog",
//             category: "animal"

//         },
//         {
//             language: "버스",
//             english: "bus",
//             category: "transportation"
//         },
//         {
//             language: "집",
//             english: "house",
//             category: "home"
//         }
//     ]
//     Vocab.deleteMany({}).then((data) => {
//         Vocab.create(startVocab).then((data) => {
//             console.log("data", data)
//             db.close()
//         })
//         .catch((error) => {
//             console.log(error)
//             db.close()
//         })
//     })
// })