const ps = require("prompt-sync");
const prompt = ps();
var num = parseInt(prompt("Enter a single-digit number: "));
let word = " ";
if (num == 0) { word = "zero" } else if (num == 1) { word = "one" } else if (num == 2) { word = "two" } else if (num == 3) { word = "three" } else if (num == 4) { word = "four" } else if (num == 5) { word = "five" } else if (num == 6) { word = "six" } else if (num == 7) { word = "seven" } else if (num == 8) { word = "eight" } else if (num == 9) { word = "nine" } else { word = "Invalid Input" };
console.log(word);