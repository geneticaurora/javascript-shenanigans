//if (1 != "1" ) {
//    console.log(true);
//}
//else {
//    console.log (false)
//}

//Variable Age &&
//var age = 18
//var country = "United Kingdom"
//if (age > 17 && country == "United Kingdom") {
//    console.log ("Yes I can serve you & you are in the right country")
//}
//else { // else only needed
//    console.log ("You are not old enough and the in the wrong country")
//}
//Variable Day ||
//var day = "Saturday"
//if (day == "Saturday") {
//    console.log ("Yes I can serve you & you are in the right country")
//}
//else { // else only needed
//    console.log ("You are not old enough and the in the wrong country")

// Challenge 1

// if and else are needed for if to work
// if does not need variables to accepted commands
// var password = "FAB";
// var res = password.length
// console.log (res)
// if (password.length < 8 ) {
//    console.log ("Computer Says No!")
// }
// else 
//    console.log ("Your password is accepted")

//Challenge 2
// var num = 43;
// if (num %3 == 0 || num %5 == 0){
//     console.log ("ACCEPTED");
// }
// else 
//     console.log ("Computer Says Hey Ho its a No");

//Challenge 3
// var num = 15
// if (num %3 ==0) {
//     console.log ("Fizz")
// }
// else (null)

// if (num %5 == 0) {
//     console.log ("Buzz")
// }
// else (null)

// if (num %3 == 0 || num %5 == 0){
// }
//     console.log ("Fizz Buzz")

//Challenge 3 Improved
let num = 5
    if (num % 3 == 0 && num % 5 == 0){ console.log("FIZZ BUZZ")}
        else if (num % 5 == 0){console.log("BUZZ")}
            else if (num % 3 == 0 ){console.log("FIZZ")}
                 else {console.log(num)}
