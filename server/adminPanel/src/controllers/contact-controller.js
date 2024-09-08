const Contact = require("../models/contact");
const contactServices = require("../services/contact-service");
const {
  generateBaseResponse,
  generateResponse,
} = require("../utils/response-generator");
const { INTERNAL_SERVER_ERROR } = require("../validations/messages/status-messages");

const addContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const res = await contactServices.addContact(contact);
    generateResponse(res, result);
  } catch (error) {
    console.log(error);
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};


module.exports = {addContact}