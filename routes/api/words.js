const express = require("express")
const router = express.Router()
const wordsCtrl = require("../../controllers/api/words")

router.get("/", wordsCtrl.index)

router.get("/:id", wordsCtrl.show)

module.exports = router