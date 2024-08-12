var express = require("express");
var router = express.Router();
const secure = require("../middlewares/secure");
const db = require("../config/db");

router.post("/", secure, async function (req, res) {
  const { animal, breed, image } = req.body;
  console.log(animal, breed, image);
});
