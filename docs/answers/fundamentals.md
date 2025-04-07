# Fundamentals (questions prepared)

1. Can you explain what happens when you enter a URL into the browser?
   When you enter a URL into the browser, several steps occur:

DNS Lookup: The browser translates the domain name (e.g., www.example.com) into an IP address using DNS.
TCP Connection: The browser establishes a TCP connection with the server using the IP address.
HTTP Request: The browser sends an HTTP request (GET) to the server for the webpage.
Server Response: The server processes the request and sends back an HTTP response with the requested resources (HTML, CSS, JavaScript, images).
Rendering: The browser parses the HTML and builds the DOM (Document Object Model). It also parses CSS to apply styles and JavaScript to add interactivity.
Displaying Content: The browser renders the content and displays the webpage to the user.
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works

2. Describe the difference between a cookie, sessionStorage, localStorage, and IndexedDB.<br/>
   `Cookie`: Small pieces of data stored on the client side, sent with every HTTP request to the server. They have an expiration date and are typically used for session management, user tracking, and storing preferences. Max size: 4000 bytes or 4kB.<br/>
   `sessionStorage`: Stores data for the duration of the page session. Data is cleared when the page session ends (i.e., when the browser or tab is closed). It's specific to each window/tab. Max size 5 MB.<br/>
   `localStorage`: Similar to sessionStorage but persists even after the browser or tab is closed. Data is stored indefinitely until explicitly deleted by the user or the application. Max size 5 MB.<br/>
   `IndexedDB`: A low-level API for storing large amounts of structured data, including files/blobs. It provides a more powerful and complex data storage solution than cookies, sessionStorage, or localStorage. Max size 500 MB or up to 80% of disk space.

3. Describe the process of optimizing a website for performance (e.g., assets/resources, JavaScript, scripts).
   Optimizing a website for performance involves several techniques:

Minimize HTTP Requests: Combine files (CSS, JS), use CSS sprites, and inline small assets.
Minify (obfuscation) and Compress: Minify CSS, JS, and HTML files to reduce their size. Use gzip or Brotli compression for text-based resources.
Optimize Images: Use appropriate formats (JPEG, PNG, WebP), compress images, and use responsive images with srcset.
Load Resources Asynchronously: Use async and defer for JavaScript, and lazy load images and other media.
Reduce JavaScript Execution Time: Split code into smaller bundles, use tree shaking to remove unused code, and optimize loops and functions.
Leverage Browser Caching: Set appropriate cache headers to allow browsers to cache static resources.
Use a Content Delivery Network (CDN): Distribute resources across multiple geographical locations to reduce latency.
Optimize CSS: Reduce the size of CSS files, remove unused CSS, and use critical CSS to inline above-the-fold styles.
Server-Side Optimizations: Optimize server response times, use HTTP/2, and employ techniques like server-side rendering (SSR).

5. What tools would you use to find a performance bug in your code?
   To find performance bugs, you can use:

Browser DevTools: Chrome DevTools, Firefox Developer Tools for profiling and inspecting performance bottlenecks.
Lighthouse: An open-source tool for auditing web page performance, accessibility, SEO, and more.
WebPageTest: A tool for analyzing website performance from multiple locations.
GTmetrix: Provides insights into performance issues and suggestions for improvements.
New Relic: A performance monitoring tool that helps in identifying server-side bottlenecks.
Sentry: For tracking and debugging errors in real-time.

6. What are the approaches to optimizing the performance of a web page?
   Referencing the article, the approaches include:

Minimize Critical Rendering Path: Reduce the number of resources and their size that block the rendering process.
Optimize Resource Delivery: Use HTTP/2, enable server push, and employ resource hints like preload and prefetch.
Use Efficient Coding Practices: Optimize JavaScript, CSS, and image files. Minify and compress assets.
Improve Caching Strategies: Use appropriate caching headers to leverage browser and CDN caching.
Reduce JavaScript Execution Time: Split code into smaller chunks, lazy load non-essential scripts, and use web workers for heavy computations.
Optimize Images: Use responsive images, proper formats, and compression.
Reduce Reflows and Repaints: Optimize animations and dynamic content changes to avoid layout thrashing.

7. What is PRPL pattern & RAIL model?
   PRPL Pattern:

Push critical resources for the initial URL route.
Render initial route as soon as possible.
Pre-cache remaining routes.
Lazy-load and create remaining routes on demand.
PRPL focuses on optimizing the loading performance of web applications, especially for single-page applications (SPAs).
RAIL Model:

Response: Respond to user input in under 100ms.
Animation: Produce a frame in under 16ms.
Idle: Maximize idle time to perform background tasks.
Load: Deliver content and become interactive in under 1 second.
The RAIL model focuses on performance metrics that impact user experience, emphasizing speed and responsiveness.

8. Explain the difference between layout, painting, and compositing.
   Layout (Reflow):

This is the process where the browser calculates the position and size of elements on the page.
It occurs when the DOM is modified and the changes affect the document's structure or element geometry.
Painting:

The process of filling in pixels for visual elements, such as drawing text, colors, borders, and shadows.
It happens after layout, and every visual element is drawn onto layers.
Compositing:

The process where painted layers are combined together into the final image displayed on the screen.
This step occurs after layout and painting, assembling the layers in the correct order.

9. What are the main metrics that measure site performance?
   First Contentful Paint (FCP): Time from navigation to the first contentful paint.
   Largest Contentful Paint (LCP): Time taken for the largest content element to load.
   First Input Delay (FID): Delay between the first user interaction and the browser's response.
   Cumulative Layout Shift (CLS): Measures the visual stability by tracking unexpected layout shifts.
   Time to Interactive (TTI): Time until the page becomes fully interactive.
   Total Blocking Time (TBT): Time the main thread is blocked during page load.

10. What do you know about Core Web Vitals?
    Core Web Vitals are specific metrics identified by Google to measure user experience on the web:

Largest Contentful Paint (LCP): Measures loading performance. Ideal LCP should occur within 2.5 seconds.
First Input Delay (FID): Measures interactivity. Ideal FID should be less than 100 milliseconds.
Cumulative Layout Shift (CLS): Measures visual stability. Ideal CLS should be less than 0.1.

11. What is the difference between laboratory and field measurements of performance?
    Laboratory Measurements:

Conducted in a controlled environment using tools like Lighthouse or WebPageTest.
They provide consistent, reproducible results but may not reflect real-world conditions.
Field Measurements:

Collected from real users interacting with the site, using tools like Google Analytics or the Chrome User Experience Report (CrUX).
They provide insights into actual user experiences but can vary due to diverse environments and user conditions.

