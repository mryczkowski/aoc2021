import fs from 'fs';
import path from 'path';

function readInput(separator) {
    const buf = fs.readFileSync(path.resolve('src/day6/day6Input.txt'));
    return buf.toString().split(separator);
}

function part1() {
    let fishTimers = readInput(',');

    const days = 80;

    for (let i = 0; i < days; i++) {
        const addedFishTimers = [];

        for (let j = 0; j < fishTimers.length; j++) {
            const timer = fishTimers[j];
            if (timer === 0) {
                fishTimers[j] = 6;
                addedFishTimers.push(8);
                continue;
            }

            fishTimers[j] = fishTimers[j] - 1;
        }

        fishTimers = fishTimers.concat(addedFishTimers);
    }

    const totalFish = fishTimers.length;

    console.log('Day 6, part 1:', totalFish);
}

function part2() {
    const fishTimers = readInput(',');

    const fishCounts = Array(9).fill(0);
    fishTimers.forEach((timer) => {
        fishCounts[timer] += 1;
    });

    for (let i = 0; i < 256; i++) {
        const newFish = fishCounts.shift();
        fishCounts.push(newFish);
        fishCounts[6] += newFish;
    }

    const totalFish = fishCounts.reduce((accum, val) => accum + val, 0);
    console.log('Day 6, part 2:', totalFish);
}

export default {
    part1,
    part2,
}