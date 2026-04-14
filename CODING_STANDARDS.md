# Coding Standards

This document defines code-level conventions for this project. Use it together with [.github/copilot-instruction.md](./.github/copilot-instruction.md), which covers repo-level workflow and process rules.

## Test Structure

- Use `// Arrange`, `// Act`, and `// Assert` comments in every test.
- Keep the `// Arrange` comment even when setup is minimal.
- Keep verifications explicit in the test body.

## Page Object Pattern

### Best Practices

- Keep page objects in `src/pages/`.
- Keep locators at the top of the class.
- Use page objects for page actions and reusable interactions only.
- Keep methods focused and easy to read.
- Use clear method names such as `goto()` or `register()`.
- Keep test assertions in test files.
- Do not include assertions inside page objects.
- Do not hide expected results inside helper methods.
- Create test data in tests or dedicated helpers, not inside page objects.
- Keep page objects small. Split them when a page becomes too large.

### Recommended Structure

- Page object: handles navigation, input, clicks, and reusable UI interactions.
- Test file: handles Arrange, Act, Assert flow and all verifications.

### Example Rule

- Good: `registerPage.register(email, password, displayName)` in the page object, then `expect(...)` in the test.
- Avoid: `registerPage.expectSuccessfulRegistration()` inside the page object.
