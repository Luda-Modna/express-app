const express = require('express');



// Створення екземпляру експресу
const app = express();

// Middleware to parse json to js-object
app.use(express.json());

app.get('/', (req, res) => {
  res.send('app )))');
});

// CRUD
// Навішування обробника на метод GET на маршрут '/contacts'
app.get('/contacts', (req, res) => {
  const contacts = contactsDbInstace.getContacts();
  res.status(200).send(contacts);
});

// Навішування обробника на метод POST на маршрут '/contacts'
app.post('/contacts', (req, res) => {
  // В req.body приходе тіло запиту
  const createdContact = contactsDbInstace.createContact(req.body);
  res.status(201).send(createdContact);
});

app.get('/contacts/:id', (req, res) => {
  const {
    params: { id },
    query: { results, page },
  } = req;
  console.log(req.params);
  console.log('query', req.query);

  res.status(200).send('ok')
});

module.exports = app;
