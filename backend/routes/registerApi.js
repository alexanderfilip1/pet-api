var express = require("express");
var router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcryptjs");
const registerSchema = require("../schemas/registerSchema");
const validate = require("../middlewares/validate");

router.post("/", validate(registerSchema), async function (req, res) {
  const { username, password } = req.body;
  let hashedPassword;
  try {
    hashedPassword = bcrypt.hashSync(password, 10);
    await db.query("INSERT INTO users(username, password) VALUES (?, ?)", [
      username,
      hashedPassword,
    ]);

    res
      .status(201)
      .json({ status: "success", message: "User registered successfully" });
  } catch (err) {
    console.log(err);

    if (err.code === "ER_DUP_ENTRY") {
      res
        .status(400)
        .json({ status: "error", message: "Account already exists" });
    }
    res.status(500).json({ status: "error", message: "Database error" });
  }
});

module.exports = router;
