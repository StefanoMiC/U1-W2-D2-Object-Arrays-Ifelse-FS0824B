console.log("if else");

// if(condizione) {

// questo blocco si attiverà in caso in cui la condizione si verifichi (true)

// } else {

// questo è il blocco che si attiverà in caso di non verifica della condizione (false)

// }

// possiamo usare un blocco codinzionale anche solo per PROTEGGERE una porzione di codice dal NON ESSERE eseguita in determinate circostanze

let check = false;
const num = 9;

if (num > 52) {
  alert("ok il prezzo è giusto!");
}
// non essendoci un else questo codice non produrrà mai un risultato se la condizione non si verifica

// oppure possiamo creare due diverse condizioni possibili (o una o l'altra, mai entrambe eseguite insieme)
// if (num === 50) {
//   console.log("il numero è esattamente 50");
// } else if (num === 51) {
//   console.log("il numero è esattamente 51");
// } else {
//   console.log("il numero è diverso da 50 e 51, hai ottenuto " + num);
// }

if (num > 50) {
  console.log("il numero è maggiore di 50");
  // possiamo annidare un'altra condizione che verrà valutata solo se la condizione esterna si verificherà
  if (num < 100) {
    console.log("il numero è maggiore di 50 ma inferiore a 100");
  }
} else if (num > 30) {
  console.log("il numero è maggiore di 30");
} else if (num > 10) {
  console.log("il numero è maggiore di 10");
} else {
  // solamente se nessuna condizione precedente sarà verificata saremo qui dentro
  console.log("il numero è inferiore a 10");
  // la variabile check verrà modificata in true solo se finiamo nell'else
  check = true;
}

// questo alert si visualizzerà solo se num sarà inferiore o uguale a 10, ovvero quando JS entrerà nell'else del precedente if
if (check) {
  alert("il numero era proprio piccolo!");
}
