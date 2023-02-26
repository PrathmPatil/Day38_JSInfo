const promt = require("prompt-sync")({ sigint: true });
const Number = promt("Enter the number: ")
let day = " ";
if (Number == 7) {
    day = "Sunday"
} else if (Number == 1) {
    day = "Monday"
} else if (Number == 2) {
    day = "Tuesday"
} else if (Number == 3) {
    day = "Wednesday"
} else if (Number == 4) {
    day = "Thursday"
} else if (Number == 5) {
    day = "Friday"
} else if (Number == 6) {
    day = "Saturday"
} else {
    day = "Invalid Input"
}
console.log(day);