// function booleanToString(b) {              // boolean to string
//   if (b) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// console.log(booleanToString(true) === "true");

// console.log(booleanToString(false) === "false");

 



function booleanToString(b) {
    //let newElement;
    if (b) {
        return "true";
    } else {
        return "false";
    }
    //return newElement;
}

console.log(booleanToString(true) === "true");
console.log(booleanToString(false) === "false");





// operazioni matematiche

function basicOp(operation, value1, value2) {

    if (operation === "+") {
        return value1 + value2;
    }
    if (operation === "-") {
        return value1 - value2;
    }
    if (operation === "*") {
        return value1 * value2;
    } 
        
    return value1 / value2;
    

}

console.log(basicOp("+", 4, 7) === 11);
console.log(basicOp("-", 15, 18) === -3);
console.log(basicOp("*", 5, 5) === 25);
console.log(basicOp("/", 49, 7) === 7);



function evenOrOdd(number) {
    if (number % 2 === 0) {
        return 'EVEN';
    } else {
        return 'ODD';
    }
}

console.log(evenOrOdd(4));
console.log(evenOrOdd(7));
console.log(evenOrOdd(10));
console.log(evenOrOdd(13));


function joinWordsIntoSentence(words) {          // esempio funzione che prende un array di parole e le unisce in una frase
    return words.join(" ");
}

const wordArray = ["Questo", "è", "un", "esempio", "di", "frase"];
const sentence = joinWordsIntoSentence(wordArray);
console.log(sentence);  // console log output = Questo è un esempio di frase
