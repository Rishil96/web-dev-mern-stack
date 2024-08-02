# CSS

[Back to Index](../index.md)

## Index

| Sr. No. | Link to Topic Document |
|:---:|:---:|
| 1. | [Selectors](#1) |
| 2. | [Box Model](#2) |
| 3. | [Layout Techniques](#3) |
| 4. | [Positioning](#4) |
| 5. | [Typography](#5) |
| 6. | [Colors, Backgrounds & Common Properties](#6) |
| 7. | [Media Query Syntax](#7) |


<a id="1"></a>

## Selectors

- CSS selectors are used to target specific HTML elements for styling.

- **Element Selector**: using the element name itself to add styling attributes.
- **Class Selector**: selecting elements using specific class attribute.
- **ID Selector**: selecting a single, unique element with a specific ID attribute.

---

<a id="2"></a>

## Box Model

- Think of every HTML element as a box. This box is made up of four components:

    - **Content**: The actual content of the element (text, images, etc.)
    - **Padding**: The space between the content and the border.
    - **Border**: The border surrounding the content and padding.
    - **Margin**: The space outside the border, separating the element from other elements.

- Properties of box model are:-
    - **width & height**: set the width and height for the content (does not include padding, borders and margin).
    - **padding, border & margin**: set padding, border and margin around the content. 
---

<a id="3"></a>

## Layout Techniques

#### Flexbox

- **One-dimensional layout**: Primarily used for aligning items in a single row or column.   
- Think of it as a container with flexible items.
- Key properties:
- **display**: flex; turns an element into a flex container.
- **flex-direction**: controls the direction of the flex items (row, column).
- **justify-content**: aligns items horizontally within the container.
- **align-items**: aligns items vertically within the container.

- A Flex container is an element that has its display property set to flex. This turns its direct children (flex items) into flexible items. The container itself is then responsible for managing the layout of these items.

- Flexbox provides powerful tools for aligning items within a container. There are two primary axes to consider:

- **Main axis**: This is the direction in which the flex items are laid out (row or column).
- **Cross axis**: This is the perpendicular axis to the main axis.
Key properties for alignment:

    - **justify-content**: Aligns flex items along the main axis.
    - Values: flex-start, flex-end, center, space-between, space-around, space-evenly   
    - **align-items**: Aligns flex items along the cross axis.
    - Values: flex-start, flex-end, center, stretch, baseline

---

#### Grid

- **Two-dimensional layout**: Creates a grid structure with rows and columns.   
- Think of it as a spreadsheet.
- Key properties:
- **display**: grid; turns an element into a grid container.
- **grid-template-columns**: defines the columns of the grid.
- **grid-template-rows**: defines the rows of the grid.
- **grid-template-areas**: assigns items to specific grid areas.

- A grid container is an element that has its display property set to grid. This essentially turns the element into a grid layout, where you can arrange its children (grid items) into rows and columns.

- Grid tracks are the spaces between grid lines. They define the columns and rows of your grid layout.

- Columns: Defined using the grid-template-columns property.
- Rows: Defined using the grid-template-rows property.
- You can specify the size of tracks using:

    - Length units (px, em, etc.)
    - fr unit (flexible length, divides available space proportionally)
    - repeat() function to create repeated tracks

---

<a id="4"></a>

## Positioning

- CSS positioning **properties** allow you to precisely control the placement of elements on a page. There are four main types:

    - **Static (default)**: Elements are positioned according to the normal flow of the document.
    - **Absolute**: Element is positioned relative to the nearest positioned ancestor (or the viewport if there's no positioned ancestor).
    - **Relative**: Element is positioned relative to its normal position.
    - **Fixed**: Element is positioned relative to the viewport. It stays in the same place even if the page is scrolled.

- **Offsets**
    - **top, right, bottom, and left** properties are used to offset elements from their original position or their containing element, depending on the positioning mode.
    - Negative values can be used to move an element in the opposite direction.

- Key points:

    - Absolute and fixed positioning can remove elements from the normal document flow.
    - Relative positioning is useful for fine-tuning element placement.
    Be careful when using absolute and fixed positioning as it can disrupt the layout if not used carefully.

---

<a id="5"></a>

## Typography

- **Typography**: is the art and technique of arranging type to make written language legible, readable, and appealing when it is viewed.

- **Fonts**: are the specific styles of a typeface. They can vary in weight, style (italic, bold), and size. There are two main types: serif and sans-serif.
    - Serif fonts have small lines or feet at the ends of characters.
    - Sans-serif fonts do not have these small lines.

 when it is viewed.

- **Text Alignment**: refers to the horizontal positioning of text within a container.

    - **Left-aligned**: Text starts at the left margin and creates a ragged right edge.
    - **Right-aligned**: Text starts at the right margin and creates a ragged left edge.
    - **Centered**: Text is centered horizontally within the container.
    - **Justified**: Text is aligned to both left and right margins, creating even spacing.

- **Line Height**: also known as leading, is the vertical space between lines of text. It affects the readability of text. A good line height ensures enough space between lines for easy reading.
---

<a id="6"></a>

## Colors, Backgrounds & Common Properties

- different ways to use colors to style web pages are: names, hex codes, RGB values, RGBA values.

- **Backgrounds**: Backgrounds are the area behind your content. You can set background colors, images, and even gradients.

    - **background-color**: Sets the background color.
    - **background-image**: Sets a background image.
    - **background-repeat**: Controls how the image repeats.
    - **background-position**: Positions the image.
    - **background-attachment**: Determines if the image scrolls with the page or stays fixed.

---
- Common Display Values:
    - **block**:
    The element occupies the entire width of its container.
    Starts on a new line.
    Examples: div, p, header, footer
    - **inline**:
    The element does not start on a new line.
    Only takes up the width of its content.
    Examples: span, a, img
    - **inline-block**:
    Combines properties of block and inline elements.
    Displays like an inline element but allows you to set width and height.
    - **flex**:
    Enables flexible layout for child elements within a container.
    Uses the Flexbox model for layout.
    - **grid**:
    Enables two-dimensional grid-based layout for child elements within a container.
    Uses the CSS Grid layout module.
    - **none**:
    Hides the element completely.

---

<a id="7"></a>

## Media Query Syntax

- Media queries are a powerful tool in CSS for creating responsive designs. They allow you to apply specific styles based on different screen sizes, device types, and other conditions.

```
@media screen and (min-width: 768px) {
  /* CSS styles for screens with a minimum width of 768px */
}
```

- Breakdown of Syntax
    - **@media**: This keyword indicates the start of a media query.
    - **screen**: This is a media type, specifying the target device. Other media types include print, all, etc.
    - **and**: This optional keyword combines multiple media conditions.
    - **(min-width: 768px)**: This is a media feature expression, specifying a minimum screen width. Other media features include max-width, orientation, device-width, device-height, etc.
    - **{ /* CSS styles */ }**: This block contains the CSS rules that will be applied if the media query conditions are met.

- You can combine multiple media features using and or or.
- Media queries can be nested for more complex conditions.
- Common media features include:
    - **min-width, max-width**: for screen width
    - **orientation**: for portrait or landscape mode
    - **device-width, device-height**: for device dimensions
    - **resolution**: for screen resolution
- By effectively using media queries, you can create websites that adapt to different screen sizes and provide optimal user experiences across various devices.
---