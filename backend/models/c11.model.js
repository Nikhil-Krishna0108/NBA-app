const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const c11 = new Schema(
	{
		vis: { type: String, required: true },
		M1: { type: String, required: true },
		M2: { type: String, required: true },
		M3: { type: String, required: true },
        M4: { type: String, required: true },
        M5: { type: String, required: true },
	},
	{
		timestamp: true,
	}
);

const Vision = mongoose.model('c11', c11Schema);

module.exports = c11;
