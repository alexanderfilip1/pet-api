var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  const { username, password } = req.body;
  console.log(username, password);
});

module.exports = router;
