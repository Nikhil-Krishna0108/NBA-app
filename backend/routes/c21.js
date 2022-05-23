const express = require('express');
const router = express.Router();
let c21 = require('../models/c21.model');

const exercise_controller = require('../controllers/exercise.controllers');

router.get('/', function(req,res){return exercise_controller.list_table_rows(c21,req,res)});
router.post('/add', function(req,res){return exercise_controller.add_table_row(c21,req,res)});
router.get('/:id', function(req,res){return exercise_controller.find_table_row(c21,req,res)});
router.delete('/:id', function(req,res){return exercise_controller.delete_table_row(c21,req,res)});
router.post('/update/:id', function(req,res){return exercise_controller.update_table_row(c21,req,res)});
// router.post('/update/:id', exercise_controller.update_exercise(c11,req,res));

module.exports = router;
