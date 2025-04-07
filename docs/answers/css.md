# CSS (questions prepared)

1. Explain the CSS Box Model. How would you explain the box model and how you would tell the browser in CSS to render your layout in different box models.

The CSS Box Model describes the rectangular boxes generated for elements in the document tree. It consists of content, padding, border, and margin. To change the box model, use box-sizing: content-box (default) or box-sizing: border-box (includes padding and border in the element’s total width and height).

2. What is the difference between display: inline and display: inline-block? What is the difference between a block level element and an inline element? Can you provide examples of each type of element?

display: inline elements do not start on a new line and only take up as much width as necessary. display: inline-block elements are similar but allow setting width and height. Block-level elements (e.g., `<div>`, `<p>`) start on a new line and take up the full width available. Inline elements (e.g., `<span>`, `<a>`) do not start on a new line.

3. Describe tables and floats and how they work and were popular at the beginning.

Tables were used for layout before CSS, providing a grid-like structure but lacking flexibility and semantics. Floats were used to wrap text around images and create multi-column layouts. Both methods are now largely replaced by modern techniques like Flexbox and Grid.

4. What do you know about modern CSS techniques (Flexbox, Grid)? What is the difference between CSS Grid and Flexbox? When would you use one over the other?

Flexbox is a one-dimensional layout system for arranging items in a row or column. CSS Grid is a two-dimensional layout system for creating complex layouts with rows and columns. Use Flexbox for simpler, one-directional layouts, and Grid for more complex, two-dimensional layouts.

5. Have you ever used a grid system, and if so, what do you prefer? How do you implement a grid layout using CSS Grid?

Yes, CSS Grid is my preferred grid system. Implementing a grid layout involves defining a container with display: grid and specifying the grid structure with properties like grid-template-columns and grid-template-rows.

6. Describe BFC (Block Formatting Context) and how it works.

BFC is a part of the visual CSS rendering of a web page. It creates a separate block for formatting, preventing elements from affecting each other. Elements with float, position: absolute, overflow: hidden, or display: inline-block can create a BFC.

7. Explain the difference between display: none and visibility: hidden and opacity: 0.

display: none removes an element from the document flow entirely. visibility: hidden hides an element but it still takes up space. opacity: 0 makes an element invisible but interactive and it still takes up space.

8. Describe z-index and how stacking context is formed.

z-index controls the vertical stacking order of elements. Stacking context is formed by elements with position other than static and a z-index value. Higher z-index values stack elements on top of those with lower values.

9. How does a browser determine which elements an applied CSS selector matches?

The browser matches selectors from right to left, checking each element against the selectors and applying styles from the most specific to the least specific.

10. Describe pseudo-elements and discuss what they are used for.

Pseudo-elements are used to style specific parts of an element. Examples include ::before, ::after, ::first-line, and ::first-letter. They are used to insert content or style specific parts of an element without adding additional HTML.

11. Can you give an example of a pseudo class? Can you provide an example use case for a pseudo class? What does the pseudo-class :root refer to?

Example: :hover changes the style of an element when a user hovers over it. Use case: Changing button color on hover. :root refers to the top-level element in the document, often used for defining global CSS variables.

12. Why do some tags not have pseudo-elements, such as img?

Tags like `<img>` do not have pseudo-elements because pseudo-elements are used to style content that is part of the element, and `<img>` has no inner content.

13. What is the difference between the nth-of-type() and nth-child() selectors?

nth-of-type() selects elements based on their type within a parent, whereas nth-child() selects elements based on their position within a parent regardless of type.

14. What is the difference between a relative, fixed, absolute and statically positioned element?

static: Default positioning, follows normal flow. relative: Positioned relative to its normal position. absolute: Positioned relative to its nearest positioned ancestor. fixed: Positioned relative to the viewport.

15. Describe the Responsive and Adaptive design strategy? What is preferable?

