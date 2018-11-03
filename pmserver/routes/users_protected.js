var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.user_list);

router.get('/:id/profile', userController.user_get_profile);

router.put('/:id/password', userController.user_change_password);

router.put('/:id/profile', userController.user_update_profile);

router.delete('/:id', userController.user_delete);

module.exports = router;
