const prompt = require("prompt-sync")({ sigint: true })
console.log("  \n 1. Feet to Inch \n 2. Feet to Meter \n 3. Inch to Feet \n 4. Meter to Feet")
const num = parseInt(prompt("Enter the number: "));
const value = parseInt(prompt("Enter the conversion value: "));
let changeValue;
switch (num) {
    case 1:
        changeValue = value * 12;
        break;
    case 2:
        changeValue = value * 0.3048
        break;
    case 3:
        changeValue = value * 0.0833;
        break;
    case 4:
        changeValue = value * 3.28084;
        break;
    default:
        changeValue = "Enter Valid num: "
        break;
}
console.log(changeValue)