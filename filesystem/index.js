// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');

const data = fs.readFileSync('notes.txt', 'utf-8');

console.log(data);