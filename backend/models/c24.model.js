const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c24 = new Schema( 
	{
		teachingMethod: { type: String  },
		type: { type: String  },
		subject: { type: String  },
        relavance: { type: String  },
        year: { type: String  },


})
module.exports = mongoose.model('c24', c24)