12. What is Cumulative Layout Shift and how to improve its value?
    Cumulative Layout Shift (CLS):

Measures the sum of all unexpected layout shifts that occur during the entire lifespan of the page.
Layout shifts can be caused by images without dimensions, ads or embeds without dimensions, dynamically injected content, web fonts causing FOIT/FOUT, and actions waiting for a network response before updating DOM.
Improving CLS:

Specify size attributes for images and video elements.
Reserve space for ads and embeds.
Avoid inserting content above existing content.
Use transform animations instead of properties that trigger layout changes.

13. How do you implement lazy loading for images and other resources to optimize loading time?
    Lazy Loading for Images:

Use the loading="lazy" attribute on `<img>` tags.
Example: `<img src="image.jpg" loading="lazy" alt="description">`
Intersection Observer API:

A JavaScript API to detect when elements are in the viewport.
Example:
javascript
Copy code

```js
const lazyImages = document.querySelectorAll("img.lazy");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach((img) => {
  observer.observe(img);
});
```

Dynamic Imports:

For other resources, use dynamic import() to load modules on demand.
Example:
javascript
Copy code

```js
if (condition) {
  import("./module.js").then((module) => {
    // Use the module
  });
}
```

14. Are you familiar with drawing up a performance budget? How do you understand this concept?
    Performance Budget:

A set of constraints that help teams ensure a website meets performance goals.
It typically includes metrics like page load time, size of HTML/CSS/JS files, number of HTTP requests, and critical rendering path metrics.
Understanding:

Establishing a performance budget involves defining acceptable limits for these metrics to maintain a good user experience.
Example: Limiting total page weight to 1MB, ensuring FCP under 1 second, and limiting the number of third-party scripts.

15. What is DOM?
    DOM (Document Object Model):
    A programming interface for web documents.
    Represents the page so that programs can change the document structure, style, and content.
    The DOM is an object-oriented representation of the web page, which can be modified with JavaScript to create dynamic content.

16. Why manipulations with DOM is so heavy and expensive?
    Recalculations:
    Manipulations often trigger reflows (layout recalculations) and repaints, which are computationally expensive.
    Reflows:
    A reflow recalculates the positions and sizes of elements, affecting the entire render tree. It can be triggered by adding, removing, or changing DOM elements.
    Repaints:
    Repaints are triggered by visual changes not affecting layout, such as changing a background color. Reflows often trigger repaints.
    Minimizing Impact:
    Batch DOM changes, use document fragments, and avoid layout thrashing (reading and writing to the DOM repeatedly).
    https://web.dev/articles/rendering-performance
    https://performance.shopify.com/blogs/blog/how-layout-position-impacts-three-big-web-performance-levers

17. What are some ways you may improve your website's scrolling performance?
    `Throttling` and `Debouncing`:

Use `throttling` to limit the number of times an event handler is called during scrolling.
Use `debouncing` to delay execution until a certain time has passed since the last event.
Example with `throttling`:
javascript
Copy code
window.addEventListener('scroll', throttle(handleScroll, 100));
Virtualization:

Render only the visible portion of a large list and a small buffer around it.
Use libraries like React Virtualized for React applications.
CSS Optimization:

Use will-change property to inform the browser of what will change, allowing it to optimize rendering.
Avoid triggering layout changes during scroll.

18. What is Flash of Unstyled Content? How do you avoid FOUC?
    Flash of Unstyled Content (FOUC):

A brief appearance of unstyled HTML content before the CSS is fully loaded and applied.
Avoiding FOUC:

Ensure CSS is loaded before rendering content. Place `<link>` tags for CSS in the `<head>` section.
Use critical CSS: inline essential CSS for above-the-fold content.
Implement a loading animation or placeholder until styles are fully applied.

19. In what order are user-defined events processed in the DOM (click, mouseover, etc.)? FIFO or LIFO?
    FIFO (First In, First Out):
    Events are processed in the order they are added to the event queue.
    This ensures that the first event to be triggered is the first to be processed.

20. What is a CDN and what is the benefit of using one?
    Content Delivery Network (CDN):

A network of geographically distributed servers that cache and deliver web content to users based on their location.
Benefits:

Improved Load Times: Reduces latency by serving content from the nearest server.
Increased Reliability: Distributes traffic to prevent server overloads.
Enhanced Security: Provides DDoS protection and can enforce security policies.
Scalability: Handles large volumes of traffic efficiently.

21. What is domain pre-fetching and how does it help with performance?
    Domain Pre-fetching:

A technique where the browser is instructed to pre-resolve DNS lookups for a specified domain.
It helps with performance by reducing the DNS resolution time for future requests to that domain.
Usage:

html
Copy code

`<link rel="dns-prefetch" href="//example.com">`

22. Preload, preconnect, and prefetch:
    Preload (Critical CSS, fonts, or JavaScript):

Tells the browser to download and cache a resource as soon as possible
Used for critical resources needed for the current page
Example: `<link rel="preload" href="style.css" as="style">`

Preconnect (Third-party APIs, CDNs):

Establishes early connections to important third-party origins
Reduces time for DNS lookups, redirects, and TCP handshakes
Example: `<link rel="preconnect" href="https://example.com">`

Prefetch (Resources for the next page in a user flow):

Suggests resources that might be needed for future navigation
Lower priority than preload, used for future pages
Example: `<link rel="prefetch" href="page2.html">`

22. What is the impact of network latency on web performance?
    Network Latency:

The delay between a request being sent from the client and the response being received from the server.
High latency can significantly slow down page load times, especially for resources that are not cached or are fetched from distant servers.
Mitigation:

Use CDNs, optimize server response times, minimize HTTP requests, and leverage HTTP/2 or HTTP/3 for multiplexing.

23. What are the differences between HTTP/1.1, HTTP/2, and HTTP/3?
    HTTP/1.1:

Text-based protocol with a single request-response per connection.
Connection keep-alive, chunked transfer encoding, and pipelining (rarely used due to head-of-line blocking).
HTTP/2:

Binary protocol with multiplexing, allowing multiple requests/responses over a single connection.
Header compression (HPACK) and server push capabilities.
HTTP/3:

Based on QUIC, a transport layer protocol using UDP instead of TCP.
Eliminates head-of-line blocking at the transport layer, improves performance and reliability.

24. How do you handle cross-origin resource sharing (CORS)?
    CORS (Cross-Origin Resource Sharing):

A mechanism that allows resources on a web page to be requested from another domain outside the domain from which the resource originated.
(A mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
Addresses the security issue where browsers block cross-origin HTTP requests initiated from scripts.)
Handling CORS:

On the server, set the appropriate CORS headers.
Example:
http
Copy code
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Headers: Content-Type

