# HTML

[Back to Index](../index.md)

## Index

| Sr. No. | Link to Topic Document |
|:---:|:---:|
| 1. | [Basic Document Structure](#1) |
| 2. | [Common Elements](#2) |
| 3. | [Semantic HTML](#3) |
| 4. | [HTML Attributes](#4) |
| 5. | [Meta Tags](#5) |
| 6. | [Embedded Content](#6) |


<a id="1"></a>

## Basic Document Structure

- contains 3 main HTML elements:- html, head, body.
- **\<html\>\</html\>**: Encompasses the entire HTML document.
- **\<head\>\</head\>**: Contains metadata about the page (title, character encoding, stylesheets, etc.).
- **\<body\>\</body\>**: Holds the visible content of the webpage.

---

<a id="2"></a>

## Common Elements

- few of the most commonly used elements are:-
- **headers h1 to h6**: create headings of different sizes.
- **p**: create a paragraph.
- **lists**: *ul* to create unordered list, *ol* to create ordered list, *li* to create the items inside either of the previously 2 mentioned types of lists.
- **a**: Anchor tag is used to create hyperlink to another page/resource.
- **img**: displays an image/placeholder value based on the given link in the tag.

---

#### Forms & Input Types

- Forms are used to collect user input.
- The action attribute specifies the URL where the form data will be sent for processing.
- The method attribute determines how the data is sent (GET or POST).
- common ways of accepting user input via **input** element are:-
    - **text**: A single-line text input field.
    - **password**: A text input field where the characters are masked.
    - **email**: A text input field for email addresses.
    - **number**: A numeric input field.
    - **checkbox**: A box that can be checked or unchecked.
    - **radio**: A set of options where only one can be selected.
    - **submit**: A button to submit the form.
    - **reset**: A button to reset the form.
    - **button**: A generic button without a default action.
- labels can be provided for each input like this
```
<label for="name">Name:</label>
<input type="text" id="name" name="name">
```
- **TextArea** is a separate tag that can be used within a form to accept multiline inputs from the user.
- **select**: is a tag used to create multipe options using **option** tag for user to choose between them in a form.
---

<a id="3"></a>

## Semantic HTML


---

<a id="4"></a>

## HTML Attributes


---

<a id="5"></a>

## Meta Tags


---

<a id="6"></a>

## Embedded Content


---