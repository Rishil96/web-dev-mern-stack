# JavaScript

[Back to Index](../index.md)

## Index

| Sr. No. | Link to Topic Document |
|:---:|:---:|
| 1. | [Basics](#1) |
| 2. | [Control Structures](#2) |
| 3. | [Functions](#3) |
| 4. | [DOM Manipulation](#4) |
| 5. | [ES6+ Features](#5) |
| 6. | [Asynchronous JS](#6) |
| 7. | [Common Built-in Methods](#7) |
| 8. | [JSON](#8) |
| 9. | [Fetch API](#9) |


<a id="1"></a>

## Basics

- **Variables**: are used to store data that can be referenced and manipulated in a program. They act as containers for values and can be given descriptive names to make code more readable.

- **Data Types**: define the kind of data a variable can hold. Common data types include:

    - **String**: Represents text. Example: "Hello, World!"
    - **Number**: Represents numeric values. Example: 42 or 3.14
    - **Boolean**: Represents true or false values. Example: true, false
    - **Array**: Represents a list of values. Example: [1, 2, 3, 4, 5]
    - **Object**: Represents a collection of key-value pairs. Example: { name: "Alice", age: 30 }

- **Operators** are symbols that perform operations on variables and values. Common operators include:

    - **Arithmetic Operators**: Perform basic mathematical operations.

        - Addition: +
        - Subtraction: -
        - Multiplication: *
        - Division: /
        - Modulus: % (remainder)

    - **Comparison Operators**: Compare values and return a boolean result.

        - Equal to: ==
        - Strict equal to: ===
        - Not equal to: !=
        - Greater than: >
        - Less than: <
        - Greater than or equal to: >=
        - Less than or equal to: <=

    - **Logical Operators**: Combine boolean values and return a boolean result.

        - AND: &&
        - OR: ||
        - NOT: !

---
<a id="2"></a>

## Control Structures

- **Conditional Statements**
    - **if - else if - else**:
    ```
    if (score >= 90) {
        console.log("A grade");
    } 
    else if (score >= 80) {
        console.log("B grade");
    } 
    else {
        console.log("C grade or lower");
    }
    ```
    - **switch case**: 
    ```
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        default:
            console.log("Another day");
    }
    ```

- **Loops**

    - **for**: usual standard like in C++
    - **for in**: used to iterate over properties of Object.
    - **for of**: iterates over iterables like array, string, etc.

    ```
    FOR

    for (let i = 0; i < 5; i++) {
        console.log(i); // Output: 0, 1, 2, 3, 4
    }

    ------------------------------------------

    FOR IN 

    const person = { name: "John", age: 30, city: "New York" };
    for (let key in person) {
        console.log(key + ": " + person[key]); // Output: name: John, age: 30, city: New York
    }

    ------------------------------------------
    
    FOR OFF

    const array = [1, 2, 3, 4, 5];
    for (let value of array) {
        console.log(value); // Output: 1, 2, 3, 4, 5
    }
    
    ```

    - **while**: standard while
    - **do while**: run code atleast once before checking while condition

    ```
    WHILE

    let i = 0;
    while (i < 5) {
        console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
    }

    ------------------------------------------

    DO WHILE

    let i = 0;
    do {
        console.log(i); // Output: 0, 1, 2, 3, 4
        i++;
    } while (i < 5);

    ```

- **Break and Continue**

    - **break Statement**: Exits the current loop or switch statement.

    - **continue Statement**: Skips the current iteration of the loop and continues with the next iteration.

---
<a id="3"></a>

## Functions

- **Function Declaration**: A function declaration defines a named function that can be called elsewhere in the code.

- **Function Expression**: A function expression defines a function inside an expression. It can be anonymous (without a name) or named.

- **Arrow Function**: Arrow functions provide a shorter syntax for writing function expressions. They do not have their own this context, which can be useful in certain situations.

```
FUNCTION DECLARATION

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!

------------------------------------------
    
FUNCTION EXPRESSION

const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Bob")); // Output: Hello, Bob!

------------------------------------------
    
ARROW FUNCTION

const greet = (name) => `Hello, ${name}!`;

console.log(greet("Charlie")); // Output: Hello, Charlie!

```

---
<a id="4"></a>

## DOM Manipulation

- **DOM**: Document Object Model. used to manipulate content, style and structure of HTML/CSS.
- DOM can be imagined as a tree of nodes starting from html that has 2 children head and body tags and so on. Document node is the root node of the DOM Tree which has the child node html.

- Multiple ways to select are:- getElementById, getElementsByClass, getElementsByTagName
- Also this can be achieved by querySelecter and querySelectorAll where we can pass any CSS selector in it.
- Go through basics.js file to get a glimpse of various methods we can use for DOM manipulation.

---

- **Event Listeners**: allows to add interactive functionality to the web page based on events such as for example click event.

- Syntax is `element.addEventListener('event-type', function-to-call)`

---

- **Event Propagation** refers to how an event travels through the Document Object Model (DOM). There are three phases of event propagation:

    1. **Event Capturing**: The event travels from the document node down to the target element. This is also known as the "capturing phase."
    2. **Target**: The event reaches the target element where the actual event takes place.
    3. **Event Bubbling**: The event travels back up from the target element to the document node. This is known as the "bubbling phase."

Here's a brief illustration of these phases:

**Event Capturing**: Document → Parent → Child (target)
**Target**: The event occurs at the target element (Child)
**Event Bubbling**: Child (target) → Parent → Document

---

- **Event Delegation**: allows users to append a SINGLE event listener to a parent element that adds it to all of its present and future descendants that match a selector.
- Adding the event listener to a parent element will automatically add those events to its current and future children elements.

---

<a id="5"></a>

## ES6+ Features

- **Template Literals**: basically f-strings of Python. Uses `` instead of regular quotes and we can format variables in it like shown below.
```
let name = "Alice";

let greeting = `Hello, ${name}!`;

let poem = `Roses are red,
Violets are blue,
I love JavaScript,
And so do you!`;

console.log(poem);
```
- important to know is we can write multiline strings and also insert expressions in the string.

---

- **Destructuring**: Destructuring is a powerful way to unpack values from arrays or properties from objects into distinct variables. 

```
# Destructuring Arrays

const numbers = [1, 2, 3, 4];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4]

# Destructuring Objects

const person = { name: 'Alice', age: 30, city: 'New York' };
const { name, age } = person;

console.log(name); // Output: Alice
console.log(age); // Output:   
 30
```

---

- **Spread Operator**: The spread operator (three dots ...) allows you to expand an iterable (like an array or object) into individual elements.

```
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combined = [...numbers1, ...numbers2];
console.log(combined);  // Output: [1, 2, 3, 4, 5, 6]
```

---

- The **rest operator** (represented by three dots ...) allows a function to accept an indefinite number of arguments as an array. This makes it versatile for creating functions that can handle varying numbers of inputs.

```
function functionName(...restParameters) {
  // Function body
}
```
---

- **Modules** are essentially separate JavaScript files that encapsulate related code.
- **Export** is used to make specific functions, variables, or objects accessible to other modules.
- **Import** is used to bring in exported elements from other modules into your current file.

<a id="6"></a>

## Asynchronous JS

- **Synchronous Programming**: follows each step/instruction in order.

- **Asynchronous Programming**: Asynchronous programming allows JavaScript to perform tasks without blocking the main thread. This means that JavaScript can handle other operations while waiting for tasks like network requests, file I/O, or timers to complete.

- **Callback**: A callback is a function passed as an argument to another function. It is executed after the completion of the asynchronous operation. 
- For e.g. there are 2 functions A and B, and B is dependent on function A's results, so we will pass function B as a callback function (basically a function parameter) to function A. 
- Then inside A whenever all the tasks of function A is completed, only then we will call function B which is the callback function in this case. 
- This ensures function B to run only after A has completed execution. Function B should never be called directly as it depends on A.

- **Promises**: A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.
- A Promise in JavaScript is like a guarantee that you will receive a result of an asynchronous operation in the future. It can either be:
- Fulfilled: The operation was successful, and you got what you wanted.
- Rejected: The operation failed, and something went wrong.

- **Async/Await**: async and await provide a cleaner way to work with Promises, making asynchronous code look more like synchronous code.

- async: Declares a function as asynchronous.
- await: Pauses the execution of the function until the Promise is resolved or rejected.

---
<a id="7"></a>

## Common Built-in Methods

- **Array Properties**
    - **push()**: add element to end of array.
    - **pop()**: pop element from end of array.
    - **shift()**: removes first element from the array.
    - **unshift()**: adds one or more elements to the start of array.
    - **map()**: creates a new array with the results received from the function provided in the map method.
    - **filter()**: creates a new array with the elements the passes through the filter condition.
    - **forEach()**: executes a provided function for each element of array.
    - **find()**: returns the first element that satisfies the find condition.
    - **slice()**: returns a subarray by creating a shallow copy.

---

- **String Properties**
    - **charAt()**: returns character at the specified index.
    - **concat()**: joins 2 or more string.
    - **includes()**: check if input string can be found in the main string.
    - **indexOf()**: returns index of first occurrence of provided value.
    - **toUpperCase()**: converts string to uppercase.
    - **toLowerCase()**: converts string to lowercase.
    - **slice()**: creates shallow copy of slice of a string.
    - **split()**: splits string into array based on given delimiter.
    - **replace()**: replace first occurrence with the given input.
    - **trim()**: removes whitespace from both ends of string.

---

- **Object Properties**
    - keys(): returns array of keys of object.
    - values(): returns array of values of object.
    - entries(): returns key, value pair 2D array.

---
<a id="8"></a>

## JSON

- 2 main operations for JSON in JavaScript are parsing & stringifying.

- **JSON parsing** refers to converting a JSON string into a JavaScript object. This is done using the JSON.parse() method.

- **JSON stringifying** refers to converting a JavaScript object or array into a JSON string. This is done using the JSON.stringify() method.

---

<a id="9"></a>

## Fetch API

- **Fetch API**: The fetch() function is used to make HTTP requests. It returns a promise that resolves to the Response object representing the response to the request.
```
    fetch(url, options)
    .then(response => {
        // Handle the response
    })
    .catch(error => {
        // Handle any errors
    });
```

---