25. What is a Service Worker and what can it be used for?
    Service Worker:

A script that runs in the background, separate from the web page, enabling features like offline capabilities, push notifications, and background sync.
Usage:

Offline Caching: Intercepts network requests and serves cached resources when offline.
Push Notifications: Receives push messages from a server.
Background Sync: Delays actions until the user has stable connectivity.

26. Web workers vs Service workers vs Worklets

Web Workers:

Used for running scripts in background threads.
They don't have access to the DOM but can perform tasks like data processing.
Example: new Worker('worker.js').

Service Workers:

Act as a proxy between web applications and the network.
Enable features like offline caching, push notifications, and background sync.
Example:
javascript
Copy code

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
```

Worklets:

Lightweight scripts that allow low-level control over CSS (CSS Paint API) or audio processing (AudioWorklet).
Execute in a controlled environment with limited capabilities.
Example: CSS.paintWorklet.addModule('worklet.js');.

1.  PWA (workbox)
    Workbox:
    A set of libraries and Node modules that make it easy to cache assets and take full advantage of features used to build progressive web apps (PWAs).
    Simplifies service worker development.
    Example using Workbox:
    javascript
    Copy code

```js
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

registerRoute(
  ({ request }) => request.destination === "image",
  new StaleWhileRevalidate({
    cacheName: "images",
  })
);
```

28. Can you describe some SEO best practices or techniques you have used lately?
    SEO Best Practices:
    Title Tags & Meta Descriptions: Use unique and descriptive titles and meta descriptions.
    Keywords: Include relevant keywords naturally in content, headings, and meta tags.
    Mobile Optimization: Ensure the site is mobile-friendly.
    Page Speed: Optimize images, minify CSS/JS, and leverage browser caching.
    Internal Linking: Use internal links to help with site navigation and SEO.
    Alt Text for Images: Provide descriptive alt text for images.
    Structured Data: Implement schema markup to help search engines understand content.

29. What is microformats?
    Microformats:
    Simple conventions used to add semantic meaning to HTML content.
    Make web content more accessible and machine-readable by adding attributes like class and rel.
    Example:
    html
    Copy code

```html
<div class="h-card">
  <span class="p-name">John Doe</span>
  <a class="u-url" href="http://johndoe.com">johndoe.com</a>
</div>
```

30. What is SEO? What should a developer pay attention to in order to ensure good SEO performance in the future?
    SEO (Search Engine Optimization):
    The practice of improving the ranking of a website on search engines.
    Key Focus Areas:
    Content Quality: High-quality, relevant content that answers user queries.
    Technical SEO: Proper use of HTML tags, structured data, and sitemap.
    Mobile-Friendliness: Responsive design and fast loading times.
    Page Speed: Optimize load times using various techniques (minifying resources, using CDNs).
    Security: Ensure the site is secure (use HTTPS).
    User Experience: Ensure the site is easy to navigate and provides a good user experience.

31. Can you describe the difference between progressive enhancement and graceful degradation?

Progressive Enhancement:

Starts with a basic level of user experience and adds enhancements for browsers that support advanced features.
Focuses on content first, then presentation and behavior.
Example: Building a form with basic HTML, then adding CSS for styling and JavaScript for advanced interactions.

Graceful Degradation:

Designs the full-featured experience first and then ensures it degrades gracefully for less capable browsers.
Focuses on providing a good user experience even if some advanced features are not supported.

1.  Describe the difference between SSR and CSR. Discuss the pros and cons. Are you familiar with static rendering? Rehydration?
    SSR (Server-Side Rendering):

HTML is rendered on the server and sent to the client.
Pros:
Better initial load performance.
Improved SEO.
Faster time-to-content.
Cons:
Higher server load.
Complex implementation.
CSR (Client-Side Rendering):

HTML is rendered on the client using JavaScript.
Pros:
Reduced server load.
Richer, interactive experiences.
Easier to scale.
Cons:
Slower initial load time.
Potential SEO challenges without pre-rendering or dynamic rendering.
Static Rendering:

Pre-renders HTML at build time.
Suitable for content that doesn’t change often.
Example: Static site generators like Gatsby or Next.js.
Rehydration:

Process of attaching event listeners and JavaScript to a pre-rendered HTML to make it interactive.
Used in SSR to make the static HTML interactive once loaded on the client.

33. What are Web Accessibility standards and how do you implement them?
    Web Accessibility Standards:
    Guidelines ensuring that websites are usable by people with disabilities.
    WCAG (Web Content Accessibility Guidelines): Provides recommendations for making web content more accessible.
    Implementation:
    Semantic HTML: Use proper HTML tags.
    ARIA (Accessible Rich Internet Applications): Use ARIA roles and attributes.
    Keyboard Navigation: Ensure the site can be navigated using the keyboard.
    Alt Text: Provide descriptive alt text for images.
    Contrast Ratios: Ensure sufficient color contrast.
    Forms: Use labels and fieldsets.

34. Explain what ARIA and screen readers are, and how to make a website accessible.
    ARIA (Accessible Rich Internet Applications):

A set of attributes that make web content more accessible by providing additional context to screen readers.
Example: `<button aria-label="Close">X</button>`.
Screen Readers:

Software that reads the content of the screen aloud to users with visual impairments.
Making Websites Accessible:
Use semantic HTML and ARIA attributes.
Ensure all interactive elements are focusable.
Provide text alternatives for non-text content.
Ensure logical focus order and keyboard navigation.

35. What are HTTP methods (GET, POST, PUT, DELETE)? List all HTTP methods that you know, and explain them. And HTTP statuses (200, 300, 400, 404, 500).
    HTTP Methods:

GET: Retrieve data from the server.
POST: Send data to the server to create a resource.
PUT: Update or replace an existing resource.
DELETE: Delete a resource.
HEAD: Retrieve headers for a resource, without the body.
OPTIONS: Describe the communication options for the target resource.
PATCH: Apply partial modifications to a resource.
TRACE: Performs a message loop-back test
CONNECT: Establishes a tunnel to the server

HTTP Status Codes:
1xx - Informational
100 Continue
101 Switching Protocols

2xx - Success
200 OK
201 Created
204 No Content

3xx - Redirection
301 Moved Permanently
302 Found (temporary redirect)
304 Not Modified

4xx - Client Errors
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
405 Method Not Allowed
429 Too Many Requests

5xx - Server Errors
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout

36. What is HTTP and HTTPS, and what is the difference between them?
    HTTP (HyperText Transfer Protocol):

The protocol used for transmitting web pages over the internet.
Not secure, data is transmitted in plain text.
HTTPS (HyperText Transfer Protocol Secure):

Secure version of HTTP using SSL/TLS for encryption.
Protects data integrity and confidentiality by encrypting the data transmitted between the client and server.
Provides authentication of the website.

37. TLS/SSL, handshake protocols, TCP/UDP, HTTP, DHCP, DNS

TLS/SSL (Transport Layer Security / Secure Sockets Layer):

Cryptographic protocols for secure communication over a network.
[How does SSL/TLS work?](<https://www.cloudflare.com/learning/ssl/what-is-ssl/#:~:text=Secure%20Sockets%20Layer%20(SSL)%20is,Transport%20Layer%20Security%20(TLS)>).

TCP/UDP (Transmission Control Protocol / User Datagram Protocol):

TCP: Connection-oriented protocol ensuring reliable data transmission.
UDP: Connectionless protocol used for faster, less reliable transmissions.

HTTP (HyperText Transfer Protocol):

Protocol for transferring hypertext requests and information on the internet.

DHCP (Dynamic Host Configuration Protocol):

Protocol for assigning IP addresses and other network configuration to devices on a network.

DNS (Domain Name System):

System for translating domain names into IP addresses.

38. Interceptor
    Interceptor:
    A function that intercepts HTTP requests or responses before they are handled by the application.
    Used in frameworks like Angular or libraries like Axios.
    Example in Axios:
    javascript
    Copy code

```js
axios.interceptors.request.use(
  (config) => {
    // Modify request config
    return config;
  },
  (error) => {
    // Handle error
    return Promise.reject(error);
  }
);
```

39. Explain how you would implement error handling for network requests.
    Error Handling:
    Try-Catch: Use try-catch blocks to handle exceptions.
    Status Codes: Check the response status code to determine if the request was successful.
    Retries: Implement retries for transient errors.
    Fallbacks: Provide fallback options in case of failures.
    Example:
    javascript
    Copy code

    ```js
    async function fetchData(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Fetch error:", error);
        // Handle error or retry logic
      }
    }
    ```

40. What is REST?
    REST (Representational State Transfer):
    An architectural style for designing networked applications.
    Uses stateless, client-server communication, and standard HTTP methods (GET, POST, PUT, DELETE).
    Focuses on resources, identified by URIs.
    Example: A REST API for managing users might include endpoints like `/users`, `/users/{id}`.

41. What is the difference between PUT and PATCH methods in REST?
    PUT:

Used to update a resource or create it if it does not exist.
Sends the complete resource data.
Idempotent: Multiple identical requests will result in the same state.
Example:
http
Copy code
```
PUT /users/1
`{
"name": "John Doe",
"email": "john.doe@example.com"
}`
PATCH:

