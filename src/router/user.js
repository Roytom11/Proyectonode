const express = require('express');
const { getUsers} = require('../controller/user')
const router = express.Router();
router.get('/', getUsers);


//const usersController = require('../controllers/users');

//router.get('/', users.usersController.getUsers);

const { id } = req.params;



module.exports = router; 