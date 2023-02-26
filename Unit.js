const prompt = require("prompt-sync")({ sigint: true })
const num = prompt("Enter a single-digit number: ");
let word = ""
if (num === 1) {
    word = "One";
} else if (num == 10) {
    word = "Ten";
} else if (num == 100) {
    word = "Hundred";
} else if (num == 1000) {
    word = "Thousand";
} else {
    word = "Invalid input";
}
console.log(word);