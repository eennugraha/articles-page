const jwt = require("jsonwebtoken");
const secretCode = process.env.SECRET_CODE || "bebas";

const tokenGenerator = (data) => {
  const {
    id,
    name,
    email,
    dateOfBirth,
    address,
    education,
    organizationExp,
    workExp,
  } = data;
  return jwt.sign(
    {
      id,
      name,
      email,
      dateOfBirth,
      address,
      education,
      organizationExp,
      workExp,
    },
    secretCode
  );
};

const tokenVerifier = (data) => {
  return jwt.verify(data, secretCode);
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};
