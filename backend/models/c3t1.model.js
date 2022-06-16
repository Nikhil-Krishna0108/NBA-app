const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c3t1 = new Schema( 
	{
		content:{type:{}},
		_id:{type: String},
		
})
module.exports = mongoose.model('c3t1', c3t1)