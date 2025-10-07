# 🎨 CSS Basics

**CSS (Cascading Style Sheets)** is used to style and visually enhance HTML elements on a webpage.

---

## 📗 1. CSS Basics (Selectors, Colors, Fonts)

Selectors target HTML elements to apply styles.

```css
p {
  color: blue;
  font-family: Arial;
}
```

color — sets the text color.

font-family — changes the font style.

## 📘 2. Box Model
The Box Model defines how elements are spaced and sized — including content, padding, border, and margin.

```
div {
  width: 200px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}
```

## 📙 3. Inline vs Block vs Inline-Block
Type	Examples	Description
Inline	<span>, <a>	Does not accept width/height.
Block	<div>, <p>	Takes full width of its parent container.
Inline-Block	—	Behaves like inline but supports width and height.

## 📒 4. Flexbox
Used for creating flexible layouts that adjust dynamically.

```
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

display: flex; — activates flex container.

justify-content — aligns items horizontally.

align-items — aligns items vertically.

## 📔 5. Grid
CSS Grid is used for building complex, two-dimensional layouts.

```
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

display: grid; — activates grid layout.

grid-template-columns — defines column structure.

gap — defines spacing between grid items.

## 📕 6. Position
Controls how elements are positioned in the document.

static — default positioning.

relative — positioned relative to its normal position.

absolute — positioned relative to nearest positioned ancestor.

fixed — positioned relative to the viewport.

sticky — toggles between relative and fixed depending on scroll.

## 📓 7. Animation, Transition, and Transform
Used to create smooth motion effects and dynamic transitions.

```
@keyframes example {
  0% { background-color: red; }
  100% { background-color: blue; }
}
```

### Common Properties:

transition — controls speed of changes.

transform — allows rotation, scaling, and translation (2D & 3D).

animation — defines custom keyframe animations.

## 📚 8. Media Queries
Used to make layouts responsive on different screen sizes.

```
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
``` 

@media — defines conditions for applying CSS.

(max-width: 600px) — applies style when screen width ≤ 600px.

💡 Tip: Practice by building small UI components such as buttons, cards, and navigation bars to strengthen your CSS understanding.