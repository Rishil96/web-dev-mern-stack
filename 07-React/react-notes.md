# React.js

[Back to Index](../index.md)

## Index

| Sr. No. | Link to Topic Document |
|:---:|:---:|
| 1. | [Introduction & Components](#1) |
| 2. | [JSX](#2) |
| 3. | [Props & State](#3) |
| 4. | [Event Handling & Conditional Rendering](#4) |
| 5. | [List & Keys](#5) |
| 6. | [Effects & Forms](#6) |
| 7. | [Context API & React Router](#7) |
| 8. | [Error Boundaries](#8) |


<a id="1"></a>

## Introduction & Components

- **React**: a front-end JS library for building user interfaces.
- React can make web applications interactive without actually reloading and requesting multiple HTML pages. It does this using Virtual DOM.
- **Virtual DOM**: is a JS Object and a light-weight representation of DOM.
- it is component based library. Everything in the web app is divided into smaller components and every React JS app is a tree of components. Every component is independent of the other component.
- 2 types of components in React are Functional and Class-based. Currently only Functional components are in use.
- All of our application logic is present and will go in src folder when we create our react project using `npx create-react-app ./`
- We have a single index.html file inside the public folder that gets created while creating the project using command. Inside the index.html file, there is a **div with class root**.
- All of our react components gets injected inside this div tag.
- The starting point of every react js application is inside src folder and the file is **index.js**.

- **React fragment**: is an empty pair of div tags `<></>` basically used to encapsulate all the tags inside this fragment tag. This is used because for a single React component, only one tag at the root level is allowed so in order to use multiple tags, we use React fragment as the root tag and put all other tags inside them.

- Every component can be called in another components as a self closing tag. E.g. if there is a component named Person, we can call it inside another component like this `<Person />`

---

<a id="2"></a>

## JSX

- is a HTML like syntax used in .jsx file to tell React what to display/render on the front end.
- To create a functional component, we can do it in App.js file and create a function with name starting with capital letter and that returns JSX. Inside, this JSX we can use **{}** and inside them we can run Javascript expressions

---

<a id="3"></a>

## Props & State

- **Props** allows us to pass dynamic data through react components.
- `<Component var1="val1" var2="val2" />` this is how we can give props to a component and inside the component we pass **props** parameter in our function brackets and use props.var1 like notation to read this data.

- **State** in react is a plain JS Object used by react to represent a piece of information about the component's current situation.

- In react, whenever we use a function and it starts with *use* it is called a Hook.

- useState() returns 2 values: name of the state and a setter function. Setter function always has an input parameter that can be named whatever we want and that variable is the current state value of the element.

- useEffect() is also a web hook that runs when the component is loaded/reloaded. It also accepts a callback function as first input containing the code we want to run when reload occurs. Second input is a dependency array in which we specify the variables to be used to track changes and run the useEffect to reload the component. Leave empty if we only want to reload at the beginning.x`

- React component state should never manually be changed, only change the state using the help of a setter function that we get from useState().

---

<a id="4"></a>

## Event Handling & Conditional Rendering

- **Events**: is an action that can be trigged as a result of a user action or some system generated event.
- An event can be added directly inside an element like an attribute which will take a callback function as input which is what code we want to run when the event occurs.

---

<a id="5"></a>

## List & Keys

---

<a id="6"></a>

## Effects & Forms

---

<a id="7"></a>

## Context API & React Router

---

<a id="8"></a>

## Error Boundaries

---

