const yup = require('yup');

const BODY_VALIDATION_SCHEMA = yup.string().min(3).max(200);
const DEADLINE_VALIDATION_SCHEMA = yup.date().min(new Date());

module.exports.CREATE_TASKS_SCHEMA = yup.object({
  body: BODY_VALIDATION_SCHEMA.required(),
  deadline: DEADLINE_VALIDATION_SCHEMA,
});

module.exports.UPDATE_TASKS_SCHEMA = yup.object({
  body: BODY_VALIDATION_SCHEMA,
  deadline: DEADLINE_VALIDATION_SCHEMA,
  isDone: yup.boolean(),
});
