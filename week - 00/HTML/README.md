🌐 HTML Basics (Tags and Attributes)

HTML (HyperText Markup Language) is the standard language for creating web pages.
It consists of elements defined using tags and attributes to structure and organize content.

📘 1. HTML Tags
🧩 a. Semantic Tags

Semantic tags clearly define their meaning, improving readability and SEO.

<header> — Defines a header section.

<nav> — Defines navigation links.

<article> — Represents an article.

<section> — Defines a section in a document.

<footer> — Defines a footer for a document.

✍️ b. Formatting Tags

Formatting tags help style and emphasize text content.

<b> — Bold text.

<i> — Italic text.

<u> — Underlined text.

<mark> — Highlights text.

<sup> — Superscript text.

<sub> — Subscript text.

🧱 c. Structural Tags

Structural tags organize the layout of a webpage.

<div> — Defines a block-level container.

<span> — Defines an inline container.

<br> — Inserts a line break.

<hr> — Inserts a horizontal rule.

📝 2. Forms in HTML

Forms allow users to input and submit data to the server.

<form action="submit.php" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <input type="submit" value="Submit">
</form>


Common Form Elements:

<input> — Defines an input field.

<textarea> — Multi-line input field.

<button> — Clickable button.

<select> — Dropdown list.

📊 3. Tables in HTML

Tables are used to organize and display data in rows and columns.

<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>


Table Elements:

<table> — Defines a table.

<tr> — Table row.

<th> — Header cell.

<td> — Data cell.

🖼️ 4. Media in HTML

HTML supports embedding images, audio, videos, and external webpages.

Common Media Tags:

<img> — Displays an image.

<audio> — Embeds audio content.

<video> — Embeds a video file.

<iframe> — Embeds another webpage.

Example:

<img src="image.jpg" alt="Description" width="300">

<audio controls>
  <source src="audio.mp3" type="audio/mp3">
</audio>

⚙️ 5. Head Tag, Meta Tag, and SEO in HTML

The <head> tag contains metadata, such as the page title, character encoding, and SEO-related information.
<meta> tags help improve search engine visibility and responsiveness.

Example:

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn HTML and CSS basics">
</head>


💡 Tip: Always use semantic HTML, add alt text for images, and include meta descriptions to make your web pages accessible and SEO-friendly.