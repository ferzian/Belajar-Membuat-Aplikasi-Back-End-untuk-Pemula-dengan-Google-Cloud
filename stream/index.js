// Membuat readable stream dengan menggunakan method createReadStream() dari core module fs.
// const fs = require("fs");

// const readableStream = fs.createReadStream("./article.txt", {
//   highWaterMark: 10,
// });

// readableStream.on("readable", () => {
//   try {
//     process.stdout.write(`[${readableStream.read()}]`);
//   } catch (error) {
//     // catch the error when the chunk cannot be read.
//   }
// });

// readableStream.on("end", () => {
//   console.log("Done");
// });


// Membuat writable stream dalam menulis berkas, gunakanlah method createWriteStream() dari core module fs.
// const fs = require('fs');
 
// const writableStream = fs.createWriteStream('output.txt');
 
// writableStream.write('Ini merupakan teks baris pertama!\n');
// writableStream.write('Ini merupakan teks baris kedua!\n');
// writableStream.end('Akhir dari writable stream!');


// Latihan Readable dan Writeable Stream
/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');

const readable = fs.createReadStream('./input.txt', {
  highWaterMark: 15
});

const writable = fs.createWriteStream('output.txt');

readable.on('data', (dataInput) => {
  writeble.write(dataInput + '\n');
});

readable.on('error', (error) => {
  console.error('Error saat membaca input file:', error);
});

writable.on('error', (error) => {
  console.error('Error saat menulis output file:', error);
});

readable.on('end', () => {
  writable.end();
  console.log('Finished writing to output.txt');
});


