const c45 = require('../../models/criteria4/c45.model')
const router = require('express').Router()

const crud = require('../crud-controller')

router.get('/', function(req,res){return crud.list_table_rows(c45,req,res)});
router.post('/add', function(req,res){return crud.add_table_row(c45,req,res)});
router.get('/get/:id', function(req,res){return crud.find_table_row(c45,req,res)});
router.delete('/delete/:id', function(req,res){return crud.delete_table_row(c45,req,res)});
router.post('/update/:id', function(req,res){return crud.update_table_row(c45,req,res)});

module.exports = router;


 ///get/$id/$tname/$critname
 ///get/:id/:tname/:critname
 ///req.params.tname
 


