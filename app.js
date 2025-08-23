const express = require('express');
const { contactsController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('app )))');
});

app.get('/contacts', contactsController.getContacts);

app.post('/contacts', contactsController.createContact);

app.get('/contacts/:id', contactsController.getContactsById);

app.patch('/contacts/:id', contactsController.updateContactById);

module.exports = app;
