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


// function countBs(str) {                              // Funzione per contare quante B maiuscole ci sono in una stringa

//     let accumulator = 0;
//     for (let i = 0; i < str.length; i++) {
//       const element = str[i];
//       if (element === "B") {
//         accumulator += 1;
//       }
//     }
//     return accumulator;
  
//   }
  
//   console.log("countBs", countBs("BBC"));
  
  
//   function countLetters(str, letter) {                 // funzione per contare il numero di una lettera in una stringa (quante volte è presente ad esempio la C)
  
//     let accumulator = 0;
//     for (let i = 0; i < str.length; i++) {
//       const element = str[i];
//       if (element === letter) {
//         accumulator += 1;
//       }
//     }
  
//     return accumulator;
  
//   }
  
//   console.log("countLetters", countLetters("BBCCCCCCCCCC", "C"));
  
//   function isIsogram(str) {                     // funzione per vedere se una parola è un istogramma
//     lowerString = str.toLowerCase();
//     for (let i = 0; i < lowerString.length; i++) {
//       for (let j = i + 1; j < lowerString.length; j++) {
//         if (str[i] === str[j]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }
  
//   console.log("isIstogram", isIsogram("cappello"));





    
//   function basicOp(operation, v1, v2) {
//     if (operation === '+') {
//         return v1 + v2;
//     } else if (operation === '-') {
//         return v1 - v2;
//     } else if (operation === '*') {
//         return v1 * v2;
//     } 
//     return v1 / v2;
//   }

//   console.log(basicOp('+', 10, 5) === 15);
//   console.log(basicOp('-', 40, 20) === 20);
//   console.log(basicOp('*', 5, 5) === 25);
//   console.log(basicOp('/', 49, 7) === 7);



  
//   let currentLightState = "green";

//   function updateLight(lightState) {
//     currentLightState = lightState;

//     if (currentLightState === "green") {
//       return "yellow";
//     } else if (currentLightState === "yellow") {
//       return "red";
//     } else if (currentLightState === "red") {
//       return "green";
//     }
//   } 
  
//   console.log(updateLight("green"));




// function removeAllSpaces(str){
//   const noSpace = str.replace(/ /g, '');   //cerca lo spazio / / e lo cerca global g = rimpiazza qualsiasi spazio con una stringa vuota
//   return noSpace;
//      const wordArray = str.split(' ');  // split spezza e spezza dove dico io
//      const nospace = wordArray.join(''); // se metto join e stringa vuota appiccica la stringa senza scrivere altro
//      return nospace;
// }

// console.log('removeAllSpaces', removeAllSpaces('pippo') === 'pippo');
// console.log('removeAllSpaces', removeAllSpaces('') === '');
// console.log('removeAllSpaces', removeAllSpaces('le mutande di mia nonna') === 'lemutandedimianonna');



// function stringToNumber(string){
//    let number = Number(string);
//     if (string === number) {
//     return string;
//    } else {
//     return number;
//    }
    
//   }

// console.log(stringToNumber('12344'));



// function hoopCount (n) {
//   if (n >= 10) {
//     return 'Great, now move on to tricks'
//   } else {
//     return 'Keep at it until you get it'
//   }
// }
// console.log(hoopCount(15));
// console.log(hoopCount(7));


// function opposite(number) {
//   if (number > 0) {
//     return -1 * number;
//   } else if (number < 0) {
//     return -1 * number;
//   } else {
//     return 0;
//   }
// }

// console.log(opposite(8));
// console.log(opposite(-5));





// function positiveSum(array) {
  
//   let sum = 0;
//   tempArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
//     if (element >= 0) {
//       sum += element;
//     }
//   }
//   return sum;
// }

// console.log(positiveSum([10, 20, -1, -5, 10]));




// scrivere una funzione che data una stringa printa la prima lettera della stringa una volta 
// la seconda due volte e cosi' via e mette sempre la prima lettera maiuscola
// "abcd"


function accum(s) {
  let accumulator = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    for (let j = 0; j < i + 1; j++) {
                                       // il secondo ciclo si fa su i + 1 perchè i è stato definito prima come indice della stringa
                                       // E +1 aggiunge lo stesso carattere
      if (j === 0) {
        accumulator += char.toUpperCase();
      } else {
       accumulator += char.toLowerCase();
      }
     
    }
     if (i < s.length - 1) {
      accumulator += '-';
      }
    
  }
  return accumulator;
}


//const accum = (s) => [...s].reduce((a, c, i, o) => a + c.toUpperCase()         // [...s] trasformami una string in un array di caratteri
//                                                   +c.toLowerCase().repeat(i)
//                                                   + (i !== o.length - 1 ? '-' : ''), '');        



                                                   
console.log(accum('damiano'));

//per [1, 2, 3], restituisci 9 perché 1 quadro + 2 quadro + 2 quadro = 9

// function squareSum(numbers){
//   let acc = 0;

//   for (number of numbers) {
//   

//     acc += element**2;
    
//   }

//   return acc;
// }
// console.log(squareSum(2));

function squareSum(numbers){
let acc = 0

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  
  let elementPow = element**2;
  acc += elementPow;

}
return acc;
}

console.log(squareSum([1,2,2]));



function doubleChar(str) {
  let accumulator = "";
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    accumulator += char + char;
  }
  return accumulator;
}

console.log(doubleChar("Hello world"));


