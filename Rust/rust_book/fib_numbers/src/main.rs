use std::io;

fn get_user_input() -> u16 {
    loop {
        let mut num = String::new();
        println!("enter a number");
        io::stdin()
            .read_line(&mut num)
            .expect("Failed to read line");

        let num: u16 = match num.trim().parse() {
            Ok(x) => x,
            Err(_) => {
                continue;
            }
        };
        return num;
    }
}

fn generate_fib(arr: [u128; 2], mut count: u16) -> u128 {
    let new = arr[0] + arr[1];
    if count == 0 {
        return new;
    }
    count -= 1;
    generate_fib([arr[1], new], count)
}

fn main() {
    let start_fib_seq = [0, 1];
    let nth_fib = generate_fib(start_fib_seq, get_user_input());
    println!("nth fib is {}", nth_fib)
}
