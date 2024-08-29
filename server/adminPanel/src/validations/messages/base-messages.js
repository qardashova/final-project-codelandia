const generateDublicateError = (field) => {
  return `${field} has already exist`;
};

const generateNotNullEror = (field) => {
  return `${field} can not be null`;
};

const DATA_ADDED_SUCCESSFULLY = "Data added successfully";

module.exports = {
  generateDublicateError,
  generateNotNullEror,
  DATA_ADDED_SUCCESSFULLY
};
