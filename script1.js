// basic greet system.

var greetObj = {
    greet1 : "yo",
    greet2 : "hi",
    greet3 : "hello",
    greet4 : "sup",
}

function helloThere(typeOfGreet) {
    if(typeOfGreet === "yo") {
        console.log(JSON.stringify(greetObj.greet1));
    }
    else if(typeOfGreet === "hi") {
        console.log(JSON.stringify(greetObj.greet2));
    }
    else if(typeOfGreet === "hello") {
        console.log(JSON.stringify(greetObj.greet3));
    }
    else if(typeOfGreet === "sup") {
        console.log(JSON.stringify(greetObj.greet4));
    }
    else {
        console.log("void");
    }
}
helloThere("sup");

// ------------------------------------------

