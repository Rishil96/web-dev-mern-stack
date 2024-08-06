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

- **Event Listeners**:
---
<a id="5"></a>

## ES6+ Features



---
<a id="6"></a>

## Asynchronous JS



---
<a id="7"></a>

## Common Built-in Methods



---
<a id="8"></a>

## JSON



---
<a id="9"></a>

## Fetch API



---