const Word = require("../../models/word")

exports.getAllWords = (req,res) => {
    Word.find()
    .then((word) => res.json(word))
    .catch((err) => res.status(404).json({message: "Word not found", err: err.message}))
}

exports.postCreateWord = (req,res) => {
    Word.create(req.body)
    .then((data) => res.json({message: "Word added successfully", data}))
    .catch((err) => res.status(400).json({message:"Failed to add word", error: err.message}))
}

exports.putUpdateWord = (req,res) => {
    Word.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({message: "Updated sucessfully", data}))
    .catch((err) => res.status(400).json({message: "Failed to update word", error: err.message}))
}

exports.deleteWord = (req,res) => {
    Word.findByIdAndRemove(req.params.id, req.body)
    .then((data) => res.json({message: "Word deleted successfully", data}))
    .catch((err) => res.status(404).json({message:"Word not found", error: err.message}))
}