Used to apply partial updates to a resource.
Sends only the fields that need to be updated.
Not necessarily idempotent.
Example:
http
Copy code
PATCH /users/1
`{
"email": "john.doe@newdomain.com"
}`
```

42. What is the difference between GraphQL vs REST?

GraphQL:

A query language for APIs that allows clients to request exactly the data they need.
Single endpoint for all queries.
Reduces over-fetching and under-fetching of data.
Example Query:
graphql
Copy code

```{
user(id: 1) {
name
email
}
}```

REST:

Architectural style with multiple endpoints for different resources.
Fixed data structure defined by the server.
Can result in over-fetching or multiple requests to gather all needed data.
Example Endpoint: `/users/1`

43. What is the difference between GraphQL Apollo vs GraphQL Relay?
    Apollo:

A comprehensive GraphQL ecosystem including a client and server implementation.
Focuses on ease of use and developer experience.
Supports caching, error handling, and other features out-of-the-box.
Relay:

A JavaScript framework for building data-driven React applications with GraphQL.
Developed by Facebook, it focuses on performance and scalability.
Uses a unique approach to manage data fetching and updating.

44. What is GraphQL fragment?
    GraphQL Fragment:
    A reusable unit of a GraphQL query.
    Allows for splitting complex queries into smaller, reusable parts.
    Example:
    graphql
    Copy code

```js
fragment userFields on User {
id
name
email
}

query {
user(id: 1) {
...userFields
}
}
```

45. What are the differences between Websockets (SOAP and WAMP), Long-Polling, and Server-Sent Events?

Websockets:

Full-duplex communication channel over a single TCP connection.
Real-time, bidirectional communication.
Example Use: Chat applications.

Long-Polling:

Client makes a request and server holds the request open until new data is available.
Simulates real-time communication by repeatedly polling the server.
Example Use: Notifications.

Server-Sent Events (SSE):

Server can push updates to the client over a single HTTP connection.
Unidirectional: Server to client.
Example Use: Live scores.

46. What is fetch vs xhr, and what is the difference?

fetch:

Modern, promise-based API for making HTTP requests.
Simpler syntax and better support for async/await.
Example:
javascript
Copy code
```
fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data));
```

xhr (XMLHttpRequest):

Older, callback-based API for making HTTP requests.
More verbose and less intuitive.

Example:
javascript
Copy code

```
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.onload = () => console.log(xhr.responseText);
xhr.send();
```

47. What is abort controller?
    AbortController:
    A way to abort a fetch request.
    Provides a signal that can be passed to a fetch request to cancel it.
    Example:
    javascript
    Copy code

```js
const controller = new AbortController();
const signal = controller.signal;

fetch("https://api.example.com/data", { signal })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.error("Fetch error:", error);
    }
  });

