const generateDublicateError = (field) => {
  return `${field} has already exist`;
};

const generateNotNullEror = (field) => {
  return `${field} can not be null`;
};

const DATA_ADDED_SUCCESSFULLY = "Data added successfully";
const DATA_DELETED_SUCCESSFULLY = "Data deleted successfully";

module.exports = {
  generateDublicateError,
  generateNotNullEror,
  DATA_ADDED_SUCCESSFULLY,
  DATA_DELETED_SUCCESSFULLY
};
