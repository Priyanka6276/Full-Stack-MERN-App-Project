const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
require("dotenv").config()
require("./config/database")
const app = express()
const methodOverride = require('method-override')
const vocabController = require("./controllers/vocabController")


app.use(logger('dev'))
app.use(express.json())



app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
app.use(express.static(path.join(__dirname, "build")))

app.use(require("./config/checkToken"))
app.use((req, res, next) => {
    console.log("I'm running for all routes")
    console.log("1.middleware")
    next()
})

app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))
app.use(express.static('public'))



app.use("/api/users", require("./routes/api/users"))

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.use("/vocab", vocabController)



const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Express is running on port: ${PORT}`)
})

