use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    let secret_number = rand::thread_rng().gen_range(1..100);

    loop {
        let mut guess = String::new();

        println!("Guess a number");

        // get use input
        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        // convert string into u32 else continue into another loop iteration
        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("you guessed: {}", guess);

        // compare guess to secret_number, match case and execute => code
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Higher.."),
            Ordering::Greater => println!("Lower.."),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}
