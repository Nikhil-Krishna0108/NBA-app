const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c34 = new Schema( 
	{
		
		co: { type: String  },
        po1: { type: String  },
        po2: { type: String  },
        po3: { type: String  },
        po4: { type: String  },
        po5: { type: String  },
        po6: { type: String  },
        po7: { type: String  },
        po8: { type: String  },
        po9: { type: String  },
        po10: { type: String  },
        po11: { type: String  },
        po12: { type: String  },

		
})
module.exports = mongoose.model('c34', c34)