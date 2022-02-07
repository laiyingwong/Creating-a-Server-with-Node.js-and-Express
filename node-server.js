/* ~~~ This file is used to create a server with Node.js ~~~ */

// require http and fs modules
const http = require("http");
const fs = require("fs");

// create a server and implement the responses for the browser
const server = http.createServer((req, res) => {
  // when the browser reloads, the callback function fires and returns the URL
  let url = req.url;

  // create a variable to store the relative path to read files
  let path;

  // use switch statements to implement corresponding responses for different URLs
  switch (url) {
    case "/":
      path = "html-files/index.html";
      break;

    case "/index":
      path = "html-files/index.html";
      break;

    case "/about":
      path = "html-files/about.html";
      break;

    // redirect a page (e.g. when the URL hits /about-me, redirect it to /about)
    case "/about-me":
      res.statusCode = 301; // 301 indicates the website has been permanently removed
      res.setHeader("Location", "/about"); // the 2nd parameter is the location we want it to redirect to
      res.end();
      break;

    default:
      path = "html-files/404.html";
      res.statusCode = 404;
      break;
  }

  // set the content type to be text/html to indicate the server is sending back data in the html format
  res.setHeader("Content-Type", "text/html");

  // send the html files according to the paths
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

// listen for requests from the browser on port 4000
server.listen(4000, "localhost");
