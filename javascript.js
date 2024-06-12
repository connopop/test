function add7(){
    console.log(number + 7);   
}

let number = 1;

add7();

function multiply(){
    let number1 = 12;
    let number2 = 12;
    console.log(number1 * number2);
}

multiply();

function capitalizeFirstLetter(){
    const word = "hello world";
    let result = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(result);
}

capitalizeFirstLetter();

function lastLetter(){
    const word2 = "this is a sentence";
    let result2 = word2.slice(-1);
    console.log(result2);
}

lastLetter();