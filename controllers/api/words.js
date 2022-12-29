
const Word = require("../../models/word")

module.exports = {
    create,
    index,
    show
}

async function create(req,res) {
    try {
        const word = await Word.create(req.body)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function index(req,res){
    try{
        const words = await Word.find({}).sort("english").populate("category").exec()
        res.status(200).json(words)

    }catch(err){
        res.status(400).json({msg: err.message})
    }
}

async function show(req,res) {
    try{
        const word = await Word.findById(req.params.id)
        res.status(200).json(word)
    }catch (err){
        res.status(400).json({ msg: err.message })
    }
}