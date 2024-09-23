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
  response.statusCode = 200;
  //   response.end("<h1>Hello HTTP Server!</h1>");

  const method = request.method; //bisa juga menggunakan 'const {method} = request;'

  if (method === "GET") {
    response.end("<h1>i</h1>");
  }

  if (method === "POST") {
    
    // body request (mengambil data dari body)
    let body = [];

    request.on("data", (chunk) => {
      body.push(chunk);
    });

    request.on("end", () => {
      body = Buffer.concat(body).toString();
      const {name} = JSON.parse(body);
      response.end(`<h1>Hai, ${name}!</h1>`);
    });
  }

  //   if (method === "PUT") {
  //     response.end("<h1>they</h1>");
  //   }

  //   if (method === "DELETE") {
  //     response.end("<h1>we</h1>");
  //   }

};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
