let Vision = require('../models/vision.model');

// return json LIST of all exercises from database using find() promise method
exports.list_visions = async (req, res) => {
	try {
		Vision.find()
			.then((visions) => res.json(visions))
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// ADD new exercise using post() & save() to add content from html body input fields
exports.add_vision = async (req, res) => {
	try {
		const vis = req.body.vis;
		const M1 = req.body.M1;
        const M2 = req.body.M2;
        const M3 = req.body.M3;
        const M4 = req.body.M4;
        const M5 = req.body.M5;


		const newVision = new Vision({
            vis,
            M1,
            M2,
            M3,
            M4,
            M5,

		});

		newVision
			.save()
			.then(() => res.json('Vision added!'))
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// FIND exercise object from database by object id e.g. ObjectId("5e70a53c9d38b6134cd82a49")
exports.find_vision= async (req, res) => {
	try {
		Vision.findById(req.params.id)
			.then((vision) => res.json(vision))
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// DELETE exercise from database using object id
exports.delete_vision = async (req, res) => {
	try {
		Vision.findByIdAndDelete(req.params.id)
			.then(() => res.json('Vision deleted'))
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// UPDATE exercise from database using object id
exports.update_vision = async (req, res) => {
	try {
		Vision.findById(req.params.id)
			.then((vision) => {
                vision.vis = req.body.vis;
                vision.M1 = req.body.M1;
                vision.M2 = req.body.M2;
                vision.M3 = req.body.M3;
                vision.M4 = req.body.M4;
                vision.M5 = req.body.M5;
				vision
					.save()
					.then(() => res.json('Exercise Updated!'))
					.catch((err) => res.status(400).json('Error: ' + err));
			})
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
