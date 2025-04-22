const express = require('express');
const router = express.Router();
const { getAllUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller');

router.route('/profile').get(getAllUser);
router.route('/profile/create').post(createUser);
router.route('/profile/edit/:id').put(updateUser);
router.route('/profile/:id').delete(deleteUser);

router.route('/profile/:id').get(getSingleUser); 

module.exports = router;
