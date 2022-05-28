exports.list_table_rows = async (Modal,req, res) => {
	try {
		Modal.find()
			.then((exercises) => res.json(exercises))
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.add_table_row = async (Modal,req, res) => {
	console.log('add_table_row function');
		try {
			const newTableRow = new Modal(req.body);
			newTableRow
			.save()
			.then(() => res.json('Exercise added!'))
			.catch((err) => {
				console.log("pre db error")
				return res.status(400).json('Error: ' + err)});
		} catch (err) {
			console.log("db error")
			console.log(err);
			res.status(500).json({ message: err.message });
		}
};

exports.find_table_row = async (Modal,req, res) => {
	try {
		Modal.findById(req.params.id)
			.then((exercise) => res.json(exercise))
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.delete_table_row = async (Modal,req, res) => {
	try {
		Modal.findByIdAndDelete(req.params.id)
			.then(() => res.json('Exercise deleted'))
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.update_table_row= async (Modal,req, res) => {
	try {
		Modal.findById(req.params.id)
			.then((table_row) => {
				table_row={...table_row,...req.body};
				table_row
					.save()
					.then(() => res.json('Exercise Updated!'))
					.catch((err) => res.status(400).json('Error: ' + err));
			})
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		console.log(err)
		res.status(500).json({ message: err.message });
	}
};
 