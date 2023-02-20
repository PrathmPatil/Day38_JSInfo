// Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
var ran = Math.floor(Math.random() * 2);
if (ran == 0) {
    console.log("Head")
} else {
    console.log("Tail")
}