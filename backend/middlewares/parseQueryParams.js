module.exports = (req, res, next) => {
  if (req.query.random !== undefined) {
    req.query.random = parseInt(req.query.random);
  }
  next();
};
