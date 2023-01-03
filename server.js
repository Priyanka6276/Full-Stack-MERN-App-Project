const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
require('dotenv').config()
const connectDB = require("./config/database")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express();
connectDB()

const posts = require("./routes/api/post")


app.use(logger('dev'))
app.use(express.json({ extended: false }))

app.use(cors({ origin: true, credentials: true}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
app.use(express.static(path.join(__dirname, "build")))
app.use(require('./config/checkToken'))

app.use('/api/users', require("./routes/api/users"))
app.use("/api/words", require("./routes/api/words"))
app.use("/api/pages", require("./routes/api/pages"))
app.use("/api/posts", posts)





//catch all route
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Express app is running on port: ${PORT}`)
})

