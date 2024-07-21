// this is a faulty calculator :

// - it performs wrong calculation 10% of the time 

// this is what is does -
//     + --> -
//     * --> +
//     - --> /
//     / --> **

// to get that 10% we will use the random No. method 


var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));

var operation = prompt("Enter the operation (+, -, *, /):");

var random = Math.random();
console.log("Random number for fault check:", random);

if (random > 0.1) {
    if (operation == "+") {
        console.log(num1 + num2);
    } else if (operation == "-") {
        console.log(num1 - num2);
    } else if (operation == "*") {
        console.log(num1 * num2);
    } else if (operation == "/") {
        console.log(num1 / num2);
    } else {
        console.log("Invalid operation.");
    }
} else {
    if (operation == "+") {
        console.log(num1 - num2);
    } else if (operation == "-") {
        console.log(num1 / num2);
    } else if (operation == "*") {
        console.log(num1 + num2);
    } else if (operation == "/") {
        console.log(num1 ** num2);
    } else {
        console.log("Invalid operation.");
    }
}
