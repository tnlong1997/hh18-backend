var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send({
		success: true,
		code: 200,
		status: "Welcome to primor public routes"
	});
});

module.exports = router;
