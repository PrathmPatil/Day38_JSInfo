const ps = require("prompt-sync");
const prompt = ps();

const a = Number(prompt("Enter the first number: "));
const b = Number(prompt("Enter the second number: "));
const c = Number(prompt("Enter the third number: "));

const value1 = a + b * c;
const value2 = a % b + c;
const value3 = c + a / b;
const value4 = a * b + c;
console.log(value1)
console.log(value2)
console.log(value3)
console.log(value4)


let maxValue = value1;
if (value2 > maxValue) {
    maxValue = value2;
} else if (value3 > maxValue) {
    maxValue = value3;
} else if (value4 > maxValue) {
    maxValue = value4;
}

let minValue = value1;
if (value2 < minValue) {
    minValue = value2;
} else if (value3 < minValue) {
    minValue = value3;
} else if (value4 < minValue) {
    minValue = value4;
}

console.log("Maximum Value:", maxValue);
console.log("Minimum Value:", minValue);