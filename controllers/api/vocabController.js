const express = require("express")
const router = express.Router()
const Vocab = require("../../models/word")

//Seed Route
router.get("/dashboard/seed", (req,res) => {
    Vocab.create([
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
    ], (err,data) => {
        res.redirect("/vocab")
    })
})

//Index
router.get("/vocab-list", async (req,res) => {
    try{
        const vocab = await Vocab.find({email: req.session.email})
        res.render("pages/VocabListPage")
    } catch (err) {
        res.json({ err })
    }
})

//New 
router.get("/vocab-list", (req,res) => {
    res
    .render("components/AddNewWord.js")
})

//Delete
router.delete("/vocab", (req,res) => {
    const id = req.params.id
    Vocab.findByIdAndDelete(id)
    .then((vocab) => {
        res.redirect("/vocab")
    })
    .catch((error) => {
        res.json({ error })
    })
})

//Update
router.put("/vocab/:id", async (req,res) => {
    try {
        const id = req.params.id
        await Vocab.findByIdAndUpdate(id, req.body)
        res.redirect(`/vocab/${id}`)
    } catch (err) {
        res.json({ err })
    }
})

//Create
router.post("/vocab", async (req,res) => {
    try{
        req.body.email = req.session.email
        const createdVocab = await Vocab.create(req.body)
        res.redirect("/vocab")
    } catch(err) {
        res.json({ err })
    }
})

//Edit
router.get("/vocab/:id/edit", (req,res) => {
    const id = req.params.id
    Vocab.findById(id)
    .then((vocab) => {
        res.render("pages/VocabEditPage", { vocab })
    })
    .catch((err) => {
        res.json({ err })
    })
})

//Show
router.get("/vocab/:id", async (req,res) => {
    const id = req.params.id
    try {
        const vocab = await Vocab.findById(id)
        res.render("pages/VocabPage", { vocab })
    } catch (err){
        res.json({ err })
    }
})

module.exports = router