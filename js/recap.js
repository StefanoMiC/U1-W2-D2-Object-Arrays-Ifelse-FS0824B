// DATATYPES
// string - insieme di caratteri racchiusi da apici (o virgolette) - "" '' `` (win: alt + 96)
// number - valori numerici SENZA APICI, quindi 35 e non "35"
// boolean - true / false
// undefined
// null
// _________
// symbol
// bigInt

let name = "Stefano";
let surname = "Miceli";
let age = 35;

let fullName = "Stefano\nMiceli";

console.log("full name", fullName);

// TEMPLATE LITERALS
let multiLineStr = `Stefano
Miceli`;
console.log("stringa template multilinea", multiLineStr);

// la stringa template ci permette di valutare valori dinamici direttamente nella stringa stessa, senza dover fare concatenazioni.
let templateStr = `Ciao ragazzi, il mio nome completo è ${name} ${surname}, ho ${age} anni`;
console.log(templateStr);

let normalStr = "Ciao ragazzi, il mio nome completo è " + name + " " + surname + ", ho " + age + " anni";
console.log(normalStr);

// conversioni automatiche
const fakeSum = age + "24";
console.log("somma finta", fakeSum);

//conversione esplicita da stringa a numero
const numAsStr = "64";
const goodSum = age + parseInt(numAsStr); // parseFloat() per numeri decimali
console.log("somma dopo conversione", goodSum);

//conversione esplicita da numero a stringa
const newNum = 55;
const concatenatedSum = age.toString() + newNum.toString();

console.log("somma di numeri convertiti a stringa", concatenatedSum);

// controllare se un'operazione matematica è andata a buon fine

const fakeMult = "Epicode" * 2;
const fakeMult2 = undefined * 2;
const goodMult = 3 * 2;
console.log("was the operation successful?", !isNaN(fakeMult));
console.log("was the operation successful?", !isNaN(fakeMult2));
console.log("was the operation successful?", !isNaN(goodMult));

// operatore matematico
// + - * / %

// % Modulo operator - ci mostra il resto di una divisione

console.log("3 è divisibile per sé stesso?", 3 % 3 === 0);
console.log("6 è divisibile per 2?", 6 % 2 === 0);
console.log("7 è divisibile per 2?", 7 % 2 === 0);

// operatori di comparazione
// < <= > >=

console.log("50 > 100", 50 > 100); // false
console.log("50 < 100", 50 < 100); // true
console.log("50 <= 50", 50 <= 50); // true

// operatori di uguaglianza
// ==, != (uguaglianza e disuguaglianza debole, SCONSIGLIATE!)
// ===, !== (uguaglianza e disuguaglianza strette, L'APPROCCIO MIGLIORE)

console.log("50 === 50", 50 === 50); // true
console.log("is S the first char of name?", name.charAt(0) === "S");
console.log("is s the first char of name converted to lowercase?", name.charAt(0).toLowerCase() === "s");
console.log("is S the first char of surname?", surname.charAt(0) === "S");

// operatori logici
// && - AND ci verifica una serie di condizioni, in cui TUTTE devono essere verificate (true) perché l'intera espressione ritorni true
// || - OR ci verifica che ALMENO UNA delle condizioni sia verificata (true) per tornare true dall'espressione
// ! - NOT ribalta un risultato booleano

console.log("is the first char of surname S or M?", surname.charAt(0) === "S" || surname.charAt(0) === "M");
//                                                            false      ||             true           => true
console.log("is the first char of templateStr S or M?", templateStr.charAt(0) === "S" || templateStr.charAt(0) === "M");
//                                                            false      ||             false           => false

console.log(age >= 30 && name.charAt(0) === "S" && concatenatedSum === "3555");
//              true  &&           true         &&              true            => true
console.log(age >= 40 && name.charAt(0) === "S" && concatenatedSum === "3555");
//              false  &&           true         &&              true           => false

console.log(!(age >= 30) && name.charAt(0) === "S" && concatenatedSum === "3555");
//              true  &&           true         &&              true            => !(true) => false
