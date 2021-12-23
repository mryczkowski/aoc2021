import fs from 'fs';
import path from 'path';

function readInput(separator) {
    const buf = fs.readFileSync(path.resolve('src/day10Input.txt'));
    return buf.toString().split(separator);
}

const closersToOpeners = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<',
}
const openersToClosers = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>',
};

const illegalCharsToPoints = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137,
}
const completeCharsToPoints = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4,
}

function part1() {
    const lines = readInput('\n');

    let points = 0;

    lines.forEach(line => {
        let stack = [];
        const chars = line.split('');

        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            
            if (closersToOpeners[char]) {
                if (stack.length === 0 || closersToOpeners[char] !== stack[stack.length-1]) {
                    points += illegalCharsToPoints[char];
                    break;
                } else {
                    stack.pop();
                }
            } else {
                stack.push(char);
            }
        }
    });

    console.log('Day 10, part 1:', points);
}

function part2() {
    const lines = readInput('\n');
    const scores = [];

    lines.forEach(line => {
        let stack = [];
        let illegal = false;
        let score = 0;
        const chars = line.split('');

        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            
            if (closersToOpeners[char]) {
                if (stack.length === 0 || closersToOpeners[char] !== stack[stack.length-1]) {
                    illegal = true;
                    break;
                } else {
                    stack.pop();
                }
            } else {
                stack.push(char);
            }
        }

        if (!illegal) {
            const completedChars = stack.map(char => openersToClosers[char]).reverse();
            completedChars.forEach(char => {
                score = 5 * score + completeCharsToPoints[char];
            });

            scores.push(score);
        }
    });

    scores.sort((a, b) => a < b ? -1 : 1);

    console.log('Day 10, part 2:', scores[(scores.length - 1) / 2])
}

export default {
    part1,
    part2,
}