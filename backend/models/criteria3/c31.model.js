const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c31 = new Schema( 
	{
		cono: { type: String  },
		co: { type: String  },
		
})
module.exports = mongoose.model('c31', c31)