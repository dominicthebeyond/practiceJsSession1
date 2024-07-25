// basic greet system.

// var greetObj = {
//     greet1 : "yo",
//     greet2 : "hi",
//     greet3 : "hello",
//     greet4 : "sup",
// }

// function helloThere(typeOfGreet) {
//     if(typeOfGreet === "yo") {
//         console.log(JSON.stringify(greetObj.greet1));
//     }
//     else if(typeOfGreet === "hi") {
//         console.log(JSON.stringify(greetObj.greet2));
//     }
//     else if(typeOfGreet === "hello") {
//         console.log(JSON.stringify(greetObj.greet3));
//     }
//     else if(typeOfGreet === "sup") {
//         console.log(JSON.stringify(greetObj.greet4));
//     }
//     else {
//         console.log("void");
//     }
// }
// helloThere("sup");

// ------------------------------------------

// using the Ternary Operator to test if an operation is true or false,
// then returning the value assigned for the value thats either true or false:

// let age = 18;

// let msg = (age == 16) ? "You are 16" : "You are not 16";

// console.log(msg);
let coding = [
    "JavaScript",
    "Python",
    "CPP"
]

for (let i = 0; i <= 5; i++) {
    console.log(i);

    for (let j = 1; j <= 3; j++) {
        console.log("Inner loop" + j);
    }
}