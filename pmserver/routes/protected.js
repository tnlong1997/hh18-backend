var express = require('express');
var router = express.Router();

var tokenAuthentication = require('../middleware/tokenAuthentication');

// Add tokenAuthentication as middleware
router.use(tokenAuthentication);

router.get('/', function(req, res) {
	// For testing
	return res.send({
		success: true,
		code: 200,
		status: "Welcome to primor protected routes"
	});
});

module.exports = router;
