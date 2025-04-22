const express = require('express');
const router = express.Router();
const { getAllTask, createTask, updateTask, deleteTask, getSingleTask } = require('../controllers/task.controller');

router.route('/tasks').get(getAllTask);
router.route('/task/create').post(createTask);
router.route('/task/edit').put(updateTask);
router.route('/task').delete(deleteTask);
router.route('/singleTask/:id').get(getSingleTask);

module.exports = router;
