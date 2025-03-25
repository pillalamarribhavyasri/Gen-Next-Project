const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents);
router.post('/', eventController.protect, eventController.createEvent);
router.get('/:id', eventController.getEvent);
router.patch('/:id', eventController.protect, eventController.updateEvent);

module.exports = router;