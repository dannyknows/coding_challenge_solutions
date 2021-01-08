fn main() {
    let days: [[&str; 2]; 12] = [
        ["first", "a partridge in a pear tree"],
        ["second", "two turtle doves"],
        ["third", "three French hens"],
        ["forth", "four calling birds"],
        ["fifth", "five gold rings"],
        ["sixth", "six geese a laying"],
        ["seventh", "seven swans a swimming"],
        ["eighth", "eight maids a milking"],
        ["ninth", "nine ladies dancing"],
        ["tenth", "ten lords a leaping"],
        ["eleventh", "eleven pipers piping"],
        ["twelfth", "twelve drummers drumming"],
    ];

    let mut yesterdays_gifts = String::new();

    for (ind, day) in days.iter().enumerate() {
        let separator: &str = if ind == 0 {
            ""
        } else if ind == 1 {
            " and "
        } else {
            ", "
        };
        let gift = day[1].to_string();
        let todays_gifts = gift + separator + &yesterdays_gifts;
        println!(
            "on the {} day of christmas my true love gave to me \n {}",
            day[0], todays_gifts
        );
        yesterdays_gifts = todays_gifts.to_string();
    }
}
