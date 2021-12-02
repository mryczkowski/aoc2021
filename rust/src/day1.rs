use std::fs;

pub fn part1() {
    let contents = fs::read_to_string("./src/day1Input.txt").expect("Err reading file");
    let depths = contents.split("\n");

    let mut prev_depth = -1;
    let mut increases = 0;

    for depth in depths {
        let depth_int: i32 = depth.parse().unwrap();

        if prev_depth != -1 {
            if depth_int > prev_depth {
                increases += 1;
            }
        }

        prev_depth = depth_int
    }

    println!("Day 1, part 1 answer: {}", increases);
}

pub fn part2() {
    let contents = fs::read_to_string("./src/day1Input.txt").expect("Err reading file");
    let depths: Vec<&str> = contents.split("\n").collect();

    let window_size = 3;
    let mut increases = 0;

    for (i, depth) in depths.iter().enumerate() {
        let depth_int: i32 = depth.parse().unwrap();

        if i >= window_size {
            if depth_int > depths[i - window_size].parse().unwrap() {
                increases += 1;
            }
        }
    }

    println!("Day 1, part 2 answer: {}", increases);
}