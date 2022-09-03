const bcrypt = require("bcrypt");
const saltRound = +process.env.SALT_ROUND || 3;

const encryptPwd = (data) => {
  return bcrypt.hashSync(data, saltRound);
};

const decryptPwd = (data, hashPwd) => {
  return bcrypt.compareSync(data, hashPwd);
};

module.exports = {
  encryptPwd,
  decryptPwd,
};
