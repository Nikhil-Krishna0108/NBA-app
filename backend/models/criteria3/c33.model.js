const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c33 = new Schema( 
	{
		cono: { type: String  },
		co: { type: String  },
		
})
module.exports = mongoose.model('c33', c33)