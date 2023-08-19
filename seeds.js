const mongoose = require("mongoose");
const spots = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Spot = require("../models/spot");
import * as dotenv from "dotenv";
dotenv.config();

mongoose.connect("mongodb://127.0.0.1:27017/study-spotter", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Spot.deleteMany({});
  for (let i = 0; i < 8; i++) {
    const study = new Spot({
      author: "64b6334954524515a1eb1a4b",
      location: spots[i].address,
      title: spots[i].name,
      images: [
        {
          url: "https://res.cloudinary.com/doi9yfsfy/image/upload/v1688590000/cld-sample-3.jpg",
          filename: "cld-sample-3.jpg",
        },
        {
          url: "https://res.cloudinary.com/doi9yfsfy/image/upload/v1688590000/cld-sample-4.jpg",
          filename: "cld-sample-4.jpg",
        },
        {
          url: "https://res.cloudinary.com/doi9yfsfy/image/upload/v1688590000/cld-sample-2.jpg",
          filename: "cld-sample-2.jpg",
        },
        {
          url: "https://res.cloudinary.com/doi9yfsfy/image/upload/v1688590000/cld-sample-5.jpg",
          filename: "cld-sample-5.jpg",
        },
      ],
      description: spots[i].description,
      geometry: {
        type: "Point",
        coordinates: [spots[i].longitude, spots[i].latitude],
      },
    });
    await study.save();
  }
};

seedDB();
