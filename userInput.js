// Write a program that takes day and month from the command line and prints true 
// if day of month is between March 20 and June 20, false otherwise.
let date = 20;
let month = 5;
let value = true
if ((date >= 20) && (date < 31) && month == 3) {
    value = false;
} else if ((date >= 1) && (date <= 31) && month == 5) {
    value = false
} else if ((date >= 1) && (date <= 30) && month == 4) {
    value = false;
} else if ((date <= 20) && month == 6) {
    value = false
}
if (value == true) {
    console.log("Flase")
} else {
    console.log("true")
}