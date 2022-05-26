const parseNotes = require("../parseNotes");

const testInput = `
    position=<-53868, -10684> velocity=< 5,  1>
    position=<-43043, -43128> velocity=< 4,  4>
    position=< 11010,  54188> velocity=<-1, -5>
`;

describe("parseNotes", () => {
	test("Given an empty instruction sheet, return an empty array", () => {
		expect(parseNotes("")).toEqual([]);
	});
	test("Given an instruction sheet with one position and velocity, return array containing object with key of position and velocity", () => {
		const input = "position=<-53868, -10684> velocity=< 5,  1>";
		const expectedOutput = [{ position: [-53868, -10684], velocity: [5, 1] }];
		expect(parseNotes(input)).toEqual(expectedOutput);
	});
	test("Given a multiple line string, return an array of strings split by line break", () => {
		const input = testInput;
		const expectedOutput = [
			{ position: [-53868, -10684], velocity: [5, 1] },
			{ position: [-43043, -43128], velocity: [4, 4] },
			{ position: [11010, 54188], velocity: [-1, -5] },
		];
		expect(parseNotes(input)).toEqual(expectedOutput);
	});
});
