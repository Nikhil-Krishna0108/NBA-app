const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const visionSchema = new Schema(
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

const Vision = mongoose.model('Vision', visionSchema);

module.exports = Vision;
