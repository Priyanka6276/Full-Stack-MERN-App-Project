const express = require("express")
const router = express.Router()
const Vocab = require("../models/vocab")

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
router.get("/vocab", (req,res) => {
    Vocab.find({}, (error, allVocabs) => {
        if(!error){
            res
            .status(200)
            .render("pages/VocabListPage", {
                vocabs: allVocabs
            })
        } else {
            res
            .status(400)
            .send(error)
        }
    })
})

//New 
router.get("/vocab", (req,res) => {
    res
    .render("pages/VocabListPage")
})

//Delete
router.delete("/vocab", (req,res) => {
    Vocab.findByIdAndDelete(req.params.id, (err,data) => {
        res.redirect("/vocab")
    })
})

//Update
router.put("/vocab", (req,res) => {
    Vocab.findByIdAndUpdate(req.params.id, req.body, (err, updatedVocab) => {
        if(!err){
            res
            .status(200)
        } else {
            res
            .status(400)
            .send(err)
        }
    })
})

//Create
router.post("/vocab", (req,res) => {
    Vocab.create(req.body, (error, createdVocab) => {
        if(!error) {
            res
            .status(200)
        } else {
            res
            .status(400)
            .send(error)
        }
    })
})

//Edit
router.get("/vocab", (req,res) => {
    Vocab.findById(req.params.id, (err, foundVocab) => {
        if(!err) {
            res
            .status(200)
            .render("pages/VocabListPage", {vocab: foundVocab})
        } else {
            res
            .status(400)
            .send({mes: err.message})
        }
    })
})

//Show
router.get("/vocab", (req,res) => {
    Vocab.findById(req.params.id, (error, foundVocab) => {
        if (!error) {
            res
            .status(200)
            .render("pages/VocabListPage", {
                vocab: foundVocab
            })
        } else {
            res
            .status(400)
            .send(error)
        }
    })
})

module.exports = router