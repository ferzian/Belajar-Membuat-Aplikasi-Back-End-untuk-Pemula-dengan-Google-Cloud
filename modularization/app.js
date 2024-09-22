// mengimport dari coffee.js
const coffee = require("./coffee");
console.log(coffee)


// Gunakan object destructuring untuk mengimpor lebih dari satu nilai pada modul.
const {firstname, lastname} = require("./coffee");
console.log(firstname);
console.log(lastname);


// Mengimpor core module http
const http = require('http'); 