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

- Semantic HTML tags provide meaning and context to the content within them, improving accessibility, SEO, and code readability.

- Here are some common semantic HTML tags:

- **\<header\>**: Represents introductory content or a set of navigational links.
- **\<nav\>**: Defines a set of navigation links.
- **\<main\>**: Specifies the main content of a document.
- **\<article\>**: Contains independent, self-contained content.
- **\<section\>**: Groups related content together.
- **\<aside\>**: Holds content related to the main content but not central to it, like sidebars.
- **\<footer\>**: Contains footer content for its nearest sectioning content or root element.
- **\<figure\>**: Encapsulates media content along with a caption (\<figcaption\>).
- **\<time\>**: Represents a specific period in time.

---

<a id="4"></a>

## HTML Attributes

- HTML attributes provide additional information about HTML elements. They are always included in the opening tag and usually come in name/value pairs like name="value".

- **class**: Specifies one or more class names for an element. It is used to apply CSS styles to elements with the same class name or to select them with JavaScript.
- **id**: Defines a unique identifier for an element. It must be unique within the HTML document. IDs are used for styling with CSS, targeting with JavaScript, and creating anchor links.
- **style**: Contains inline CSS to apply styles directly to an element.
- **title**: Provides additional information about an element, often displayed as a tooltip when the mouse hovers over the element.

---

<a id="5"></a>

## Meta Tags

- Meta tags are HTML tags that provide metadata about a web page. They are placed inside the \<head> section of the HTML document. Metadata is information about the data on the page, which is not displayed to users but is used by browsers, search engines, and other web services.

- **\<meta charset="UTF-8">**: Specifies the character encoding for the HTML document.
- **\<meta name="viewport" content="width=device-width, initial-scale=1.0">**: Ensures the web page is responsive and adjusts its layout based on the device's width.
- **\<meta name="description" content="A brief description of the page">**: Provides a brief description of the page, which search engines often use in search results.
- **\<meta name="keywords" content="keyword1, keyword2, keyword3">**: Lists keywords relevant to the page's content, used by some search engines for indexing.
- **\<meta http-equiv="refresh" content="30">**: Refreshes the page after a specified number of seconds.

---

<a id="6"></a>

## Embedded Content

- Embedded content in HTML allows you to integrate external resources like documents, multimedia, and other web pages into your own web page.

- **\<iframe>**: Embeds another HTML document within the current document.

- **\<audio>**: Embeds audio content. It supports various attributes and child elements for controlling playback.

- **\<video>**: Embeds video content. Like the <audio> element, it supports various attributes and child elements for controlling playback.

---