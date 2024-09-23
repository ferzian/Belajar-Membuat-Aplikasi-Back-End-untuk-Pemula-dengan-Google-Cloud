// Membuat http server secara native
const http = require("http");

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 *
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */

const requestListener = (request, response) => {
  response.setHeader("Content-TYpe", "text/html");
  // response.statusCode = 200;

  const { method, url } = request; //bisa juga menggunakan 'const method = request.method;'

  // Routing Request
  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end("<h1>Ini halaman Homepage</h1>");
    } else {
      response.statusCode = 400;
      response.end(
        `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end("<h1>Halo! Ini adalah halaman about</h1>");
    } else if (method === "POST") {
      // body request (mengambil data dari body)
      let body = [];
      
      request.on("data", (chunk) => {
        body.push(chunk);
      });
      
      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.statusCode = 200;
        response.end(`<h1>Halo, ${name}! Ini adalah halaman About</h1>`);
      });
    } else {
      response.statusCode = 400;
      response.end(
        `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`
      );
    }
  } else {
    response.statusCode = 404;
    response.end("<h1>Halaman tidak ditemukan!</h1>");
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
