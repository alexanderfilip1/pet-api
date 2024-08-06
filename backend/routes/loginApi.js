var express = require("express");
var router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcryptjs");
const loginSchema = require("../schemas/registerSchema");
const validate = require("../middlewares/validate");
const jwt = require("jsonwebtoken");

router.post("/", validate(loginSchema), async function (req, res) {
  const { username, password } = req.body;
  try {
    const [data] = await db.query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);

    console.log(data[0]);
    const isValid = await bcrypt.compare(password, data[0].password);
    if (username === data[0].username && isValid) {
      const token = jwt.sign(
        { id: data[0].id, username: username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res
        .status(200)
        .json({ status: "success", message: "Logged in!", token: token });
    } else {
      res
        .status(401)
        .json({ status: "error", message: "Incorrect login or password" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "error", message: "Database error" });
  }
});

module.exports = router;
