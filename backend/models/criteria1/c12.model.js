const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c12 = new Schema( 
	{
		Peo: { type: String  },
		Mission: { type: String  },
		Correlation: { type: String  },
        Justification: { type: String  },

})
module.exports = mongoose.model('c12', c12)