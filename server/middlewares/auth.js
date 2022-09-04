const { tokenVerifier } = require("../helpers/jsonwebtoken");

const authentication = (req, res, next) => {
  // console.log("Middleware authentication");
  const access_token = req.headers.access_token;

  if (access_token) {
    try {
      let verifyToken = tokenVerifier(access_token);
      req.userData = verifyToken;
      next();
    } catch (err) {
      res.status(401).json({
        message: "Token gk authenticated!",
      });
    }
  } else {
    res.status(404).json({
      message: "Access token gk ada!",
    });
  }
};

module.exports = {
  authentication,
};
