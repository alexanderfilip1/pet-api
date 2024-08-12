var express = require("express");
var router = express.Router();
const secure = require("../middlewares/secure");
const multer = require("multer");
const db = require("../config/db");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/uploads/"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", secure, upload.single("image"), async function (req, res) {
  const { animal, breed } = req.body;
  const image = req.file;
  try {
    console.log(animal, breed, image);
    const imageUrl = `http://localhost:3000/uploads/${image.filename}`;
    db.query("INSERT INTO animals(type, breed, image) VALUES (?,?,?)", [
      animal,
      breed,
      imageUrl,
    ]);
    res.status(200).json({
      status: "success",
      message: "Animal uploaded successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "Upload failed",
    });
  }
});

module.exports = router;
