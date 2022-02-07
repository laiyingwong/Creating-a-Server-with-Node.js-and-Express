/* ~~~ This file is used to create a server with the Express framework ~~~ */
const express = require("express"); // returns a function
// invoke the function to create an instance of an Express app
const app = express();

// create a server instance and listen for the requests from the browser
app.listen(4000);

// listen for the GET requests and implement the responses
app.get("/", (req, res) => {
  // 1st parameter: the path/URL to listen to
  // 2nd parameter: callback function with req and res
  //  __dirname: the entire file path it takes to get to this current file
  res.sendFile(`${__dirname}/html-files/index.html`);
  // or res.sendFile('html-files/index.html', {root: __dirname});
});

app.get("/index", (req, res) => {
  res.sendFile(`${__dirname}/html-files/index.html`);
  // or res.sendFile('html-files/index.html', {root: __dirname});
});

app.get("/about", (req, res) => {
  res.sendFile(`${__dirname}/html-files/about.html`);
  // or res.sendFile('html-files/about.html', {root: __dirname});
});

// redirect a page
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

// if none of the GET handlers above matches the URL requested from the browser, send back the 404 page
app.use((req, res) => {
  // we need to manually set 404 status code
  res.status(404).sendFile(`${__dirname}/html-files/404.html`);
  // or res.status(404).sendFile('html-files/404.html', {root: __dirname})
});
