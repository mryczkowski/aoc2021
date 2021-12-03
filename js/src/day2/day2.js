import fs from 'fs';
import path from 'path';

function readCommands() {
    const buf = fs.readFileSync(path.resolve('src/day2/day2Input.txt'));
    return buf.toString().split('\n').map((command) => {
        const parts = command.split(' ');
        return {
            direction: parts[0],
            magnitude: parseInt(parts[1]),
        };
    });
}

function part1() {
    const commands = readCommands();

    let horiz = 0;
    let depth = 0;

    commands.forEach((command) => {
        if (command.direction === 'forward') {
            horiz += command.magnitude;
        } else {
            const sign = command.direction === 'up' ? -1 : 1;
            depth += command.magnitude * sign;
        }
    });

    console.log('Day 2, part 1:', horiz * depth);
}

function part2() {
    const commands = readCommands();

    let horiz = 0;
    let depth = 0;
    let aim = 0;

    commands.forEach((command) => {
        if (command.direction === 'forward') {
            horiz += command.magnitude;
            depth += aim * command.magnitude;
        } else {
            const sign = command.direction === 'up' ? -1 : 1;
            aim += command.magnitude * sign;
        }
    });

    console.log('Day 2, part 2:', horiz * depth);
}

export default {
    part1,
    part2,
};