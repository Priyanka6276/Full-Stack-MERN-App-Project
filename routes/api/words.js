const express = require("express")
const router = express.Router()

const {
    getAllWords,
    postCreateWord,
    putUpdateWord,
    deleteWord,
} = require("../../controllers/api/word")

router.get("/vocab-list", getAllWords)

router.post("/vocab-list", postCreateWord)

router.put("/vocab-list/:id",  putUpdateWord)

router.delete("vocab-list/:id", deleteWord)



module.exports = router