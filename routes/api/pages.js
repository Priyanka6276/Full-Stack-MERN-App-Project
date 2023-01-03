const express = require("express")
const router = express.Router()

const {
    getAllPages,
    deletePage,
    putUpdatePage,
    postCreatePage
} = require("../../controllers/api/page")

router.get("/notebook", getAllPages)

router.delete("notebook/:id", deletePage)

router.put("/notebook/:id",  putUpdatePage)

router.post("/notebook", postCreatePage)



module.exports = router