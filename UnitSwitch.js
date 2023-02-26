const prompt = require("prompt-sync")({ sigint: true })
const num = Number(prompt("Enter a number in 10th power: "));

let word = " ";
switch (num) {
    case 1:
        word = "one";
        break;
    case 10:
        word = "ten";
        break;
    case 100:
        word = "hundred";
        break;
    case 1000:
        word = "thousand";
        break;
    default:
        word = "Enter a valid number";
}
console.log(word);