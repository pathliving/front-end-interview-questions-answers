# Testing (questions prepared)

1. Tell us about the testing pyramid. What is the difference between a unit test and a functional/integration test? e2e?

The testing pyramid is a concept that advocates for having more low-level tests (unit tests) than high-level tests (end-to-end tests). It typically consists of three layers:
Unit Tests: Test individual components or functions in isolation. They are fast, reliable, and form the base of the pyramid.
Integration Tests: Test the interaction between integrated units or services. They ensure that combined components work together correctly.
End-to-End (E2E) Tests: Test the entire application workflow from start to finish. They simulate real user scenarios to ensure the system works as expected. These are fewer in number and more complex and time-consuming than unit or integration tests.

2. What are some of the testing best practices?

Write clear and concise test cases.
Ensure tests are independent and can run in any order.
Use meaningful test names and organize tests logically.
Mock external dependencies to isolate units.
Maintain a balance between different types of tests (unit, integration, E2E).
Automate tests as much as possible.
Run tests frequently and integrate them into the CI/CD pipeline.
Ensure tests are maintainable and easy to understand.
Regularly review and refactor tests to improve their quality.

3. Functional testing vs TDD (test-driven-development) vs CDT (code-driven-testing) vs BDD (Behavior Driven Development)?

Functional Testing: Validates the software system against functional requirements/specifications. It involves testing individual functions or features.
Test-Driven Development (TDD): A development process where tests are written before writing the code. The cycle follows: write a test, write code to pass the test, refactor, and repeat.
Code-Driven Testing (CDT): Tests are written based on the existing codebase. It is less formal than TDD and often follows traditional development.
Behavior-Driven Development (BDD): Extends TDD by focusing on the behavior of the application from the user's perspective. It uses natural language constructs to define test cases, often involving collaboration between developers, testers, and business stakeholders.

4. What is A/B testing?

A/B testing is a method of comparing two versions of a webpage or app against each other to determine which one performs better. Users are randomly assigned to either the control group (A) or the variant group (B), and their interactions are measured to identify the more effective variant.

5. What is AAA in testing?

AAA stands for Arrange, Act, Assert. It is a pattern used to structure test cases:
Arrange: Set up the initial conditions and inputs.
Act: Execute the code or functionality being tested.
Assert: Verify that the expected outcome has occurred.

6. How to ensure consistency of test results in different environments (development, testing, production)?

Use environment-agnostic configurations and avoid hard-coded values.
Ensure the same versions of dependencies are used across environments.
Mock or stub external services and dependencies.
Use containerization (e.g., Docker) to replicate environments.
Implement CI/CD pipelines to automate deployment and testing processes.
Run tests in isolated environments to avoid interference from other processes.

7. How do you determine when a software product is ready for release? What criteria do you use for a "green light" for a release?

Ensure all critical bugs and high-priority issues are resolved.
Confirm that the application passes all automated tests (unit, integration, E2E).
Conduct thorough manual testing and user acceptance testing (UAT).
Verify that performance and load tests meet the required benchmarks.
Ensure documentation is complete and up-to-date.
Conduct a final review meeting with stakeholders to agree on readiness.
Ensure the deployment process has been tested and is reliable.

8. Do you know the chaos engineering approach, if so, how can it be applied on the frontend?

Chaos engineering involves deliberately introducing faults and disruptions into a system to identify weaknesses and improve resilience. On the frontend, it can be applied by:
Simulating network outages or latency to test the app's offline handling and performance.
Introducing random errors or delays in API responses to test error handling and user experience under failure conditions.
Testing with varying screen sizes and resolutions to ensure responsive design holds up.
Using tools like Gremlins.js to introduce chaotic events such as random user interactions or state changes.
