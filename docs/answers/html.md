# HTML (questions prepared)

1. What does a doctype do?

The `<!DOCTYPE>` declaration defines the document type and version of HTML. It helps the browser understand and render the HTML correctly, ensuring consistent rendering across different browsers.

2. What are `data-*` attributes good for?

`data-*` attributes allow you to store custom data on HTML elements. These can be accessed via JavaScript to create more dynamic web pages without needing to use non-standard attributes.

3. Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?

Positioning CSS `<link>`s in the `<head>` ensures that styles are loaded before the content is displayed, avoiding a flash of unstyled content. Placing JS `<script>`s before `</body>` ensures that the HTML is fully loaded before the scripts run, improving page load performance. Exceptions include critical CSS inlining and scripts that need to be in the head for specific reasons (e.g., Google Analytics).

4. Explain the difference between `<section>` and `<div>`.

`<section>` is a semantic HTML5 element used to define sections of content, typically with a heading, that represent a standalone part of the document. `<div>` is a generic container for styling or scripting purposes, without any semantic meaning.

5. Explain the difference between `<div>` and `<span>`.

`<div>` is a block-level element used to group larger chunks of content, whereas `<span>` is an inline element used to group small pieces of content within other elements, primarily for styling purposes.

6. What is the difference between `<canvas>` and `<svg>`?

`<canvas>` is a raster-based graphics element that allows for dynamic, scriptable rendering of 2D shapes and images. `<svg>` is a vector-based markup language for creating static and dynamic graphics that scale without loss of quality.

7. What new HTML tags do you know?

New HTML5 tags include `<article>`, `<aside>`, `<details>`, `<figcaption>`, `<figure>`, `<footer>`, `<header>`, `<main>`, `<mark>`, `<nav>`, `<progress>`, `<section>`, `<summary>`, and `<time>`.

8. What is a canvas display context? What are the types of context for rendering 2D and 3D graphics?

The canvas display context is an object that provides methods and properties for drawing and manipulating graphics on a `<canvas>` element. The types of context are 2d for 2D rendering and webgl for 3D rendering.

9. Are you familiar with styling SVG? How to do it? For example, to change the layer colors of SVG by using external CSS styles in a separate CSS file?

Yes, SVG can be styled with CSS by targeting SVG elements directly or using classes/IDs. For example:
css
Copy code

```css
.svg-layer {
  fill: red;
  stroke: blue;
}
```

And in the SVG file:
html
Copy code

```html
<svg class="svg-layer" ...>...</svg>
```

10. Why would you use a srcset attribute in an image tag?

The srcset attribute allows you to define a set of images for different device widths and resolutions, enabling responsive image loading and optimizing performance.

11. What are empty elements in HTML?

Empty elements are HTML elements that do not have closing tags and cannot have any content inside them. Examples include `<img>`, `<br>`, `<hr>`, `<input>`.

12. How to create an HTML form and add the validation to it?

html
Copy code

```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />
  <input type="submit" value="Submit" />
</form>
```

Use attributes like required, minlength, maxlength, pattern, etc., for validation.

13. How would you make an accessible form?

Use `<label>` elements for each input field.
Ensure each input has a name and id.
Use aria-\* attributes where necessary to improve screen reader interaction.
Provide clear instructions and error messages.

14. What methods of sending form data do you know?

GET and POST methods are the primary methods. GET appends form data to the URL, while POST sends data as a part of the request body.

15. What does an optional closing tag mean?

Some HTML tags do not require a closing tag and can be self-closing or automatically closed by the browser. Examples include `<li>`, `<td>`, and `<p>`.

16. What is the difference between id and class?

id is a unique identifier for a single HTML element, used for specific styling or scripting. class can be applied to multiple elements and is used for grouping similar elements for styling or scripting.

17. What is an iframe and what is it used for?

An iframe is an HTML element that allows you to embed another HTML document within the current document. It is commonly used for embedding videos, maps, or other web pages.

18. What is #shadow-root in the HTML page inspector?

#shadow-root indicates the start of a Shadow DOM, which is a web component feature that encapsulates and isolates a DOM subtree, providing style and behavior encapsulation.

19. Describe the difference between `<script>`, `<script async>`, and `<script defer>`.<br/>
    `<script>`: Standard script tag that blocks HTML parsing until the script is fetched and executed. It's synchronous and can delay page rendering.<br/>
    `<script async>`: Script is fetched in parallel with HTML parsing and executed as soon as it’s available, without waiting for the HTML to finish parsing. This can improve load times but may cause scripts to execute in a non-deterministic order.<br/>
    `<script defer>`: Script is fetched in parallel with HTML parsing but executed only after the HTML is fully parsed. This ensures scripts execute in the order they appear and do not block HTML parsing.<br/><br/>
    In other words: The `async` and `defer` attributes in the `<script>` tag control script loading and execution. `async` allows the script to load and execute as soon as it's available, not blocking page rendering, but scripts may execute out of order. `defer` also loads scripts without blocking, but ensures they execute in order after the HTML document is fully parsed. Use `async` for independent scripts like analytics, and `defer` for scripts that rely on the full DOM or need to run in sequence. The `defer` attribute ensures that scripts are executed in the order they appear in the HTML document and only after the HTML has been completely parsed. This means that all `defer` scripts wait until the HTML parsing is finished before they start executing, and then they execute in the sequence they were included in the document.

20. `<picture>` and `<source>` tags
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
