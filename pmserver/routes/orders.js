var express = require('express');
var router = express.Router();

const orderController = require('../controllers/orderController');

router.get('/', orderController.order_list);

router.post('/', orderController.create_order);

router.put('/:id', orderController.edit_order);

router.delete('/:id', orderController.delete_order);

module.exports = router;
