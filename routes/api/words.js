const express = require("express")
const router = express.Router()

const {
    getAllWords,
    deleteWord,
    putUpdateWord,
    postCreateWord
} = require("../../controllers/api/word")

router.get("/vocab-list", getAllWords)

router.delete("vocab-list/:id", deleteWord)

router.put("/vocab-list/:id",  putUpdateWord)

router.post("/vocab-list", postCreateWord)



module.exports = router