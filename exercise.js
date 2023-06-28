// function booleanToString(b) {              // boolean to string
//   if (b) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// console.log(booleanToString(true) === "true");

// console.log(booleanToString(false) === "false");

 



// function booleanToString(b) {
//     let newElement;
//     if (b) {
//         return "true";
//     } else {
//         return "false";
//     }
//     return newElement;
// }

// console.log(booleanToString(true) === "true");
// console.log(booleanToString(false) === "false");





//  operazioni matematiche

// function basicOp(operation, value1, value2) {

//     if (operation === "+") {
//         return value1 + value2;
//     }
//     if (operation === "-") {
//         return value1 - value2;
//     }
//     if (operation === "*") {
//         return value1 * value2;
//     } 
        
//     return value1 / value2;
    

// }

// console.log(basicOp("+", 4, 7) === 11);
// console.log(basicOp("-", 15, 18) === -3);
// console.log(basicOp("*", 5, 5) === 25);
// console.log(basicOp("/", 49, 7) === 7);



// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         return 'EVEN';
//     } else {
//         return 'ODD';
//     }
// }

// console.log(evenOrOdd(4));
// console.log(evenOrOdd(7));
// console.log(evenOrOdd(10));
// console.log(evenOrOdd(13));


// function joinWordsIntoSentence(words) {          // esempio funzione che prende un array di parole e le unisce in una frase
//     return words.join(" ");
// }

// const wordArray = ["Questo", "è", "un", "esempio", "di", "frase"];
// const sentence = joinWordsIntoSentence(wordArray);
// console.log(sentence);  // console log output = Questo è un esempio di frase




// ESERCIZI RICORSIONE E ALTRI ESERCIZI CODEWARS ---------------------------------------


function countBs(str) {                              // Funzione per contare quante B maiuscole ci sono in una stringa

    let accumulator = 0;
    for (let i = 0; i < str.length; i++) {
      const element = str[i];
      if (element === "B") {
        accumulator += 1;
      }
    }
    return accumulator;
  
  }
  
  console.log("countBs", countBs("BBC"));
  
  
  function countLetters(str, letter) {                 // funzione per contare il numero di una lettera in una stringa (quante volte è presente ad esempio la C)
  
    let accumulator = 0;
    for (let i = 0; i < str.length; i++) {
      const element = str[i];
      if (element === letter) {
        accumulator += 1;
      }
    }
  
    return accumulator;
  
  }
  
  console.log("countLetters", countLetters("BBCCCCCCCCCC", "C"));
  
  function isIsogram(str) {                     // funzione per vedere se una parola è un istogramma
    lowerString = str.toLowerCase();
    for (let i = 0; i < lowerString.length; i++) {
      for (let j = i + 1; j < lowerString.length; j++) {
        if (str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
  }
  
  console.log("isIstogram", isIsogram("cappello"));





    
  function basicOp(operation, v1, v2) {
    if (operation === '+') {
        return v1 + v2;
    } else if (operation === '-') {
        return v1 - v2;
    } else if (operation === '*') {
        return v1 * v2;
    } 
    return v1 / v2;
  }

  console.log(basicOp('+', 10, 5) === 15);
  console.log(basicOp('-', 40, 20) === 20);
  console.log(basicOp('*', 5, 5) === 25);
  console.log(basicOp('/', 49, 7) === 7);



  
  let currentLightState = "green";

  function updateLight(lightState) {
    currentLightState = lightState;

    if (currentLightState === "green") {
      return "yellow";
    } else if (currentLightState === "yellow") {
      return "red";
    } else if (currentLightState === "red") {
      return "green";
    }
  } 
  
  console.log(updateLight("green"));




function removeAllSpaces(str){
//   const noSpace = str.replace(/ /g, '');   //cerca lo spazio / / e lo cerca global g = rimpiazza qualsiasi spazio con una stringa vuota
//   return noSpace;
     const wordArray = str.split(' ');  // split spezza e spezza dove dico io
     const nospace = wordArray.join(''); // se metto join e stringa vuota appiccica la stringa senza scrivere altro
     return nospace;
}

console.log('removeAllSpaces', removeAllSpaces('pippo') === 'pippo');
console.log('removeAllSpaces', removeAllSpaces('') === '');
console.log('removeAllSpaces', removeAllSpaces('le mutande di mia nonna') === 'lemutandedimianonna');



function stringToNumber(string){
   let number = Number(string);
    if (string === number) {
    return string;
   } else {
    return number;
   }
    
  }

console.log(stringToNumber('12344'));

