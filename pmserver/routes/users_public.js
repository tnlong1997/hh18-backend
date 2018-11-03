var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

router.post('/', userController.user_sign_up);

router.post('/login', userController.user_log_in);

router.post('/forgot', userController.user_forgot_password);

router.get('/reset/:token', userController.user_reset_password_get);

router.post('/reset/:token', userController.user_reset_password_post);

module.exports = router;
