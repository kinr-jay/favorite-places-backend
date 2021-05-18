// Import Environmental Variables
require("dotenv").config()

// Establish Mongoose Connection
const mongoose = require("mongoose")
const { MONGODB_URI } = process.env
const config = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
}
mongoose.connect(MONGODB_URI, config)
const db = mongoose.connection

db.on("open", () => console.log("You are connected to Mongo"))
  .on("close", () => console.log("You are disconnected to Mongo"))
  .on("error", (err) => console.log(err))

module.exports = mongoose
