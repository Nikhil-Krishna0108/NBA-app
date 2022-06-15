const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c22 = new Schema( 
	{
		C: { type: String  },
		Subject: { type: String  },
		PO1: { type: Boolean  },
        PO2: { type: Boolean  },
        PO3: { type: Boolean  },
        PO4: { type: Boolean  },
        PO5: { type: Boolean  },
        PO6: { type: Boolean  },
        PO7: { type: Boolean  },
        PO8: { type: Boolean  },
        PO9: { type: Boolean  },
        PO10: { type: Boolean  },
        PO11: { type: Boolean  },
        PO12: { type: Boolean  },
        PSO1: { type: Boolean  },
        PSO2: { type: Boolean  },
        PSO3: { type: Boolean  },


})
module.exports = mongoose.model('c22', c22)