import fs from 'fs';
import path from 'path';

function readInput() {
    const buf = fs.readFileSync(path.resolve('src/day3Input.txt'));
    return buf.toString().split('\n');
}

function part1() {
    const nums = readInput();
    const bitSums = [];

    nums.forEach((numStr) => {
        for (let i = 0; i < numStr.length; i++) {
            const bitVal = parseInt(numStr.charAt(i));
    
            if (bitSums.length <= i) {
                bitSums.push(bitVal);
            } else {
                bitSums[i] += bitVal;
            }
        }
    });

    const gammaRateStr = bitSums.map((sum) => sum > Math.floor(nums.length / 2) ? 1 : 0).join('');
    const epsilonRateStr = bitSums.map((sum) => sum > Math.floor(nums.length / 2) ? 0 : 1).join('');

    const gammaRateDecimal = parseInt(gammaRateStr, 2);
    const epsilonRateDecimal = parseInt(epsilonRateStr, 2);

    console.log('Day 3, part 1:', gammaRateDecimal * epsilonRateDecimal);
}

export default {
    part1,
}