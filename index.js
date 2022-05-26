const fs = require("fs");
const parseNotes = require("./parseNotes");
const moveStars = require("./moveStars");
const createDisplayGrid = require("./createDisplayGrid");
const isReady = require("./isReady");
/*

Parse instructions

Build array grid using original positions
x - left-negative, right-positive
y - up-negative, down-positive

Take initial positions
Amend positions using velocity

*/

const rawData = fs.readFileSync("./input.txt", "utf-8");
const parsedNotes = parseNotes(rawData);
const fingersCrossed = isReady(parsedNotes);

fs.writeFileSync("./finalResults.txt", fingersCrossed, "utf-8");
