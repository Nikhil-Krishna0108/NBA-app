const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c1 = new Schema( 
	{
		vis: { type: String  },
		M1: { type: String  },
		M2: { type: String  },
		M3: { type: String  },
        M4: { type: String  },
        M5: { type: String  }
        
})
module.exports = mongoose.model('c1', c1)