const createDisplayGrid = require("./createDisplayGrid");
const moveStars = require("./moveStars");

const isReady = (starPositions) => {
	let furthestLeft = starPositions[0].position[0]; // Negative x
	let furthestRight = starPositions[0].position[0]; // Positive x
	let furthestUp = starPositions[0].position[1]; // Negative Y
	let furthestDown = starPositions[0].position[1]; // Positive Y

	starPositions.forEach((note) => {
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

	while (Math.abs(starPositions[67].position[0]) > 50) {
		moveStars(starPositions);
		starPositions.forEach((note) => {
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
	}
	console.log("done");

	return createDisplayGrid(starPositions);
};

module.exports = isReady;
