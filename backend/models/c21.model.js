const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

const c21 =new mongoose.Schema(
	{
		ProgramStructure: { type: String, required: true },
		AICTE: { type: String, required: true },
		VTU: { type: String, required: true },
	},
	{
		timestamp: true,
	}
);

const C21 = mongoose.model('c21', c21);

module.exports = C21;
