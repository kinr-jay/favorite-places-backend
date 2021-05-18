const Place = require("../models/placeModel.js")
const { Router } = require("express")
const router = Router()

const placeSeed = [
  {
    name: "Point Reyes",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Chimney_Rock_Trail_Point_Reyes_December_2016_panorama_1.jpg/2560px-Chimney_Rock_Trail_Point_Reyes_December_2016_panorama_1.jpg",
    description:
      "This National Seashore sits atop a massive chunk of granite that has been dragged 300 miles north from the southern end of the Sierra Nevada over 100 million years by the San Andreas Fault.",
  },
  {
    name: "Redwood Creek",
    img: "http://www.redwoodhikes.com/RNP/RedwoodCreekCG1.jpg",
    description:
      "Redwood Creek is the main waterway in the Redwood National Park. It's canyons contain much of the remaining old growth Coastal Redwoods, including the tallest tree in the world, Hyperion.",
  },
  {
    name: "Third Street Aleworks",
    img: "https://www.sonomamag.com/guide/wp-content/uploads/2017/06/cj0817_3rdStreetAleworks03-1274x800.jpg",
    description:
      "Sometimes you wanna go... WHERE EVERYBODY KNOWS YOUR NAAAAME.",
  },
]

// Index Route
router.get("/", async (Req, res) => {
  try {
    const places = await Place.find({})
    res.json(places)
  } catch (error) {
    res.status(400).json(error)
  }
})

// CREATE Route
router.post("/", async (req, res) => {
  try {
    const newPlace = await Place.create(req.body)
    res.json(newPlace)
  } catch (error) {
    res.status(400).json(error)
  }
})

// update Route
router.put("/:id", async (req, res) => {
  try {
    const updatedPlace = await Place.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedPlace)
  } catch (error) {
    res.status(400).json(error)
  }
})

// update Route
router.delete("/:id", async (req, res) => {
  try {
    const deletedPlace = await Place.findByIdAndRemove(req.params.id)
    res.json(deletedPlace)
  } catch (error) {
    res.status(400).json(error)
  }
})

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
  try {
    await Place.remove({})
    await Place.create(placeSeed)
    const places = await Place.find({})
    res.json(places)
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router
