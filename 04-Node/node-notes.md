# Node.js

[Back to Index](../index.md)

## Index

| Sr. No. | Link to Topic Document |
|:---:|:---:|
| 1. | [Introduction](#1) |
| 2. | [Core Concepts](#2) |
| 3. | [File System](#3) |
| 4. | [Event Driven Programming](#4) |
| 5. | [HTTP Module](#5) |
| 6. | [Environment Variables](#6) |


<a id="1"></a>

## Introduction

- Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript code on the server side.

- Node.js comes with npm, the default package manager, which provides access to a vast ecosystem of open-source libraries and tools.

- Node.js can run on various operating systems, including Windows, Linux, and macOS.

- Node.js enables developers to use JavaScript for both frontend and backend development, promoting full-stack JavaScript development.

- Node.js has an asynchronous architecture.

---

<a id="2"></a>

## Core Concepts

- In node, we don't have the window and document objects that are used for frontend selection. Instead we have features to build a solid backend.

- global objects are those objects (variables, classes or functions) that are available to use in a JS file in global scope. E.g. console.log(), setTimeout(), etc.

- variables and functions we define in a file is not added to the global scope. A global scope is a keyword through which we can access all the global objects using global.object.

- In JS, every file is considered as a module and all the code written in those files are scoped to that module just like Python.

- To use modules we use .mjs extension instead of the usual .js

- **global**: The global object in Node.js, similar to window in browsers. Use with caution.
- **process**: Provides information and control over the current Node.js process (environment variables, command-line arguments, etc.).
- **__dirname**: The directory name of the current module. Useful for constructing absolute paths.
- **__filename**: The filename of the current module, including its full path.

- Node does not execute our code directly. It wraps in module inside of a function with parameters.

---

<a id="3"></a>

## File System

---

<a id="4"></a>

## Event Driven Programming

---

<a id="5"></a>

## HTTP Module

---

<a id="6"></a>

## Environment Variables

---

