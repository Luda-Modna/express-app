const express = require('express');
const { contactsController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('app )))');
});

app.get('/contacts', contactsController.getContacts);

app.post('/contacts', contactsController.createContact);

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
