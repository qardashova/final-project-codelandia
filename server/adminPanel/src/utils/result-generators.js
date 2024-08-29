const generateOperationResult = (success, message, data = null) => {
  return {
    success,
    message,
    data,
  };
};

const generateValidationResult = (success, message) => {
  return {
    success,
    message,
  };
};

const successResult = (message, data = null) => {
  return generateOperationResult(true, message, data);
};

const errorResult = (message, data = null) => {
  return generateOperationResult(false, message, data);
};

const combineValidationResults = (...validationResults) => {
  for (const resuult of validationResults) {
    if (!resuult.success) {
      return errorResult(resuult.message);
    }
  }
  return successResult("");
};

module.exports = {
  successResult,
  errorResult,
  combineValidationResults,
  generateValidationResult,
};
