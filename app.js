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

module.exports = app;
