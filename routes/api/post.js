const express = require("express")
const router = express.Router()
const Post = require("../../models/post")

router.get("/", async (req,res,next) => {
    let posts
    try{
        posts = await Post.find()
    } catch (err) {
        console.log(err)
    }

    if(!posts){
        return res.status(404).json({message:"No posts found"})
    }
    return res.status(200).json({ posts })
})

module.exports = router