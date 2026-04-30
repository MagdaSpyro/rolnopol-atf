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

## Coding Standards

See [CODING_STANDARDS.md](./CODING_STANDARDS.md).

## Test Plan

See [TEST_PLAN.md](./TEST_PLAN.md).