const createDisplayGrid = require("../createDisplayGrid");
const parseNotes = require("../parseNotes");

describe("createDisplayGrid", () => {
	it("WIDTH - Given two note objects, return a string with a number of - characters with the number representing the difference between the first position", () => {
		const input = [
			{
				position: [9, 1],
				velocity: [0, 2],
			},
			{
				position: [7, 0],
				velocity: [-1, 0],
			},
		];
		const arrayifiedOutput = createDisplayGrid(input).split("\n");
		arrayifiedOutput.forEach((array) => {
			expect(array).toHaveLength(3);
		});
	});
	it("HEIGHT - Given two note objects, return a two line string with the two lines representing the height made from the difference between the second position", () => {
		const input = [
			{
				position: [9, 1],
				velocity: [0, 2],
			},
			{
				position: [7, 0],
				velocity: [-1, 0],
			},
		];
		const arrayifiedOutput = createDisplayGrid(input).split("\n");
		expect(arrayifiedOutput).toHaveLength(2);
	});
	it("POSITIONS - Given two note objects, output string contains the correct positions of the stars represented by a # character", () => {
		const input = [
			{
				position: [9, 1],
				velocity: [0, 2],
			},
			{
				position: [7, 0],
				velocity: [-1, 0],
			},
		];
		const expectedOutput = `#..\n..#`;
		expect(createDisplayGrid(input)).toEqual(expectedOutput);
	});
	it("Works with a larger input", () => {
		const input = parseNotes(`position=< 9,  1> velocity=< 0,  2>
            position=< 7,  0> velocity=<-1,  0>
            position=< 3, -2> velocity=<-1,  1>
            position=< 6, 10> velocity=<-2, -1>
            position=< 2, -4> velocity=< 2,  2>
            position=<-6, 10> velocity=< 2, -2>
            position=< 1,  8> velocity=< 1, -1>
            position=< 1,  7> velocity=< 1,  0>
            position=<-3, 11> velocity=< 1, -2>
            position=< 7,  6> velocity=<-1, -1>
            position=<-2,  3> velocity=< 1,  0>
            position=<-4,  3> velocity=< 2,  0>
            position=<10, -3> velocity=<-1,  1>
            position=< 5, 11> velocity=< 1, -2>
            position=< 4,  7> velocity=< 0, -1>
            position=< 8, -2> velocity=< 0,  1>
            position=<15,  0> velocity=<-2,  0>
            position=< 1,  6> velocity=< 1,  0>
            position=< 8,  9> velocity=< 0, -1>
            position=< 3,  3> velocity=<-1,  1>
            position=< 0,  5> velocity=< 0, -1>
            position=<-2,  2> velocity=< 2,  0>
            position=< 5, -2> velocity=< 1,  2>
            position=< 1,  4> velocity=< 2,  1>
            position=<-2,  7> velocity=< 2, -2>
            position=< 3,  6> velocity=<-1, -1>
            position=< 5,  0> velocity=< 1,  0>
            position=<-6,  0> velocity=< 2,  0>
            position=< 5,  9> velocity=< 1, -2>
            position=<14,  7> velocity=<-2,  0>
            position=<-3,  6> velocity=< 2, -1>`);

		const expectedOutput = `........#.............\n................#.....\n.........#.#..#.......\n......................\n#..........#.#.......#\n...............#......\n....#.................\n..#.#....#............\n.......#..............\n......#...............\n...#...#.#...#........\n....#..#..#.........#.\n.......#..............\n...........#..#.......\n#...........#.........\n...#.......#..........`;
		expect(createDisplayGrid(input).split("\n")[0]).toHaveLength(22);
		expect(createDisplayGrid(input).split("\n")).toHaveLength(16);
		expect(createDisplayGrid(input).split("\n")[0]).toEqual("........#.............");
		expect(createDisplayGrid(input).split("\n")[1]).toEqual("................#.....");
		expect(createDisplayGrid(input)).toEqual(expectedOutput);
	});
});
