const { v4: uuidv4 } = require('uuid');

const tasksDB = [
  {
    id: '0',
    body: 'Прочитати документацію по React',
    deadline: '2025-08-25',
    isDone: false,
  },
  {
    id: '1',
    body: 'Зробити верстку головної сторінки',
    deadline: '2025-08-27',
    isDone: false,
  },
  {
    id: '2',
    body: 'Виправити баг із формою логіну',
    deadline: '2025-08-28',
    isDone: true,
  },
  {
    id: '3',
    body: 'Підготувати питання для менторської зустрічі',
    deadline: '2025-08-30',
    isDone: false,
  },
  {
    id: '4',
    body: 'Написати тестові завдання для проекту',
    deadline: '2025-09-01',
    isDone: false,
  },
  {
    id: '5',
    body: ' React',
    deadline: '2025-08-25',
    isDone: false,
  },
  {
    id: '6',
    body: 'qwerty',
    deadline: '2025-08-27',
    isDone: false,
  },
  {
    id: '7',
    body: 'paginate',
    deadline: '2025-08-28',
    isDone: true,
  },
  {
    id: '8',
    body: 'asdfghj',
    deadline: '2025-08-30',
    isDone: false,
  },
  {
    id: '9',
    body: 'zxcvbnm',
    deadline: '2025-09-01',
    isDone: false,
  },
  {
    id: '10',
    body: 'Прочитати React',
    deadline: '2025-08-25',
    isDone: false,
  },
  {
    id: '11',
    body: 'Зробити верстку',
    deadline: '2025-08-27',
    isDone: false,
  },
  {
    id: '12',
    body: 'Виправити баг ',
    deadline: '2025-08-28',
    isDone: true,
  },
  {
    id: '13',
    body: 'Підготувати питання ',
    deadline: '2025-08-30',
    isDone: false,
  },
  {
    id: '14',
    body: 'Написати тестові завдання',
    deadline: '2025-09-01',
    isDone: false,
  },
];

class TasksDB {
  constructor (arr) {
    this.tasks = [...arr];
  }

  getTasks (page, results) {
    return [...this.tasks.slice((page - 1) * results, page * results)];
  }

  createTask (newTask) {
    const { tasks } = this;

    tasks.push({ ...newTask, id: uuidv4(), isDone: false });
    return tasks[tasks.length - 1];
  }

  getIndexById (id) {
    const { tasks } = this;
    return tasks.findIndex(t => t.id === id);
  }

  getTasksById (id) {
    const { tasks } = this;

    const index = this.getIndexById(id);
    return index === -1 ? null : tasks[index];
  }

  updateTask (id, value) {
    const { tasks } = this;

    const index = this.getIndexById(id);

    if (index === -1) return null;
    tasks[index] = {
      ...tasks[index],
      ...value,
    };
    return tasks[index];
  }

  deleteTasks (id) {
    const { tasks } = this;

    const index = this.getIndexById(id);

    if (index === -1) return null;
    return tasks.splice(index, 1);
  }
}

const tasksDBInstance = new TasksDB(tasksDB);

module.exports = tasksDBInstance;
