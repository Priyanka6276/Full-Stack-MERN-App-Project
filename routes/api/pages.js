const express = require("express")
const router = express.Router()

const {
    getAllPages,
    deletePage,
    putUpdatePage,
    postCreatePage,
    getPage
} = require("../../controllers/api/page")

//all pages
router.get("/notebook", getAllPages)

//a single page
router.get("/notebook/:id", getPage)

//create a new page
router.post("/notebook", postCreatePage)

//update a page
router.put("/notebook/:id",  putUpdatePage)

//delete a page
router.delete("/notebook/:id", deletePage)


module.exports = router