controller.abort(); // Aborts the fetch request
```

48. What is BAAS (Backend as a Service)?
    BAAS (Backend as a Service):
    Cloud service model that provides backend functionalities like database, authentication, and file storage.
    Enables developers to focus on frontend development.
    Examples: Firebase, AWS Amplify.

49. What is BFF (Backend for Frontend)?
    BFF (Backend for Frontend):
    A design pattern where each frontend application has a corresponding backend service.
    Tailors backend services to the specific needs of the frontend.
    Improves separation of concerns and optimizes communication between frontend and backend.

50. Can you explain any common techniques or recent issues solved in regards to front-end security (.env, CORS, CSP headers, HTML sanitizer)?
    Common Front-End Security Techniques:
    Environment Variables: Store sensitive information like API keys in .env files.
    CORS (Cross-Origin Resource Sharing): Controls how resources on a web page can be requested from another domain.
    CSP (Content Security Policy) Headers: Mitigates cross-site scripting (XSS) attacks by controlling the resources the user agent is allowed to load.
    HTML Sanitizer: Removes potentially harmful content from user input to prevent XSS attacks.

51. How to manage the secrets in your project?
    Managing Secrets:
    Environment Variables: Store secrets in environment variables, not in source code.
    Secret Management Services: Use services like AWS Secrets Manager, Azure Key Vault, or HashiCorp Vault.
    Configuration Files: Store secrets in configuration files that are not checked into version control.
    Environment-Specific Configs: Use different configurations for development, staging, and production environments.

52. What is Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) attacks, and ways to protect from them?
    XSS (Cross-Site Scripting):

Injection of malicious scripts into web pages viewed by other users.
Protection:
Validate and sanitize user inputs.
Use Content Security Policy (CSP).
Escape HTML, JavaScript, and CSS outputs.
CSRF (Cross-Site Request Forgery):

Tricks a user into executing unwanted actions on a web application where they are authenticated.
Protection:
Use anti-CSRF tokens.
Implement SameSite cookies.
Validate HTTP headers and referrer.

53. Describe your perfect React application stack.
    Perfect React Application Stack:
    Frontend:
    React (UI library)
    Redux or Context API (state management)
    React Router (routing)
    Styled-components or CSS Modules (styling)
    Backend:
    Node.js with Express (server)
    GraphQL or REST API (API layer)
    MongoDB or PostgreSQL (database)
    Tooling:
    Webpack or Vite (module bundler)
    Babel (JavaScript compiler)
    ESLint (linting)
    Prettier (code formatting)
    Jest (testing)
    Deployment:
    Docker (containerization)
    CI/CD pipeline with GitHub Actions or Jenkins
    Hosting on AWS, Vercel, or Netlify

54. What you choose CSS pre-processors or CSS-in-JS, and why?
    CSS Pre-processors (e.g., SASS, LESS):

Pros:
Rich feature set (variables, nesting, mixins).
Mature ecosystem.
Cons:
Global scope can lead to style conflicts.
Requires additional build steps.
Usage: When working on large-scale projects where a mature CSS methodology (BEM, OOCSS) is preferred.
CSS-in-JS (e.g., Styled-components, Emotion):

Pros:
Scoped styles by default.
Seamless integration with JavaScript and React.
Dynamic styling capabilities.
Cons:
May increase the bundle size.
Learning curve for developers used to traditional CSS.
Usage: When building modern React applications that benefit from scoped and dynamic styling.

56. Can we create mixins in CSS-in-JS?
    Mixins in CSS-in-JS:
    Yes, mixins can be created in CSS-in-JS libraries like Styled-components and Emotion.
    Example using Styled-components:
    javascript
    Copy code
    ```
    const mixin = css`  color: palevioletred;
font-size: 16px;`;

const StyledButton = styled.button`  ${mixin};
  background: papayawhip;`;
  ```

57. What is an Isomorphic application?
    Isomorphic (Universal) Application:
    A web application that runs the same code on both the client and the server.
    Benefits include improved SEO, faster initial load times, and better performance.
    Example: Using Next.js with React to render pages on the server and then hydrate them on the client.

58. What is centrifuge?
    Centrifuge:
    A real-time messaging library that provides a scalable solution for delivering messages to connected clients.
    Typically used for building applications that require real-time updates, such as chat applications, live notifications, and online gaming.

59. What is sentry?
    Sentry:
    An error tracking and monitoring tool that helps developers identify and fix issues in real-time.
    Provides detailed error reports, including stack traces, context, and user actions leading up to the error.
    Supports multiple platforms and integrates with popular development tools.

60. What is Grafana and Kibana?
    Grafana:

An open-source platform for monitoring and observability.
Allows users to visualize metrics from various data sources (e.g., Prometheus, InfluxDB) through customizable dashboards.
Kibana:

An open-source data visualization tool designed to work with Elasticsearch.
Provides powerful search and analytics capabilities, including creating visualizations and dashboards from log data.

61. What is DTO and class-validator?

    DTO (Data Transfer Object):

An object that carries data between processes to reduce the number of method calls.
Typically used to encapsulate data and send it from one subsystem of an application to another.

class-validator:

A library for validating objects in Node.js and TypeScript.
Allows for declarative validation by adding decorators to class properties.
Example:
typescript
Copy code

```js
import { IsEmail, IsNotEmpty } from "class-validator";

class UserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
```

62. What are signals, how are they implemented in different frameworks?
    Signals:
    A mechanism for broadcasting events and changes in state across different parts of an application.
    In various frameworks:
    React: useState and useEffect hooks for state management and side effects.
    Angular: EventEmitter and RxJS for handling events and observables.
    Vue.js: reactive and ref APIs for reactivity and state management.

63. What is Web Components?
    Web Components:
    A suite of web platform APIs that allow developers to create reusable and encapsulated HTML tags.
    Includes three main specifications:
    Custom Elements: Define new HTML elements.
    Shadow DOM: Encapsulate styles and markup to prevent them from affecting the rest of the document.
    HTML Templates: Define chunks of markup that are inert until instantiated.

64. What is middleware in Express.js?
    Middleware in Express.js:
    Functions that execute during the lifecycle of a request to the Express server.
    Used for tasks such as logging, parsing request bodies, authentication, and error handling.
    Example:
    javascript
    Copy code

```js
const express = require("express");
const app = express();

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route handler
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

65. Relational vs non-relational DB (mySQL/noSQL, PostgreSQL vs MongoDB, Redis)
    Relational Databases (RDBMS):

Examples: MySQL, PostgreSQL.
Use structured query language (SQL).
Store data in tables with rows and columns.
Support ACID transactions.
Suitable for structured data and complex queries.
Non-relational Databases (NoSQL):

Examples: MongoDB (document-based), Redis (key-value store).
Flexible schema design.
Horizontal scaling.
Suitable for unstructured data and large-scale distributed data.
Types:
Document-based: MongoDB, CouchDB.
Key-value stores: Redis, DynamoDB.
Column-family stores: Cassandra, HBase.
Graph databases: Neo4j.

66. Strong profiling and debugging knowledge (Chrome DevTools, React DevTools, Redux DevTools)
    Chrome DevTools:

Set of web development tools built into Google Chrome.
Features: Elements inspection, console for debugging, network activity analysis, performance profiling, memory inspection.
React DevTools:

Browser extension for debugging React applications.
Features: Component hierarchy inspection, state and props monitoring, performance profiling.
Redux DevTools:

Extension for debugging Redux state changes.
Features: State inspection, action history, time-travel debugging, and middleware logging.

67. Abstract Syntax Tree (AST)
    Abstract Syntax Tree (AST):
    A tree representation of the abstract syntactic structure of source code.
    Nodes represent constructs in the source code.
    Used by compilers and interpreters for syntax analysis, code transformation, and optimization.
    Example: Parsing JavaScript code let x = 10; into an AST with nodes for variable declaration, identifier, and literal.

