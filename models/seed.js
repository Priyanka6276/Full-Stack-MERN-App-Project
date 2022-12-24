const mongoose = require("mongoose")
const Vocab = require("./vocab")
const db = mongoose.connection

db.on("open", () => {
    const startVocab = [
        {
            language: "개",
            english: "dog",
            category: "animal"

        },
        {
            language: "버스",
            english: "bus",
            category: "transportation"
        },
        {
            language: "집",
            english: "house",
            category: "home"
        }
    ]
    Vocab.deleteMany({}).then((data) => {
        Vocab.create(startVocab).then((data) => {
            console.log("data", data)
            db.close()
        })
        .catch((error) => {
            console.log(error)
            db.close()
        })
    })
})