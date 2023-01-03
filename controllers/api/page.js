const Page = require("../../models/page")

exports.getAllPages = (req,res) => {
    Page.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(404).json({message: "Page not found", err: err.message}))
}

exports.deletePage = (req,res) => {
    Page.findByIdAndRemove(req.params.id, req.body)
    .then((data) => res.json({message: "Page deleted successfully", data}))
    .catch((err) => res.status(404).json({message:"Page not found", error: err.message}))
}

exports.putUpdatePage = (req,res) => {
    Page.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({message: "Updated sucessfully", data}))
    .catch((err) => res.status(400).json({message: "Failed to update Page", error: err.message}))
}

exports.postCreatePage = (req,res) => {
    Page.create(req.body)
    .then((data) => res.json({message: "Page added successfully", data}))
    .catch((err) => res.status(400).json({message:"Failed to add Page", error: err.message}))
}

exports.getPage = (req,res) => {
    Page.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(404).json({message: "No Page found", error: err.message}))
}




