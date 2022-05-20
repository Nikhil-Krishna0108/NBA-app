const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const c12 = new Schema(
	{
		PEO: { type: String, required: true },
		Mission: { type: String, required: true },
		Correlation: { type: String, required: true },
        Justification: { type: String, required: true },
	},
	{
		timestamp: true,
	}
);

const C12 = mongoose.model('c12', c11Schema);

module.exports = C12;
