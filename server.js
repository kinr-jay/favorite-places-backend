///////// Imports and Setup /////////
// Environmental Variables
require("dotenv").config()
const { PORT = 4500, NODE_ENV = "development" } = process.env

// Mongoose Connection
const mongoose = require("./db/connection.js")

// CORS
const cors = require("cors")
const corsOptions = require("./config/cors.js")

// Express Import
const express = require("express")
const app = express()

// Morgan Logger Dev Tool
const logger = require("morgan")

// Controller Import
const placeController = require("./controllers/placeCont.js")

/////////////
// Middleware
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(logger("dev"))
/////////////

// Routes
app.get("/", (req, res) => {
  res.send("<h1>I'm losing my edge.</h1>")
})

app.use("/places", placeController)

// Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
