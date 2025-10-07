🎨 CSS Basics

CSS (Cascading Style Sheets) is used to style and visually enhance HTML elements on a webpage.

1️⃣ CSS Basics (Selectors, Colors, Fonts)

Selectors target HTML elements to apply styles.

p {
  color: blue;
  font-family: Arial;
}


color sets the text color.

font-family changes the font style.

2️⃣ Box Model

The box model defines how elements are spaced and sized — including content, padding, border, and margin.

div {
  width: 200px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}

3️⃣ Inline vs Block vs Inline-Block
Type	Examples	Description
Inline	<span>, <a>	Does not accept width/height.
Block	<div>, <p>	Takes full width of its parent.
Inline-Block	—	Behaves like inline but supports width and height.
4️⃣ Flexbox

Used for creating flexible layouts that adjust dynamically.

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

5️⃣ Grid

CSS Grid is used for building complex, multi-dimensional layouts.

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

6️⃣ Position

Controls how elements are positioned in the document.

static (default)

relative

absolute

fixed

sticky

7️⃣ Animation, Transition, and Transform

Create smooth effects and motion in CSS.

@keyframes example {
  0% { background-color: red; }
  100% { background-color: blue; }
}


Use with:

transition

transform (2D & 3D)

Scroll-based animations for interactive designs

8️⃣ Media Queries

Used to make layouts responsive for different screen sizes.

@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
