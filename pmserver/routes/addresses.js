var express = require('express');
var router = express.Router();

const addressController = require('../controllers/addressController');

router.get('/', addressController.address_list);

router.post('/', addressController.create_address);

router.put('/:id', addressController.edit_address);

router.delete('/:id', addressController.delete_address);

module.exports = router;
