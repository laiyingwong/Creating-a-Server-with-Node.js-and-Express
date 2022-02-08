# Creating a Server with Node.js and Express

This project involved building two simple web servers -- one using the native Node.js, and another using the Express framework. Both servers run on port 4000 and share the same HTML files. They listen for HTTP requests from the browser and render corresponding webpages (homepage, about page, and 404 page) for different URLs. The browser is also able to redirect an about-me page (/about-me) to the about page (/about).


## 🎉 Demo 

![app demo](assets/server.gif)


## ✨ What I Have Learned

Node.js provides capabilities to create a web server which will handle HTTP requests asynchronously, and **modules** (e.g. *fs* and *http* modules) are a crucial part of the implementation. The module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node.js application. It can be loaded into the program by using the **require** function.

Express.js is a web application framework for Node.js. It simplifies creating a server because its routing methods are much more straightforward to use for processing different types of requests from the client, and it's not required to "create" a server explicitly using the *http* module or manually set the content type with Express, so the code looks a lot cleaner. 

## 💻 Setup

1. Run the command below to install packages used in the project:
```sh

$ npm install

```
2. Install nodemon globally so that it'll restart the application when changes are made to the project:
```sh

$ npm install -g nodemon

```
3. Run Node.js:
```sh

$ node

```

Run either `nodemon node-server` or `nodemon express-server` in the terminal to start the server, and connect to `http//localhost:4000` in the web browser.

## 👏 Credits

This project is based on <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU">Node.js Crash Course Tutorial</a>
 by The Net Ninja.
