const createError = require('http-errors');
const { ContactsDB } = require('./../models');

module.exports.getContacts = (req, res) => {
  const { page = 1, results = 5 } = req.query;
  const contacts = ContactsDB.getContacts(page, results);
  res.status(200).send(contacts);
};

module.exports.createContact = (req, res) => {
  const { body } = req;
  const createdContact = ContactsDB.createContact(body);
  res.status(201).send(createdContact);
};

module.exports.getContactsById = (req, res, next) => {
  const { id } = req.params;
  const foundContact = ContactsDB.getContactsById(id);
  if (foundContact) {
    return res.status(200).send(foundContact);
  }
  next(createError(404, 'Contacts not found'));
};

module.exports.updateContactById = (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;

  const updatedContact = ContactsDB.updateContact(id, body);
  if (updatedContact) {
    return res.status(200).send(updatedContact);
  }
  next(createError(404, 'Contacts not found'));
};

module.exports.deleteContactById = (req, res, next) => {
  const {
    params: { id },
  } = req;

  const deletedContact = ContactsDB.deleteContact(id);
  if (deletedContact) {
    return res.status(204).send();
  }
  next(createError(204, 'Contacts not found'));
};
