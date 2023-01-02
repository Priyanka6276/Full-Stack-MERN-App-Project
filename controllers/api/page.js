const Page = require("../../models/page")


exports.getAllPages = (req,res) => {
    Page.find()
    .then((page) => res.json(page))
    .catch((err) => res.status(404).json({message: "Page not found", err: err.message}))
}

exports.postCreatePages = (req,res) => {
    Page.create(req.body)
    .then((data) => res.json({message: "Page added successfully", data}))
    .catch((err) => res.status(400).json({message:"Failed to add Page", error: err.message}))
}

exports.putUpdatePage = (req,res) => {
    Page.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({message: "Updated sucessfully", data}))
    .catch((err) => res.status(400).json({message: "Failed to update Page", error: err.message}))
}

exports.deletePage = (req,res) => {
    Page.findByIdAndRemove(req.params.id, req.body)
    .then((data) => res.json({message: "Page deleted successfully", data}))
    .catch((err) => res.status(404).json({message:"Page not found", error: err.message}))
}