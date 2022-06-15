const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c32 = new Schema( 
	{
		cono: { type: String  },
		co: { type: String  },
		
})
module.exports = mongoose.model('c32', c32)