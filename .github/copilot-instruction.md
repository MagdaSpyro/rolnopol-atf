# Copilot Instructions

## Test Plan and Tagging System

When creating or updating tests, always apply tags from the [TEST_PLAN.md](../TEST_PLAN.md) tagging system using Playwright's `test.tag()` API or inline tag strings.
                    |

**Rules:**

- Every test must have at least one area tag (e.g. `@smoke`, `@auth`, `@farm`) and one behaviour tag (e.g. `@crud`, `@validation`, `@happy-path`)
- Use `@critical` for P0 tests and `@edge-case` for boundary/error conditions
- When adding a new test, mark the corresponding item as `[x]` in `TEST_PLAN.md`
- When introducing a new tag not listed above, add it to the relevant area in `TEST_PLAN.md` before using it

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
