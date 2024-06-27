# HTML Notes

- Hyper Text Markup Language.
- not a programming language.
- Markup langauge means using annotations/tags to show content.
- Hyper Text means multiple pages are linked together.
- used to structure a webpage.
- HTML Doc -> Browser -> Renders Web Page

---

- **Tags** : tells the browser how to render different elements.
- **Element** : An HTML element includes the opening tag, closing tag and the content within.
- **HTML Text Elements** : 2 types are Block and Inline elements.
    - **Block Element**: always starts on a new line and takes up the full width of the page. E.g. p, h1 - h6, ul, article, section, div, etc.
    - **Inline Element**: differentiate specific part of text. takes up only the space that it occupies. E.g em, strong, a, etc.

- MDN Link: https://developer.mozilla.org/en-US/docs/Web/HTML

- **Attribute** : are the properties of an HTML tag. All HTML elements have attributes.

---

- **Structure**
- `<!DOCTYPE html>` -> tells the browser that the page is using HTML5.
- The whole webpage will be inside `<html> </html>` tags.
- This is divided into 2 parts, head and body.
    - head contains metadata about the page.
    - body contains the data that is displayed while the page is opened in browser.

---

- **pre** : will display the content as it was written in HTML file. means number of spaces, next lines everything will be as it was written in HTML code.

- **sup** : super script, used to write text above a given content like square, exponential, etc.

- **sub** : sub script, opposite of super script, writes text down of base text.

- **Quotation and Citation Tags** :-
    - blockquote
    - q
    - cite
    - address
    - abbr

- **rowspan**: a value that tells how many rows a given row should span to or take space of.
- **colspan**: a value that tells how many columns a given column should span to or take space of.
- **colgroup**: choose specific columns to add styling to.

- **blockquote**: is a section that is quoted from another source.
- **cite**: tag is used to display the author of the above given quote.

- **anchor tag**: used to create links and redirect to a different URL. It is possible to go to a URL, call and mail using a tag.

- **bookmark**: used to create a link to a different part of the same webpage to avoid scrolling in case of a large webpage. Set an id to the section we want to go. Then create an anchor tag and pass the id like #id-value in href of anchor. This will create a link to the section we want to go to without scrolling. Set styles for html tag, scroll-behaviour to smooth to have a smooth visual while going to the section.

- **div**: can be used on any content. used to create divisions in the content. is a block element.

- **span**: similar to div but it is an inline element.

- **Semantic Tags**: tags that provide meaning to a piece of content. E.g. table, form, section, article, etc.

continue from 55:00