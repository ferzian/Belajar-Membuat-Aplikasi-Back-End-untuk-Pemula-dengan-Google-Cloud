// menggunakan module 'moment'
// const moment = require("moment");

// const date = moment().format("MMM-Do-YYYY");

// console.log(date);

// Latihan Node Package Manager menggunakan module 'lodash'
const _ = require("lodash"); // TODO

const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

console.log(myOddEvenArray);
