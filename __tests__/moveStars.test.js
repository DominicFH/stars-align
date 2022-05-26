const moveStars = require("../moveStars");

describe("moveStars", () => {
	it("Given a single note, change the position according to the velocity", () => {
		const input = [{ position: [-53868, -10684], velocity: [5, 1] }];
		const expectedOutput = [{ position: [-53863, -10683], velocity: [5, 1] }];
		expect(moveStars(input)).toEqual(expectedOutput);
	});
	it("Given a note of multiple stars, change the position of each star according to the velocity", () => {
		const input = [
			{ position: [-53868, -10684], velocity: [5, 1] },
			{ position: [-43043, -43128], velocity: [4, 4] },
			{ position: [11010, 54188], velocity: [-1, -5] },
		];
		const expectedOutput = [
			{ position: [-53863, -10683], velocity: [5, 1] },
			{ position: [-43039, -43124], velocity: [4, 4] },
			{ position: [11009, 54183], velocity: [-1, -5] },
		];
		expect(moveStars(input)).toEqual(expectedOutput);
	});
});
