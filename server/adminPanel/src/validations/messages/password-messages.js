const PASSWORD_CONFIG = require("../../config/password-config");

const PASSWORD_MIN_LENGTH = `Password must be greater than ${PASSWORD_CONFIG.minLength}`;
const PASSWORD_ONE_UPPERCASE =
  "Password must contain at least one uppercase letter";
const PASSWORD_ONE_LOWERCASE =
  "Password must contain at least one lowercase letter";

module.exports = {
    PASSWORD_MIN_LENGTH,
    PASSWORD_ONE_LOWERCASE,
    PASSWORD_ONE_UPPERCASE
}  