const parseNotes = (rawNotes) => {
	const individualNotes = rawNotes.split("\n");
	const output = individualNotes.map((note) => {
		if (note) {
			const parsedNote = {};
			const position = note.substring(note.indexOf("<") + 1, note.indexOf(">"));
			const velocity = note.substring(note.indexOf("<", note.indexOf(">")) + 1, note.length - 1);
			const splitPosition = position.split(",");
			const splitVelocity = velocity.split(",");

			parsedNote.position = [+splitPosition[0], +splitPosition[1]];
			parsedNote.velocity = [+splitVelocity[0], +splitVelocity[1]];
			return parsedNote;
		}
	});

	return output.filter((note) => {
		return note;
	});
};

module.exports = parseNotes;
