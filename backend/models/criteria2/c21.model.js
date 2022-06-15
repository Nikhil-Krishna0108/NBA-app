const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c21 = new Schema( 
	{
		programStructure: { type: String  },
		AICTE: { type: String  },
		VTU: { type: String  },

})
module.exports = mongoose.model('c21', c21)