use std::fs;

pub fn day1() {
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

    println!("Day 1 answer: {}", increases);
}