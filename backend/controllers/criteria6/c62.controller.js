const c62 = require('../../models/criteria6/c62.model')
const router = require('express').Router()

const crud = require('../crud-controller')

router.get('/', function(req,res){return crud.list_table_rows(c62,req,res)});
router.post('/add', function(req,res){return crud.add_table_row(c62,req,res)});
router.get('/get/:id', function(req,res){return crud.find_table_row(c62,req,res)});
router.delete('/delete/:id', function(req,res){return crud.delete_table_row(c62,req,res)});
router.post('/update/:id', function(req,res){return crud.update_table_row(c62,req,res)});

module.exports = router;
