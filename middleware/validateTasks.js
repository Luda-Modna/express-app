const {
  CREATE_TASKS_SCHEMA,
  UPDATE_TASKS_SCHEMA,
} = require('./../utils/validationTasksSchema');

const validate = schema => async (req, res, next) => {
  try {
    const validated = await schema.validate(req.body);
    req.body = validated;
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  validateTasksOnCreate: validate(CREATE_TASKS_SCHEMA),
  validateTasksOnUpdate: validate(UPDATE_TASKS_SCHEMA),
};
