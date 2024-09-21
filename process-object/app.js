// proses object
// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });


// mendapatkan informasi tentang penggunaan cpu ketika berjalan
const cpuInformation = process.memoryUsage();
 
console.log(cpuInformation);


// properti argv menyimpan perintah dalam bentuk array
const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);  