# Copilot Instructions

## Testing Framework

This project uses **Playwright Test** as the testing framework. Before creating or modifying tests, always review [playwright.config.ts](../playwright.config.ts) to understand

- Base URL configuration
- Timeout settings
- Browser configurations
- Test directory structure
- Reporter settings

## Test Plan and Tagging System

When creating or updating tests, always apply tags from the [TEST_PLAN.md](../TEST_PLAN.md) tagging system using Playwright's `tag` test option or inline `@tag` strings in the test title.

**Rules:**

- Every test must include the tag or tags defined for its corresponding scenario in [TEST_PLAN.md](../TEST_PLAN.md)
- Use at least one functional area or suite tag (e.g. `@smoke`, `@auth`, `@farm`) and add behaviour/risk tags (e.g. `@crud`, `@validation`, `@happy-path`, `@edge-case`, `@critical`) when the matching `TEST_PLAN.md` item includes them
- Smoke tests may use suite/priority/navigation tags such as `@smoke`, `@critical`, and `@navigation` when that is how the corresponding `TEST_PLAN.md` item is tagged
- When adding a new test, mark the corresponding item as `[x]` in `TEST_PLAN.md`
- When introducing a new tag not already defined in `TEST_PLAN.md`, add it to the relevant section there before using it

**Example:**

```typescript
test(
  "should block purchase with insufficient funds",
  { tag: ["@marketplace", "@purchase", "@validation", "@edge-case"] },
  async ({ page }) => {
    // ...
  },
);
```

---

## Arrange, Act, Assert (AAA) Pattern

All tests must use `// Arrange`, `// Act`, and `// Assert` comments to separate each phase. Keep the `// Arrange` comment even if there is no setup data.

---

## Conventional Commits

Use the format: `<type>(<scope>): <description>`

**Types:** `feat` | `fix` | `test` | `refactor` | `chore` | `docs` | `ci` | `revert`

**Rules:**

- Lowercase, imperative mood, no period at the end
- Max 72 characters
- Scope is optional (e.g. `smoke`, `config`, `deps`)

**Examples:**

```
feat(smoke): add page title validation test
fix: correct login selector after UI update
chore(deps): upgrade playwright to v1.43.0
docs: update README with test execution steps
```
