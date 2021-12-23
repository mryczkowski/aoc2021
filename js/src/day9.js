import fs from 'fs';
import path from 'path';

function readInput() {
    const buf = fs.readFileSync(path.resolve('src/day9Input.txt'));
    const lines = buf.toString().split('\n');
    return lines.map(line => line.split('').map(val => parseInt(val)));
}

function part1() {
    const heightMap = readInput();

    let riskSum = 0;

    for (let row = 0; row < heightMap.length; row++) {
        for (let col = 0; col < heightMap[row].length; col++) {
            const val = heightMap[row][col];

            // check left
            if (col > 0 && val >= heightMap[row][col-1]) {
                continue;
            }

            // check up
            if (row > 0 && val >= heightMap[row-1][col]) {
                continue;
            }

            // check right
            if (col < heightMap[row].length - 1 && val >= heightMap[row][col+1]) {
                continue;
            }

            // check down
            if (row < heightMap.length - 1 && val >= heightMap[row+1][col]) {
                continue;
            }

            // passed all checks
            riskSum += val + 1;
        }
    }

    console.log('Day 9, part 1:', riskSum);
}

function part2() {
    const heightMap = readInput();
    const lowPoints = getLowPoints(heightMap);
    const basinSizes = [];

    lowPoints.forEach(point => {
        basinSizes.push(getBasinSize(heightMap, point, {}));
    });

    basinSizes.sort((a, b) => {
        if (a < b) {
            return -1;
        } else {
            return 1;
        }
    });

    const result = basinSizes[basinSizes.length-1] * basinSizes[basinSizes.length-2] * basinSizes[basinSizes.length-3];

    console.log('Day 9, part 2:', result);
}

function getBasinSize(heightMap, point, visitedPositions) {
    const row = point[0];
    const col = point[1];

    if (row < 0 || col < 0 || row >= heightMap.length || col >= heightMap[row].length || heightMap[row][col] === 9 || visitedPositions[`${row}${col}`]) {
        return 0;
    }

    visitedPositions[`${row}${col}`] = true;

    return 1 + getBasinSize(heightMap, [row, col+1], visitedPositions)
        + getBasinSize(heightMap, [row, col-1], visitedPositions)
        + getBasinSize(heightMap, [row-1, col], visitedPositions)
        + getBasinSize(heightMap, [row+1, col], visitedPositions);
}

function getLowPoints(heightMap) {
    const lowPoints = [];

    for (let row = 0; row < heightMap.length; row++) {
        for (let col = 0; col < heightMap[row].length; col++) {
            const val = heightMap[row][col];

            // check left
            if (col > 0 && val >= heightMap[row][col-1]) {
                continue;
            }

            // check up
            if (row > 0 && val >= heightMap[row-1][col]) {
                continue;
            }

            // check right
            if (col < heightMap[row].length - 1 && val >= heightMap[row][col+1]) {
                continue;
            }

            // check down
            if (row < heightMap.length - 1 && val >= heightMap[row+1][col]) {
                continue;
            }

            // passed all checks
            lowPoints.push([row, col]);
        }
    }

    return lowPoints;
}

export default {
    part1,
    part2,
}