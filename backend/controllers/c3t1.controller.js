const c3t1 = require('../models/c3t1.model')
const router = require('express').Router()

const crud = require('./crud-controller')

router.post('/add/:id', function(req,res){return crud.update_text(c3t1,req,res)});
router.get('/display/:id', function(req,res){return crud.find_table_row(c3t1,req,res)});


module.exports = router;


 

