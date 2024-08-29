const PASSWORD_CONFIG = require("../config/password-config");
const {
  generateValidationResult,
  combineValidationResults,
} = require("../utils/result-generators");
const {
  PASSWORD_MIN_LENGTH,
  PASSWORD_ONE_LOWERCASE,
  PASSWORD_ONE_UPPERCASE,
} = require("./messages/password-messages");

const validatePassword = (password) => {
  const validatePassword = combineValidationResults(
    checkPasswordLength(password),
    checkOneLowerCase(password),
    checkOneUpperCase(password)
  );
  return validatePassword;
};

const checkPasswordLength = (password) => {
  if (password.length < PASSWORD_CONFIG.minLength) {
    return generateValidationResult(false, PASSWORD_MIN_LENGTH);
  }
  return generateValidationResult(true, "");
};

const checkOneLowerCase = (password) => {
  if (PASSWORD_CONFIG.isContainLowerCase && !/[a-z]/.test(password)) {
    return generateValidationResult(false, PASSWORD_ONE_LOWERCASE);
  }
  return generateValidationResult(true, "");
};

const checkOneUpperCase = (password) => {
  if (PASSWORD_CONFIG.isContainLowerCase && !/[a-z]/.test(password)) {
    return generateValidationResult(false, PASSWORD_ONE_UPPERCASE);
  }
  return generateValidationResult(true, "");
};

module.exports = validatePassword;
