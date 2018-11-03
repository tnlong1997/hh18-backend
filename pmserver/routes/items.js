var express = require('express');
var router = express.Router();

const itemController = require('../controllers/itemController');

router.get('/', itemController.item_list);

router.post('/', itemController.create_item);

router.put('/:id', itemController.edit_item);

router.delete('/:id', itemController.delete_item);

module.exports = router;
