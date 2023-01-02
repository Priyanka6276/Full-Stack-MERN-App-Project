const express = require("express")
const router = express.Router()

const{
    getAllPages,
    postCreatePages,
    putUpdatePage,
    deletePage
} = require("../../controllers/api/page")

router.get("/notebook/pages/:id", getAllPages)

router.post("/notebook", postCreatePages)

router.put("/notebook/pages/:id", putUpdatePage)

router.delete("/notebook/pages/:id", deletePage)

module.exports = router