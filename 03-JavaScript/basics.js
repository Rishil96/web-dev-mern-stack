// Variables
let name = "John";
let age = 25;
let isStudent = true;

// Data Types
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean

// Operators
let sum = age + 5; // Addition
let isAdult = age >= 18; // Comparison
let canVote = isAdult && isStudent; // Logical AND

console.log(sum); // 30
console.log(isAdult); // true
console.log(canVote); // true

/* 
DOM Manipulation
*/

// Change color of heading (a single item)
const title = document.querySelector('#main-heading');
title.style.color = 'red'
console.log(title);

// Apply styling to list of items
const listItems = document.querySelectorAll('.list-items');

for (let i=0; i<listItems.length; i++) {
    listItems[i].style.color = 'green'
    listItems[i].style.fontSize = '1.5rem'
}

console.log(listItems);

// Create another list item using DOM
const ul = document.querySelector('ul');
const li = document.createElement('li');

// Append new li into the selected ul
ul.append(li);

// Modify element
li.innerText = 'X-Men';
li.style.color = 'green';
li.style.fontSize = '1.5rem';

// Modify attributes and classes of an element
// Specify attribute name first followed by value of that attribute
li.setAttribute('class', 'list-items');
li.setAttribute('id', 'main-heading');

// Remove attribute from an element
li.removeAttribute('id');

// Get attribute
console.log(title.getAttribute('id'));


// Add and remove classes using class list
li.classList.add('test-class');
console.log(li.classList.contains('test-class'));
li.classList.remove('test-class');
console.log(li.classList.contains('test-class'));

// To remove element, select the element and use remove method
li.remove();



/*
Get parent node of selected element
*/
console.log(ul.parentElement);
console.log(ul.parentNode);

/*
Get child nodes
*/
// Get child nodes of selected element
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

// Use this one to get elements
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
console.log(ul.children);

/* 
Get sibling nodes
*/
const div = document.querySelector('div');

console.log(div.previousElementSibling);
console.log(div.nextElementSibling);