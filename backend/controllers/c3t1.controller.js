const c3t1 = require('../models/c3t1.model')
const router = require('express').Router()

const crud = require('./crud-controller')

router.post('/', function(req,res){return crud.add_table_row(c3t1,req,res)});
router.get('/display', function(req,res){return crud.list_table_rows(c3t1,req,res)});


module.exports = router;


 

