const express = require('express');
const { contactsController, tasksController } = require('./controllers');
const { validate } = require('./middleware');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('app )))');
});

app.get('/contacts', contactsController.getContacts);

app.post(
  '/contacts',
  validate.validateContactOnCreate,
  contactsController.createContact
);

app.get('/contacts/:id', contactsController.getContactsById);

app.patch(
  '/contacts/:id',
  validate.validateContactOnUpdate,
  contactsController.updateContactById
);

app.delete('/contacts/:id', contactsController.deleteContactById);

app.get('/tasks', tasksController.getTasks);

app.post('/tasks', tasksController.createTask);

app.get('/tasks/:id', tasksController.getTaskById);
app.patch('/tasks/:id', tasksController.updateTasksById);
app.delete('/tasks/:id', tasksController.deleteTasksById);

module.exports = app;
