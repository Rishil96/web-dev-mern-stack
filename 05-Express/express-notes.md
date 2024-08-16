# Express.js

[Back to Index](../index.md)

## Index

| Sr. No. | Link to Topic Document |
|:---:|:---:|
| 1. | [Introduction](#1) |
| 2. | [Core Concepts](#2) |
| 3. | [Routing](#3) |
| 4. | [Request & Response](#4) |
| 5. | [Error handling](#5) |
| 6. | [Static Files](#6) |
| 7. | [Security & Best Practices](#7) |
| 8. | [Authentication & Authorization](#8) |
| 9. | [Deployment](#9) |


<a id="1"></a>

## Introduction

- Express.js is a minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications. 
- It simplifies the development process by offering built-in tools for handling HTTP requests, middleware, routing, and more. 
- Express.js is often used for building APIs and single-page applications, making it popular in full-stack development, especially with the MERN stack.

---

<a id="2"></a>

## Core Concepts

- **Middleware** is the code that runs between the starting of the request and the ending of the request.
- Every middleware function takes req, res and next parameters.
- Also middleware should be defined above all routes as it is read from top to bottom.
- If we want to run middleware only on selected routes, pass it as second argument in between path and the route function.

- Middleware can also be used to render static pages, create all html static pages in a folder called public and add it in server.js like `app.use(express.static("public"))`.
- Now any html files in this public folder can be accessed via extending the path of our URL with the path inside this public folder.
- To accept query parameters like `http://localhost/3000?name=Rishil` use req.query.name in specific route to get it.

---

<a id="3"></a>

## Routing

- routes are created similar to Python by using app.method-name syntax but it takes 2 arguments, first is the path and second is an arrow or anonymous function that is the code that should be run on that route.

- Routers are concept to keep similar routes in a single module.

- This can be done by creating a new file, an independent application but with express.Router() and place all the specific routes in that file. 

- All routers should be in a separate folder, standard name is routes.

- After router is created, we just need to use it in main server.js file using the app.use('path-prefix', routerObject) code.

- to add a dynamic parameter, use a :variable-name in path and then access it using req.params.variable-name.

- always put static routes before dynamic routes in top to bottom scenario in server.js.

---

<a id="4"></a>

## Request & Response

---

<a id="5"></a>

## Error handling

---

<a id="6"></a>

## Static Files

- using render method of express app object we can render HTML. To run code using template engine, use EJS engine by replacing HTML extension with .ejs. This allows us to print backend data on frontend page.
- Pass the data as a JSON object as second parameter of render method.

---

<a id="7"></a>

## Security & Best Practices

---

<a id="8"></a>

## Authentication & Authorization

---

<a id="9"></a>

## Deployment

---

