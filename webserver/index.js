const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((request, response) => {
  const requestUrl = url.parse(request.url).pathname;
  if (requestUrl === "/") {
    fs.readFile("./index.html", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("Not Found");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
      }
      response.end(); // untuk mengakhiri proses respons
    });
  } else if (requestUrl === "/gallery") {
    fs.readFile("./gallery.html", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("Not Found");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
      }
      response.end(); // untuk mengakhiri proses respons
    });
  } else if (requestUrl === "/gambar1") {
    fs.readFile("./img/gambar_satu.jpg", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("Not Found");
      } else {
        response.writeHead(200, { "Content-Type": "image/jpg" });
        response.write(data);
      }
      response.end(); // untuk mengakhiri proses respons
    });
  } else if (requestUrl === "/gambar2") {
    fs.readFile("./img/gambar_dua.jpg", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("Not Found");
      } else {
        response.writeHead(200, { "Content-Type": "image/jpg" });
        response.write(data);
      }
      response.end(); // untuk mengakhiri proses respons
    });
  } else if (requestUrl === "/gambar3") {
    fs.readFile("./img/gambar_tiga.jpg", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("Not Found");
      } else {
        response.writeHead(200, { "Content-Type": "image/jpg" });
        response.write(data);
      }
      response.end(); // untuk mengakhiri proses respons
    });
  } else if (requestUrl === "/style") {
    fs.readFile("./style.css", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("Not Found");
      } else {
        response.writeHead(200, { "Content-Type": "text/css" });
        response.write(data);
      }
      response.end(); // untuk mengakhiri proses respons
    });
  } else if (requestUrl === "/tampilan") {
    fs.readFile("./data.json", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("Not Found");
      } else {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(data);
      }
      response.end(); // untuk mengakhiri proses respons
    });
  } else {
    response.writeHead(404);
    response.write("Not Found");
    response.end();
  }
});

server.listen(8080);
