const jwt = require("jsonwebtoken");
require('dotenv').config()

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token)
    res
      .status(401)
      .json.send({ error: "Please authenticate using a valid token" });
  try {
    const data = jwt.verify(token, process.env.SECRET_KEY);
    req.user = data.user;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;