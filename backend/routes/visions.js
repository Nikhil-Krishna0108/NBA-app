const express = require('express');
const router = express.Router();

const exercise_controller = require('../controllers/vision.controllers');

router.get('/', vision_controller.list_visions);
router.post('/add', vision_controller.add_vision);
router.get('/:id', vision_controller.find_vision);
router.delete('/:id', vision_controller.delete_vision);
router.post('/update/:id', vision_controller.update_vision);

module.exports = router;
