// EventEmitter class yang merupakan member dari events core module
// const { EventEmitter } = require('events');

// const myEventEmitter = new EventEmitter();

// // fungsi yang akan dijalankan ketika event coffee-order terjadi
// const makeCoffee = ( name ) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };

// const makeBill = (price) => {
//     console.log(`Bill sebesar ${price} telah dibuat!`);
// }

// // menggunakan fungsi untuk menangani event dengan akhiran 'handler'/'listener'
// const onCoffeeOrderListener = ({name, price}) => {
//     makeCoffee(name);
//     makeBill(price);
// }

// // mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// myEventEmitter.on('coffee-order', onCoffeeOrderListener);

// // Memicu event 'coffee-order' terjadi.
// myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 10000 });

// Latihan Events
// TODO 1
const {EventEmitter} = require("events");

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

// TODO 2
const myEmitter = new EventEmitter();

// TODO 3
myEmitter.on("birthday", birthdayEventListener);

// TODO 4
myEmitter.emit("birthday", 'Ferzian');
