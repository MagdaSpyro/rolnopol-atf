# Rolnopol ATF

Automated test framework for the **Rolnopol** agricultural management system, built with [Playwright](https://playwright.dev/) and TypeScript.

## Prerequisites

- **Node.js** version supported by `package.json#engines` (`v24` recommended to match CI)
- **npm** v9 or higher
- The **Rolnopol** application running locally at `http://localhost:3000`

## Installation & Setup

Install project dependencies:

```bash
npm install
```

Git hooks are installed automatically during `npm install` via Husky.

Create a local environment file:

```bash
cp .env.example .env
```

Update `.env` as needed:

```bash
BASE_URL=http://localhost:3000
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

| Command               | Description                                 |
| --------------------- | ------------------------------------------- |
| `npm test`            | Run all tests in headless mode              |
| `npm run test:headed` | Run all tests with a visible browser        |
| `npm run test:report` | Open the HTML report from the last test run |

## Code Quality

| Command                | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| `npm run format`       | Apply Prettier formatting                                      |
| `npm run format:check` | Verify formatting without changing files                       |
| `npm run lint`         | Run ESLint, including import sorting and Playwright lint rules |
| `npm run tsc:check`    | Run TypeScript in no-emit mode                                 |
| `npm run check`        | Local aggregate check: format, lint, then type-check           |
| `npm run check:ci`     | CI-safe aggregate check with no file mutations                 |

Local commits run `lint-staged` plus `npm run tsc:check` through Husky. In CI, the `quality` job runs formatting, linting, and type checking before Playwright tests start.

Import ordering is enforced by ESLint (`eslint-plugin-simple-import-sort`), not by VS Code's organize-imports action.

## Project Structure

```
rolnopol-atf/
├── src/
│   ├── pages/       # Page Object classes (BasePage, HomePage, LoginPage, RegisterPage, …)
│   ├── constants/   # Shared constants (e.g. page URLs)
│   └── helpers/     # Utility functions for generating test data
├── .husky/          # Pre-commit quality checks
├── eslint.config.mjs
├── tests/           # Playwright test specs (*.spec.ts)
├── playwright.config.ts
└── package.json
```

## Coding Standards

See [CODING_STANDARDS.md](./CODING_STANDARDS.md).

## Test Plan

See [TEST_PLAN.md](./TEST_PLAN.md).
