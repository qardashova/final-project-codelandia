const {
  generateValidationResult,
  combineValidationResults,
} = require("../utils/result-generators");
const baseMessages = require("./messages/base-messages");

const validateUser = (user) => {
  const validationResult = combineValidationResults(checkUserNotNull(user));
  return validationResult;
};

const checkUserNotNull = (user) => {
  const username = user.username;
  if ((username = "")) {
    return generateValidationResult(
      false,
      baseMessages.generateNotNullEror(username)
    );
  }
  return generateValidationResult(true, "");
};

const checkUserExistence = (user) =>{
  
}

module.exports = validateUser;
