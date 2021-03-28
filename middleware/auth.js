const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  let token;
  // Get token from the header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, config.get("JWT_SECRET"));

      req.user = decoded.user;
      next();
    } catch (error) {
      res.status(401).json({ msg: "Token is not valid" });
    }
  }

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
};
