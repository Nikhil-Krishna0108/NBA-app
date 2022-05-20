const express = require('express');
const router = express.Router();
let Exercise = require('../models/exercise.model');


const exercise_controller = require('../controllers/exercise.controllers');

router.get('/', function(req,res){return exercise_controller.list_table_rows(Exercise,req,res)});
// router.get('/', exercise_controller.list_exercises);
router.post('/add', function(req,res){return exercise_controller.add_table_row(Exercise,req,res)});
// router.post('/add', exercise_controller.add_exercise);
router.get('/:id', function(req,res){return exercise_controller.find_table_row(Exercise,req,res)});
// router.get('/:id', exercise_controller.find_exercise);
router.delete('/:id', exercise_controller.delete_table_row);
router.post('/update/:id', exercise_controller.update_exercise);

module.exports = router;