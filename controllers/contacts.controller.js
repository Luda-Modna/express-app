const { ContactsDB } = require('./../models');

module.exports.getContacts = (req, res) => {
  const contacts = ContactsDB.getContacts();
  res.status(200).send(contacts);
};

module.exports.createContact = (req, res) => {
  const createdContact = ContactsDB.createContact(req.body);
  res.status(201).send(createdContact);
};
