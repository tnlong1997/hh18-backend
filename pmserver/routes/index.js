var express = require('express');
var router = express.Router();

router.get('/', function(req, res, err) {
	if (err) {
		return res.send({
			success: false,
			code: 400,
			status: "Unable to get the index pages",
			err: err
		});
	}
	return res.send({
		success: true,
		code: 200,
		status: "Welcome to primor."
	});
});

module.exports = router;