68. Authorization. JWT
    JWT (JSON Web Token):
    A compact, URL-safe token format used for securely transmitting information between parties.
    Consists of three parts: Header, Payload, and Signature.
    Header: Metadata about the token.
    Payload: Claims, such as user information and permissions.
    Signature: Ensures the token has not been tampered with.
    Example:
    json
    Copy code
    ```json
    {
      "header": {
      "alg": "HS256",
      "typ": "JWT"
      },
      "payload": {
      "sub": "1234567890",
      "name": "John Doe",
      "iat": 1516239022
      },
      "signature": "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      }
      ```

69. Design patterns
    Design Patterns:
    Creational Patterns: Deal with object creation.
    Singleton: Ensures a class has only one instance.
    Factory: Creates objects without specifying the exact class.
    Structural Patterns: Deal with object composition.
    Adapter: Allows incompatible interfaces to work together.
    Decorator: Adds behavior to objects dynamically.
    Behavioral Patterns: Deal with object interaction.
    Observer: Defines a subscription mechanism for notifying objects.
    Strategy: Defines a family of algorithms and makes them interchangeable.

70. GoF (Gang of Four) patterns
    Gang of Four (GoF) Patterns:
    Introduced in the book "Design Patterns: Elements of Reusable Object-Oriented Software" by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides.
    Consist of 23 design patterns categorized into Creational, Structural, and Behavioral.

71. What is MVC, MVP, MVVM, etc?
    MVC (Model-View-Controller):

Separates application logic into three interconnected components.
Model: Manages data (Data).
View: Displays data (UI).
Controller: Handles user input and updates the model (app logic).

MVP (Model-View-Presenter):
Similar to MVC but with a Presenter instead of a Controller.
Presenter: Handles all UI logic and updates the View.

MVVM (Model-View-ViewModel):
Separates the development of the graphical user interface.
ViewModel: Manages the state of the view, interacts with the model, and handles view logic.

72. What are the drawbacks of MVW pattern?
    Drawbacks of MVW (Model-View-Whatever) Pattern:
    Increased complexity with large applications.
    Tight coupling between components can lead to maintenance difficulties.
    Potential for performance issues due to frequent data binding and updates.
    Steeper learning curve for developers unfamiliar with the pattern.

73. What is DDD (Domain Driven Design), Event Sourcing + CQRS?
    DDD (Domain Driven Design):

A software development approach focusing on modeling complex business domains.
Uses concepts like Entities, Value Objects, Aggregates, and Domain Events.
Event Sourcing:

Storing the state of a system as a sequence of events.
Allows for rebuilding the state by replaying events.
CQRS (Command Query Responsibility Segregation):

Separates the read and write operations in a system.
Commands: Perform write operations.
Queries: Perform read operations.

74. Web application architecture (event-driven architecture/application etc)
    Event-Driven Architecture:

Decouples components by using events to trigger actions.
Improves scalability and flexibility.
Example: Microservices communicating via events.
Monolithic Architecture:

A single-tiered software application where different components are interconnected and interdependent.
Simple to develop but can become unwieldy as the application grows.
Microservices Architecture:

A collection of small, independent services that communicate over well-defined APIs.
Enhances scalability and allows for independent deployment.

75. What is Onion Architecture, module-based, atomic design, feature-sliced design/FSD?
    Onion Architecture:

Layers structured around the core domain logic.
Core: Domain model.
Inner Layers: Use cases and application services.
Outer Layers: Interfaces, infrastructure, and external systems.
Module-Based Design:

Breaks down the application into distinct, interchangeable modules.
Enhances reusability and maintainability.
Atomic Design:

A methodology for creating design systems.
Atoms: Basic building blocks (buttons, inputs).
Molecules: Combinations of atoms (form groups).
Organisms: Groups of molecules (header, footer).
Templates and Pages: Structures of organisms.
Feature-Sliced Design (FSD):

Organizes codebase by features instead of technical layers.
Improves code modularity and facilitates team collaboration.

76. What is TOGAF?
    TOGAF (The Open Group Architecture Framework) is a framework for enterprise architecture that provides a comprehensive approach for designing, planning, implementing, and governing enterprise information architecture. It helps organizations align their business goals with IT infrastructure and improve efficiency.

77. Describe the Design/Architecture (Antipatterns)?
    Design/Architecture antipatterns are common but flawed responses to recurring design problems. Examples include:

God Object: A class that knows too much or does too much.
Spaghetti Code: Code with a complex and tangled control structure.
Golden Hammer: Using a familiar tool or technology for all problems.
Lava Flow: Retaining poorly documented and understood code that no one dares to change.

78. What is Code smells?
    Code smells are indicators of potential issues in the code that may not be bugs but suggest problems that could lead to bugs or harder maintenance. Examples include duplicated code, long methods, large classes, and poor naming conventions.

