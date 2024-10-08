// ARRAY
// Sono una collezione di elementi POSSIBILMENTE SIMILI o OMOGENEI NEL TIPO

// Gli array sono delle liste ordinate di elementi raggruppati secondo un unico riferimento (la variabile dell'array)
// le liste possono contenere qualsiasi tipo di elemento che vogliamo, tutte stringhe, tutti numeri, tutti booleani, ecc...
// anche se è possibile mischiare e creare array eterogenei con tipi di dati differenti tutti inseriti nello stesso array, SAREBBE MEGLIO EVITARLO!

const students = ["Dario", "Edoardo", "Andrea", "Andreea", "Martina", "Filippo"];
const numbers = [0, 0.5, 100, 20, 22];
const booleans = [true, false, false, true, true];
const movies = [
  { title: "Superman", year: 2004 },
  { title: "Batman", year: 2019 },
  { title: "Wonder Woman", year: 2020 },
  { title: "Black Panther", year: 2022 }
];

const coords = [
  [30.24, 48.9],
  [25.5, 89.2],
  [11.49, 58.248]
];

const coords2 = [
  { lat: 30.24, lon: 48.9 },
  { lat: 25.5, lon: 89.2 },
  { lat: 11.49, lon: 58.248 }
];

// evitiamo array di dati misti
// const mixed = [true, "Stefano", 20, null] // DA EVITARE COME LA PESTE!

// per accedere ad un valore utilizzeremo la POSIZIONE nell'array di quell'elemento
// per accedere alla posizione useremo il cosiddetto INDICE (INDEX) - valore numerico a partire da 0 per la prima posizione

const dario = students[0]; // prima posizione dell'array students (indice 0)
const edoardo = students[1]; // seconda posizione dell'array students (indice 1)
const martina = students[4]; // quinta posizione dell'array students (indice 4)

console.log(students);

// ricavare il numero totale degli elementi contenuti in un array
console.log(students.length);
// ricavare sempre l'ultima posizione
console.log(students[students.length - 1]);

// MANIPOLARE UN ARRAY
// .push(...newElements) - inseriamo un nuovo elemento in ultima posizione (MUTA L'ORIGINALE)

students.push("Antonio", "Danilo");
// students.push("Danilo");
console.log(students);

// .pop() - elimina sempre l'ultimo elemento (MUTA L'ORIGINALE)
students.pop();
console.log(students);

// .shift() - elimina sempre il primo elemento (MUTA L'ORIGINALE)
students.shift();
console.log(students);

// .unshift(...newElements) - inserisce un nuovo elemento sempre in prima posizione (MUTA L'ORIGINALE)
students.unshift("Elia");
console.log(students);

// .slice(startIndex, endIndex) - ci permette di ricavare un NUOVO ARRAY con una porzione dell'array originario (NON MUTA L'ORIGINARIO)
const studentsCopy = students.slice(2, 5);
console.log(studentsCopy);

// .splice(startIndex, deleteCount, ...newElements) (MUTA L'ORIGINALE) - Serve sia ad eliminare una posizione,
// che a sostituire un elemento con un altro,
// oppure ad aggiungere nuovi elementi in una posizione qualsiasi che non sia solo la prima o l'ultima

// students.splice(2, 1, "Silvia"); // sostituisce Andrea con Silvia
students.splice(3, 0, "Francesco"); // inserisce un nuovo studente tra Andrea e Andreea
console.log(students);

// https://doesitmutate.xyz/
