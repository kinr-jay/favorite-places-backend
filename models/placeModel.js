const { Schema, model } = require("mongoose")

const placeSchema = new Schema(
  {
    name: String,
    img: String,
    description: String,
  },
  { timestamps: true }
)

const Place = model("Place", placeSchema)

module.exports = Place
