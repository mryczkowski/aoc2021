import fs from 'fs';
import path from 'path';

function readInput() {
    const buf = fs.readFileSync(path.resolve('src/day4/day4Input.txt'));
    return buf.toString().split('\n');
}

function part1() {
    console.log('Day 4, part 1:');
}

export default {
    part1,
}