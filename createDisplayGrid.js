const evaluateDisplayGrid = require("./evaluatedDisplayGrid");

const createDisplayGrid = (parsedNotes) => {
	let furthestLeft = parsedNotes[0].position[0]; // Negative x
	let furthestRight = parsedNotes[0].position[0]; // Positive x
	let furthestUp = parsedNotes[0].position[1]; // Negative Y
	let furthestDown = parsedNotes[0].position[1]; // Positive Y

	parsedNotes.forEach((note) => {
		// If position x is lesser than the current furthest left, reassign it
		if (note.position[0] < furthestLeft) {
			furthestLeft = note.position[0];
		}
		// If position x is greater than the current furthest right, reassign it
		if (note.position[0] > furthestRight) {
			furthestRight = note.position[0];
		}
		// If position y is lesser than the current furthest up, reassign it
		if (note.position[1] < furthestUp) {
			furthestUp = note.position[1];
		}
		// If position y is greater than the current furthest right, reassign it
		if (note.position[1] > furthestDown) {
			furthestDown = note.position[1];
		}
	});

	const width = furthestRight - furthestLeft + 1;
	const height = furthestDown - furthestUp;
	const outputContainer = [];

	for (let i = 0; i <= height; i++) {
		const individualRow = new Array(width);
		individualRow.fill(".");
		outputContainer.push(individualRow);
	}

	parsedNotes.forEach((note) => {
		const widthPositionIndex = note.position[0] - furthestLeft;
		const heightPositionIndex = note.position[1] - furthestUp;
		outputContainer[heightPositionIndex][widthPositionIndex] = "#";
	});

	const joinedRows = outputContainer.map((row) => {
		return row.join("");
	});

	evaluateDisplayGrid(joinedRows);

	return joinedRows.join("\n");
};

module.exports = createDisplayGrid;