79. What is DRY, KISS, YAGNI?
    DRY (Don't Repeat Yourself): Avoid code duplication; every piece of knowledge must have a single, unambiguous representation.
    KISS (Keep It Simple, Stupid): Systems should be as simple as possible but no simpler; avoid unnecessary complexity.
    YAGNI (You Aren't Gonna Need It): Don't add functionality until it is necessary; avoid over-engineering.

80. What is `SOLID`?
    `SOLID` is a set of principles for designing maintainable and extendable object-oriented software:

`S` - Single Responsibility Principle (SRP): A class should have one, and only one, reason to change.<br/>
`O` - Open/Closed Principle (OCP): Software entities should be open for extension but closed for modification.<br/>
`L` - Liskov Substitution Principle (LSP): Subtypes must be substitutable for their base types without altering the correctness of the program.<br/>
`I` - Interface Segregation Principle (ISP): Clients should not be forced to depend on interfaces they do not use.<br/>
`D` - Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules. Both should depend on abstractions.

`SOLID in React`: Але, S - які тут питання можуть бути? Розповісти, що в реакті є компоненти? О - пропси у компонентів, відкритість до змін. L - компоненти можна підміняти, якщо вони реалізовують єдиний інтерфейс. І - точно те саме, декомпозируй, подрібнюй компоненти, інтерфейси, моделі як вважаєш за потрібним. D - це трохи складніше, але так само можно робити щоб компоненти залежали тільки від абстракцій щоб потім можна було їми легко жанглювати.

81. Dependency inversion vs inversion of control vs dependency injection
    `Dependency Inversion`: A principle where high-level modules should depend on abstractions, not on low-level modules.<br/>
    `Inversion of Control (IoC)`: A broader concept where the control of objects or portions of a program is transferred to a container or framework.<br/>
    `Dependency Injection (DI)` - passing dependencies to a class rather than creating them internally. DI is a specific form of IoC. Dependencies includes:

    - Services: External services like a database service, logging service, or an API client.
    - Objects: Instances of other classes that a class depends on to perform its tasks.
    - Configurations: Configuration settings or parameters that the class requires.
    - Libraries: Specific instances of libraries or tools that the class uses.

82. SOLID vs GRASP
    SOLID: A set of principles focused on creating well-structured and maintainable object-oriented code.
    GRASP (General Responsibility Assignment Software Patterns): A set of principles for assigning responsibilities to objects, emphasizing high cohesion and low coupling. Examples include Information Expert, Creator, and Controller.

83. What is the difference between inheritance and composition? What do you prefer? Why?
    Inheritance: A mechanism where a new class inherits properties and behavior from an existing class.
    Composition: A design principle where a class is composed of one or more objects from other classes, promoting code reuse and flexibility.
    Preference: Composition is generally preferred because it provides greater flexibility and adheres to the principle of favoring composition over inheritance. It allows for easier maintenance and avoids the pitfalls of deep inheritance hierarchies.

84. What is CSR, SSR, SSG, and what the difference?
    CSR (Client-Side Rendering): Rendering occurs on the client side, typically using JavaScript frameworks like React or Angular. Content is fetched and rendered dynamically.
    SSR (Server-Side Rendering): Rendering occurs on the server, and the fully rendered HTML is sent to the client. This approach improves SEO and initial load performance.
    SSG (Static Site Generation): Pages are pre-rendered at build time into static HTML. This approach combines the benefits of fast load times and SEO friendliness.
    ISR (Incremental Static Regeneration): ISR allows you to update static content after the initial build without rebuilding the entire site. It combines the benefits of SSG by pre-rendering pages at build time and the flexibility of updating content on-demand. This is particularly useful for pages that change frequently but not on every request, providing a balance between static content's speed and dynamic content's flexibility.
    Difference: CSR renders content in the browser, SSR renders content on the server, and SSG generates static HTML files during the build process.

85. What is event bus?
    An event bus is a design pattern that allows different components or services to communicate with each other through events. It decouples the sender and receiver, facilitating a more modular and scalable architecture. In React, libraries like Redux or context API can implement an event bus pattern for state management and component communication .

86. Tell us about Observer, Pub/Sub patterns. What is the difference between them? Give examples of the implementation of these patterns in known frameworks/libraries/browser APIs.
    Observer Pattern: Objects (observers) subscribe to another object (subject) to get notified when the subject's state changes. Example: JavaScript's EventTarget API.
    Pub/Sub Pattern: A messaging pattern where senders (publishers) send messages to a central broker, and receivers (subscribers) get messages from the broker based on topic subscriptions. Example: Node.js EventEmitter, Redux.
    Difference: In the observer pattern, subjects maintain a list of observers and notify them directly, while in the pub/sub pattern, a broker mediates the communication between publishers and subscribers.

87. What is introspection? What is the difference between introspection and reflection?
    Introspection: The ability of a program to examine the type or properties of an object at runtime.
    Reflection: A broader concept that includes introspection but also allows for dynamically invoking methods, accessing fields, and modifying the structure of objects.
    Difference: Introspection is limited to examining types and properties, while reflection includes the ability to manipulate them .

88. monorepo (webpack module federation (micro front-end), nx / lerna, turborepo)
    A monorepo is a single repository that contains multiple projects, often sharing code and dependencies. Tools like Webpack Module Federation, Nx, Lerna, and Turborepo help manage and build monorepos, facilitating code reuse and consistent dependencies across projects.

89. What are the advantages/disadvantages of monorepositories vs using different repositories?
    Advantages of Monorepos:

Easier code sharing and reuse.
Consistent dependency management.
Simplified refactoring across projects.
Disadvantages of Monorepos:

Can become large and unwieldy.
More complex CI/CD pipelines.
Potential for longer build times.
Advantages of Different Repositories:

Clear separation of concerns.
Independent versioning and deployment.
Smaller, more manageable repositories.
Disadvantages of Different Repositories:

Harder to share code and manage dependencies.
More complex to coordinate changes across repositories.

90. What is microservice architecture of Front-end App and its advantages compared to monolithic architecture?
    Microservice architecture divides a front-end application into small, independent services that can be developed, deployed, and scaled independently. Each microservice handles a specific part of the application's functionality.

Advantages:

Improved scalability.
Independent deployment and development.
Fault isolation.
Compared to Monolithic:

Monolithic: A single, large application where all components are interconnected.
Microservices: Small, autonomous services that communicate over APIs, providing better flexibility and scalability.

91. How would you design a system for high availability and scalability?
    High Availability:

Redundancy: Use multiple servers and failover mechanisms.
Load Balancing: Distribute traffic across multiple servers.
Monitoring: Implement health checks and automated recovery processes.
Scalability:

Horizontal Scaling: Add more servers to handle increased load.
Vertical Scaling: Increase resources (CPU, RAM) of existing servers.
Caching: Use caching strategies (e.g., CDNs, in-memory caches) to reduce load on servers.
Microservices: Architect the system using microservices to scale individual components independently.

92. What are the strategies for scaling web applications?
    Vertical Scaling: Increase the resources of a single server (e.g., more RAM, CPU).
    Horizontal Scaling: Add more servers to handle increased load.
    Caching: Use CDNs, in-memory caches (e.g., Redis) to reduce server load.
    Load Balancing: Distribute incoming traffic across multiple servers.
    Database Optimization: Use read replicas, sharding, and indexing to optimize database performance.
    Microservices: Decompose the application into smaller, independently scalable services.

93. What design patterns do you know and where to apply them?
    Singleton: Ensure a class has only one instance. Used in logging, configuration settings.
    Factory: Create objects without specifying the exact class. Used in object creation patterns.
    Observer: Allow objects to be notified of state changes. Used in event handling.
    Decorator: Add behavior to objects dynamically. Used in modifying class functionality.
    Strategy: Define a family of algorithms, encapsulate each one. Used in algorithm selection.

94. What architectural patterns of web applications were used and what are their advantages?
    MVC (Model-View-Controller): Separates application logic, UI, and data. Advantages: modularity, separation of concerns.
    MVVM (Model-View-ViewModel): Enhances MVC with a ViewModel for two-way data binding. Advantages: easier to manage UI state.
    Microservices: Decomposes application into small, independent services. Advantages: scalability, independent deployment.
    Serverless: Uses cloud services to handle backend logic. Advantages: scalability, cost efficiency.

95. How should you develop scalable and high-performance front-end systems?
    Optimize rendering and minimize DOM manipulation.
    Use code-splitting and lazy loading to reduce initial load time.
    Implement caching strategies.
    Minimize and optimize asset sizes (e.g., images, scripts).
    Use performance monitoring tools to identify bottlenecks.
    Write efficient, reusable code and follow best practices.

96. How to maintain a balance between ready-made solutions and development of own solutions in projects? How should decisions be made about the choice?
    Evaluate the complexity and scope of the project.
    Use ready-made solutions for common functionalities to save time and ensure reliability.
    Develop custom solutions when unique requirements or optimizations are needed.
    Consider the long-term maintenance and scalability of the chosen solution.
    Make decisions based on project requirements, team expertise, and cost-benefit analysis.

97. How you conduct planning meeting? How you estimate the tasks? Do you use hours or points?
    Planning Meeting: Gather team members, review project goals, and break down tasks.
    Estimating Tasks: Use techniques like Planning Poker or T-shirt sizing to estimate effort.
    Units of Estimation: Use story points to measure relative effort, considering complexity and risk. Hours can be used for more granular time tracking but may be less effective for relative sizing.

98. Configuring the `ci/cd` pipelines (pipelines, deploy, package-lock file, .env)
    CI/CD Pipelines: Automate build, test, and deployment processes.
    Deploy: Set up environments and automate deployment steps.
    Package-lock file: Ensure consistent dependency versions across environments.
    .env Files: Manage environment-specific configurations securely.

99. `npm i --production`
    The command `npm i --production` installs only the dependencies listed under "dependencies" in the package.json file, excluding "devDependencies". This is often used for production deployments to reduce the footprint and avoid installing unnecessary packages.

100.  What is package-lock.json for?
      package-lock.json ensures that installations are consistent across different environments by locking the exact versions of dependencies and their sub-dependencies. It provides a reliable way to reproduce the node_modules structure.

101.  What is the difference between npm install and npm ci?
      npm install: Installs dependencies based on the package.json file, potentially updating the package-lock.json.
      npm ci: Installs dependencies based on the package-lock.json, ensuring exact versions and providing faster, more reliable builds.

102.  What tools do you know or already use to improve your code?
      Linters: ESLint, TSLint
      Formatters: Prettier
      Type Checkers: TypeScript
      Testing Frameworks: Jest, Mocha, Cypress
      Build Tools: Webpack, Babel
      Code Analysis: SonarQube, CodeClimate

103.  What is semver?
      Semantic Versioning (semver) is a versioning scheme for software that uses a three-part version number: MAJOR.MINOR.PATCH. Changes in the major version indicate incompatible API changes, minor version changes indicate added functionality in a backward-compatible manner, and patch changes indicate backward-compatible bug fixes.

104.  What is the difference between git merge and git rebase?
      Git Merge: Combines two branches by creating a new commit that includes changes from both branches, preserving the history of both.
      Git Rebase: Reapplies commits from one branch onto another, creating a linear history. It can simplify the commit history but may require conflict resolution and force pushes.

105.  What is git flow in a few words?
      Git flow is a branching model for Git that defines a strict branching structure:

Feature Branches: For developing new features.
Develop Branch: Integration branch for features.
Release Branches: Prepare for a release.
Master Branch: Holds production-ready code.
Hotfix Branches: For critical bug fixes.

106. How do you ensure cross-browser compatibility?
     PostCSS: Automate vendor prefixing.
     Polyfills: Add missing functionality for older browsers.
     Testing: Use tools like BrowserStack or Sauce Labs to test on different browsers.
     CSS Resets: Normalize or reset CSS to reduce inconsistencies.

107. What is hash (hash function, hashmap) + encryption + encoding?
     Hash Function: A function that converts input data into a fixed-size string of characters, typically a hash code.
     Hashmap: A data structure that uses hash functions to map keys to values, providing fast data retrieval.
     Encryption: The process of converting data into a coded form to prevent unauthorized access.
     Encoding: The process of converting data into a specific format for efficient transmission or storage.

108. What is normalizing data, and how we can do it?
     Normalizing data is the process of organizing data to reduce redundancy and improve data integrity. It involves structuring data into tables in a relational database and defining relationships between them. This can be done using normalization rules like 1NF, 2NF, and 3NF.

109. What is shadow traffic?
     Shadow traffic refers to legitimate traffic that is miscategorized or miscounted by web analytics tools, leading to discrepancies in traffic reporting. This can occur due to bots, spiders, or other non-human interactions that mimic real user behavior.

110. What is single source of truth (SSOT)?
     A single source of truth (SSOT) is a practice of structuring information models and associated schemata such that every data element is stored exactly once. Changes to the data are made in one place and propagated to all other parts of the system, ensuring consistency and accuracy.

111. What is Jamstack?
     Jamstack is a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup. It decouples the frontend from the backend, resulting in faster and more secure web applications.

112. What is stateful vs stateless?
     Stateful: Systems or components that maintain state between requests. Example: sessions in a web application.
     Stateless: Systems or components that do not maintain state between requests. Each request is independent. Example: RESTful APIs.

113. High cohesion and low coupling
     High Cohesion: Keeping related functionalities within a single module, making the system easier to maintain and understand.
     Low Coupling: Reducing dependencies between modules, making the system more flexible and easier to modify.

114. OOP vs FP
     OOP (Object-Oriented Programming): A paradigm based on objects containing data and methods. Emphasizes encapsulation, inheritance, and polymorphism.
     FP (Functional Programming): A paradigm based on pure functions, immutability, and higher-order functions. Emphasizes declarative programming and avoiding side effects.

115. Tell us about functional programming.
     Functional programming (FP) is a paradigm that treats computation as the evaluation of mathematical functions. It avoids changing state and mutable data, emphasizes the use of pure functions, and supports higher-order functions and function composition. FP promotes a declarative style of programming and aims for cleaner, more predictable code.

116. What is the difference between imperative and declarative programming in JS?
     Imperative Programming: Specifies the steps the program must take to achieve a desired state. Example: iterating over an array with a for loop.
     Declarative Programming: Describes what the program should accomplish without specifying how. Example: using array methods like map, filter, and reduce.

117. What is API contact?
     API contracts are essential for defining how software components interact, ensuring clear communication, consistency, and decoupling. They serve as both a technical specification and a form of documentation, making it easier to develop, test, and maintain APIs. By adhering to a well-defined API contract, development teams can work more efficiently and deliver more reliable software.

118. What is the difference between Authentication and Authorization?
     `Authentication`: Confirms the user's identity (Who are you?).
     `Authorization`: Determines the user's permissions (What are you allowed to do?).

119. What is SDLC?
