# Rolnopol ATF

Automated test framework for the **Rolnopol** agricultural management system, built with [Playwright](https://playwright.dev/) and TypeScript.

## Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- The **Rolnopol** application running locally at `http://localhost:3000`

## Installation & Setup

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

| Command | Description |
|---|---|
| `npm test` | Run all tests in headless mode |
| `npm run test:headed` | Run all tests with a visible browser |
| `npm run test:report` | Open the HTML report from the last test run |

## Project Structure

```
rolnopol-atf/
├── src/
│   ├── pages/       # Page Object classes (BasePage, HomePage, LoginPage, RegisterPage, …)
│   ├── constants/   # Shared constants (e.g. page URLs)
│   └── helpers/     # Utility functions for generating test data
├── tests/           # Playwright test specs (*.spec.ts)
├── playwright.config.ts
└── package.json
```

## Documentation

- [Coding Standards](./CODING_STANDARDS.md) — test conventions and page object patterns
- [Test Plan](./TEST_PLAN.md) — test scope, priorities, and progress
