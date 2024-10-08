// OGGETTI IN JS

/* 
Un oggetto in JavaScript è una struttura che ci consente di modellare entità del mondo reale.
Ovvero in tutte quelle situazioni in cui non ci bastano stringhe, numeri, booleani ecc.. avremo quindi bisogno
di aggregregare più informazioni dentro un'unica variabile/costante.

L'oggetto è una struttura composta da PROPRIETA' - VALORE racchiuse in parentesi GRAFFE che ne delimitano il contesto.
Tutte le proprietà sono separate da VIRGOLE e sono composte da coppie chiave:valore.
*/

// Useremo gli oggetti quando vorremo descrivere qualche entità più complessa.

// quando creare variabili non è più sufficiente...

// const teacherName = "Stefano"
// const teacherSurname = "Miceli"

// possiamo pensare di creare un oggetto!

// oggetto teacher composto da coppie chiave-valore

const value0 = "address";
const value0b = "via dei fiori 45";

const teacher = {
  name: "Stefano",
  surname: "Miceli",
  age: 35,
  drivingLicence: "B",
  gender: "M",
  hasWebcam: true,
  "is Live Now": true,
  "e-mail": null,
  location: {
    region: "FVG",
    city: "Udine",
    coordinates: {
      lat: 49.0982,
      lon: 23.5892
    }
  },
  [value0]: value0b // esempio di creazione dinamica di proprietà e valori derivanti da variabili
};

console.log("Teacher", teacher);

// ACCEDERE ALLE PROPRIETA' DI UN OGGETTO
// 1) DOT NOTATION . - si può accedere tramite il punto sull'identificativo dell'oggetto e richiamare il nome della
// proprietà per riceverne il valore associato

console.log("full name", teacher.name + " " + teacher.surname);
console.log("Coordinates", `Region: ${teacher.location.region}, Lat: ${teacher.location.coordinates.lat}, Lon: ${teacher.location.coordinates.lon}`);

// 2) SQUARE BRACKETS NOTATION [] - serve ada ccedere a proprietà con caratteri speciali, o valori dinamici
console.log(teacher["e-mail"]);
console.log(teacher["is Live Now"]);

console.log(teacher["drivingLicence"]); // in questo caso è superfluo l'uso di [], la dot notation è sempre preferibile
console.log(teacher.drivingLicence);

const value1 = "e";
const value2 = "mail";

console.log(teacher[value1 + "-" + value2]); // teacher["e-mail"]  ==> null

const value3 = "hasWebcam";

console.log(teacher[value3]); // teacher["hasWebcam"] ==> true
console.log(teacher[value0]); // teacher["address"] ==> "via dei fiori 45"
console.log(teacher["location"].coordinates); // teacher.location.coordinates ==> {lat: 49.0982, lon: 23.5892}

// ________________________ MODIFICARE UN OGGETTO________________________________
// anche un oggetto dichiarato con const è manipolabile, MA NON sostituibile con altro valore o altro oggetto interamente!

// CREARE NUOVE PROPRIETA'
console.log(teacher.notes); // undefined
teacher.notes = "remotely teaching"; // da questo momento in poi una proprietà "notes" che non esisteva prima, comincerà ad esistere con
// un nuovo valore a stringa
console.log(teacher.notes); // "remotely teaching"

// MODIFICARNE DI ESISTENTI
teacher.name = "Andrea";
teacher.surname = "Rossi";
teacher["e-mail"] = "stefano@miceli.com";

// ELIMINARE UNA PROPRIETA'
console.log(teacher.gender); // "M"

delete teacher.gender;

console.log(teacher.gender); // undefined

console.log(teacher.location.city);

delete teacher.location.city;

console.log(teacher.location.city);

// CLONARE OGGETTI

const teacher2 = teacher; // ⚠️SBAGLIATO!!!!

teacher2.surname = "Verdi";

console.log("ORIGINALE", teacher);
console.log("COPIA", teacher2);

console.log("--------------------------------------------");

// 1) Object.assign(targetObj, sourceObj1, sourceObj2, ...) - Copia superficiale (SHALLOW COPY)
const teacher3 = Object.assign({}, teacher, { hasWebcam: null, planet: "Earth" });

teacher3.surname = "Arancioni";
teacher3.location = Object.assign({}, teacher.location);

teacher3.location.region = "Lombardy";

teacher3.location.coordinates = Object.assign({}, teacher.location.coordinates);

teacher3.location.coordinates.lat = 0.0;
teacher3.location.coordinates.lon = 0.0;

console.log("ORIGINALE", teacher);
console.log("COPIA", teacher2);
console.log("COPIA2", teacher3);

console.log("--------------------------------------------");
// 2) structuredClone(singleSourceObject) - Copia profonda, anche dei sotto riferimenti

const teacher4 = structuredClone(teacher);

teacher4.surname = "Violetti";
teacher4.location.region = "Tuscany";

console.log("ORIGINALE", teacher);
console.log("COPIA", teacher2);
console.log("COPIA2", teacher3);
console.log("COPIA3", teacher4);
