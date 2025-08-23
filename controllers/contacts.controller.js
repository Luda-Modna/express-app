const { ContactsDB } = require('./../models');

module.exports.getContacts = (req, res) => {
  const contacts = ContactsDB.getContacts();
  res.status(200).send(contacts);
};

module.exports.createContact = (req, res) => {
  const { body } = req;
  const createdContact = ContactsDB.createContact(body);
  res.status(201).send(createdContact);
};

module.exports.getContactsById = (req, res) => {
  const { id } = req.params;
  const foundContact = ContactsDB.getContactsById(id);
  if (foundContact) {
    res.status(200).send(foundContact);
  } else {
    res.status(404).send('Contacts not found');
  }
};

module.exports.updateContactById = (req, res) => {
  const {
    params: { id },
    body,
  } = req;

  const updatedContact = ContactsDB.updateContact(id, body);
  if (updatedContact) {
    res.status(200).send(updatedContact);
  } else {
    res.status(404).send('Contacts not found');
  }
};
