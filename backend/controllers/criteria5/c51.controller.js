const c51 = require('../../models/criteria5/c51.model')
const router = require('express').Router()

const crud = require('../crud-controller')

router.get('/', function(req,res){return crud.list_table_rows(c51,req,res)});
router.post('/add', function(req,res){return crud.add_table_row(c51,req,res)});
router.get('/get/:id', function(req,res){return crud.find_table_row(c51,req,res)});
router.delete('/delete/:id', function(req,res){return crud.delete_table_row(c51,req,res)});
router.post('/update/:id', function(req,res){return crud.update_table_row(c51,req,res)});

module.exports = router;
