use std::io;

fn main() {
    println!("input a temp to be converted from F* to C*");
    loop {
        let mut temp = String::new();

        // get user input
        io::stdin()
            .read_line(&mut temp)
            .expect("Failed to read line");

        // convert string type to f32 or try loop again
        let temp: f32 = match temp.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("enter a number");
                continue;
            }
        };

        // do temp conversion, print and end
        let temp = (temp - 32.0) * 0.5556;
        println!("{} in celcius", temp);
        break;
    }
}
