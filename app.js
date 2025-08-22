const express = require('express');
const { ContactsDB } = require('./models');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('app )))');
});

app.get('/contacts', (req, res) => {
  const contacts = ContactsDB.getContacts();
  res.status(200).send(contacts);
});

app.post('/contacts', (req, res) => {
  const createdContact = ContactsDB.createContact(req.body);
  res.status(201).send(createdContact);
});

app.get('/contacts/:id', (req, res) => {
  const {
    params: { id },
    query: { results, page },
  } = req;
  console.log(req.params);
  console.log('query', req.query);

  res.status(200).send('ok');
});

module.exports = app;