Responsive design uses flexible layouts, media queries, and CSS to adapt to various screen sizes. Adaptive design uses fixed layouts for specific devices. Responsive design is generally preferred for its flexibility across different devices.

16. What is the difference between fixed, fluid and responsive layouts?

Fixed: Uses fixed-width units. Fluid: Uses percentage-based widths to adapt to the viewport. Responsive: Combines fluid layouts with media queries for optimal display on various devices.

17. Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why? [rotate arrow icon up-down, scale element]

translate() is often used for performance reasons, as it doesn't trigger reflow/repaint. It's also useful for animations. Absolute positioning is more straightforward for fixed positioning of elements.

18. Can you explain the difference between px, em and rem as they relate to font sizing?

px is an absolute unit. em is relative to the font size of the parent element. rem is relative to the root element's font size.

19. What is the difference between mobile-first and desktop-first?

Mobile-first design starts with the mobile layout and scales up for larger screens. Desktop-first starts with the desktop layout and scales down. Mobile-first is often preferred for better performance on smaller devices.

20. What is the CSSOM and when it builds?

CSSOM (CSS Object Model) is a tree of style information built alongside the DOM during the rendering process. It represents the CSS rules and their computed values.

20. What are Design Tokens?

Design Tokens are a way to store design-related variables (colors, spacing, typography) in a way that can be used across different platforms and tools.

21. What is the difference between variables in SCSS and CSS Custom Properties? What is the advantage of one or the other?

SCSS variables are preprocessed and cannot change at runtime. CSS Custom Properties (variables) are native to CSS and can be updated dynamically. CSS Custom Properties are more flexible.

22. Why are CSS Logical Properties needed? Do you use them?

CSS Logical Properties allow for more flexible layouts that adapt to different writing modes and directions (e.g., left-to-right vs. right-to-left). They enhance internationalization support.

23. How does inheritance work in CSS?

Inheritance in CSS allows certain properties to be passed down from parent to child elements. Not all properties are inheritable, but those related to text and fonts generally are.

24. What is responsive typography? What techniques do you know and use in your projects?

Responsive typography adjusts font sizes based on viewport size. Techniques include using vw units, media queries, and CSS variables to create scalable, readable text.

25. Tell us about your vision of modern responsive web design: what alternatives exist for media queries. Justify the choice of units of measurement for breakpoints and their values.

Modern responsive web design involves flexible grids (CSS Grid/Flexbox), responsive typography, and dynamic scaling. Alternatives to media queries include container queries. Use em/rem units for breakpoints to ensure scalability with font size changes.

26. Do you create style guides for your projects? What techniques or tools do you use for this?

Yes, I create style guides to maintain consistency. Tools include design systems like Storybook, CSS frameworks, and documentation platforms like GitBook.

27. What is Critical CSS?

Critical CSS involves extracting and inlining the CSS needed for above-the-fold content to improve initial page load performance.

28. What is CSS selector specificity and how does it work? (Optional practice: which of these (https://jsfiddle.net/thisman/9o8s2bdk/) selectors has the highest specificity. What color will be applied to the paragraph?)

CSS specificity determines which styles are applied when multiple selectors match the same element. It is calculated based on the types and numbers of selectors used. The color applied to the paragraph will be determined by the selector with the highest specificity.
https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

29. What is the difference between resetting and normalizing CSS? Which would you choose, and why?

Resetting CSS removes all default browser styles, creating a blank slate. Normalizing CSS makes browsers render elements consistently but keeps useful default styles. Normalizing is preferred for preserving useful defaults while ensuring consistency.

30. What does `* { box-sizing: border-box; }` do? What are its advantages?

- `{ box-sizing: border-box; }` sets all elements to include padding and border in the element’s total width and height. This simplifies sizing and layout, preventing overflow issues.

31. How is clearfix css property useful?

The clearfix hack ensures that an element containing floated children expands to enclose its floated children, preventing layout issues.

```css
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```
