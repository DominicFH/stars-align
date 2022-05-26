const evaluateDisplayGrid = (rowsArray) => {
	let adjacentStars = 0;
	rowsArray.forEach((row, currentRow) => {
		splitRow = row.split("");
		const currentColumn = splitRow.indexOf("#");

		if (currentColumn >= 0) {
			const centre = [currentColumn, currentRow];
			const top = [currentColumn, currentRow + 1];
			const topLeft = [currentColumn - 1, currentRow + 1];
			const topRight = [currentColumn + 1, currentRow + 1];
			const left = [currentColumn - 1, currentRow];
			const right = [currentColumn + 1, currentRow];
			const bottom = [currentColumn, currentRow - 1];
			const bottomLeft = [currentColumn - 1, currentRow - 1];
			const bottomRight = [currentColumn + 1, currentRow - 1];
			console.log({ centre });
			console.log(rowsArray[centre[1]][[centre[0]]], "<<<");
			console.log(currentRow);
			console.log(rowsArray[bottom[1]]);
			if (
				rowsArray[top[1]][top[0]] === "#" ||
				rowsArray[topLeft[1]][topLeft[0]] === "#" ||
				rowsArray[topRight[1]][topRight[0]] === "#" ||
				rowsArray[left[1]][left[0]] === "#" ||
				rowsArray[right[1]][right[0]] === "#" ||
				rowsArray[bottom[1]][bottom[0]] === "#" ||
				rowsArray[bottomLeft[1]][bottomLeft[0]] === "#" ||
				rowsArray[bottomRight[1]][bottomRight[0]] === "#"
			) {
				console.log("found");
			} else {
				console.log("not found");
			}
		}
	});
};

// const splitRow = joinedRows[0].split("");
// console.log(splitRow.indexOf("#"));

module.exports = evaluateDisplayGrid;
