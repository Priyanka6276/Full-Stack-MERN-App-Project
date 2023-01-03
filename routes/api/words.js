const express = require("express")
const router = express.Router()

const {
    getAllWords,
    deleteWord,
    putUpdateWord,
    postCreateWord,
    getWord
} = require("../../controllers/api/word")

router.get("/vocab-list", getAllWords)

router.delete("/vocab-list/:id", deleteWord)

router.put("/vocab-list/:id",  putUpdateWord)

router.post("/vocab-list", postCreateWord)

router.get("/vocab-list/:id", getWord)


module.exports = router