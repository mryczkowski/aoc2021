import fs from 'fs';
import path from 'path';

function readInput(separator) {
    const buf = fs.readFileSync(path.resolve('src/day7/day7Input.txt'));
    return buf.toString().split(separator);
}

function part1() {
    const positions = readInput(',').map(val => parseInt(val));

    positions.sort((a, b) => {
        if (a < b) {
            return -1;
        } else {
            return 1;
        }
    });

    const targetPos = Math.round(getMedian(positions));
    let totalFuel = 0;

    positions.forEach(pos => {
        totalFuel += Math.abs(pos - targetPos);
    });

    console.log('Day 7, part 1:', totalFuel);
}

function part2() {
    const positions = readInput(',').map(val => parseInt(val));

    const targetPos = Math.floor(getAvg(positions));

    const fuelCost = positions.reduce((a, b) => a + calcFuelCost(b, targetPos), 0);

    console.log('Day 7, part 2:', fuelCost);
}

function getMedian(nums) {
    if (nums.length % 2 === 0) {
        return (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
    }

    return nums[(nums.length - 1) / 2];
}

function getAvg(nums) {
    return nums.reduce((a,b) => a + b, 0) / nums.length;
}

function calcFuelCost(pos, targetPos) {
    const diff = Math.abs(targetPos - pos);
    return (diff / 2 + 0.5) * diff;
}

export default {
    part1,
    part2,
}