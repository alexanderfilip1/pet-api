const jwt = require("jsonwebtoken");

function secure(req, res, next) {
  console.log(req.headers.authorization);
  try {
    const verify = jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET
    );
    console.log(verify);
    next();
  } catch (err) {
    res.status(400).json({ status: "error", message: "Not authorized" });
    return;
  }
}

module.exports = secure;
