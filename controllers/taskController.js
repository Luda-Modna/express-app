const { TasksDB } = require('./../models');

module.exports.getTasks = (req, res) => {
  const tasks = TasksDB.getTasks();
  res.status(200).send(tasks);
};

module.exports.createTask = (req, res) => {
  const { body } = req;
  const createdTask = TasksDB.createTask(body);
  res.status(201).send(createdTask);
};

module.exports.getTaskById = (req, res) => {
  const { id } = req.params;
  const foundTask = TasksDB.getTasksById(id);

  if (foundTask) return res.status(200).send(foundTask);
  res.status(404).send('Task Not Found');
};

module.exports.updateTasksById = (req, res) => {
  const {
    params: { id },
    body,
  } = req;

  const updatedTask = TasksDB.updateTask(id, body);
  if (updatedTask) {
    return res.status(200).send(updatedTask);
  }
  res.status(404).send('Task Not Found');
};

module.exports.deleteTasksById = (req, res) => {
  const {
    params: { id },
  } = req;

  const deletedTask = TasksDB.deleteTasks(id);
  if (deletedTask) {
    return res.status(204).send('Task successfully deleted');
  }
  res.status(404).send('Tasks Not Found');
};
