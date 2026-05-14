---
name: playwright-ui-test-workflow
description: "Structured workflow for creating, updating, debugging, or reviewing Playwright UI tests and Page Objects in this repository. Use when working on Playwright E2E coverage, locator strategy, tagging, regression validation, or test workflow compatibility."
argument-hint: "Feature or flow under test, target pages, affected specs or page objects, and expected behavior"
user-invocable: true
disable-model-invocation: false
---

# Playwright UI Test Workflow

Use this skill for Playwright UI automation work in this repository.

## Scope

This skill covers the reusable execution workflow for:

- creating new Playwright tests
- updating existing specs
- debugging failing UI automation
- extending Page Objects
- reviewing Playwright coverage against the test plan

Keep repository-wide coding and tagging rules in `.github/copilot-instruction.md`, `CODING_STANDARDS.md`, `TEST_PLAN.md`, and `playwright.config.ts`. This skill does not replace them.

## Workflow

### 1. Create the action plan before implementation

Before performing implementation work, create a plan document in a temporary AI workspace folder such as `.ai-docs/` or `.ai-temp/`.

The plan should capture:

- task goal
- assumptions and open questions
- risks and constraints
- numbered execution steps

Do not start implementation before the plan exists.

### 2. Clarify missing requirements

If expected behavior, data setup, acceptance criteria, environment details, or test scope are unclear:

- pause execution
- record the uncertainty in the plan
- ask focused questions

Do not invent business behavior.

### 3. Understand the current implementation first

Before writing code:

- identify the feature or flow under test
- inspect existing specs, helpers, and Page Objects
- prefer extending current abstractions over creating parallel ones

When multiple code paths are possible, stay near the flow that directly owns the behavior under test.

### 4. Explore the UI before finalizing locators or assertions

For UI-facing changes, use Playwright browser tooling to inspect:

- page structure
- navigation flow
- async state changes
- stable locator opportunities

Update the plan with confirmed assumptions, rejected assumptions, and any new edge cases discovered during exploration.

### 5. Design the test around one clear intent

Each test should map to a specific behavior from `TEST_PLAN.md`.

- choose the minimum test scope that proves the behavior
- apply tags that match `TEST_PLAN.md`
- keep assertions focused on user-observable outcomes
- split unrelated intents into separate tests

If the design changes during implementation, update the plan.

### 6. Implement with repository patterns

Follow these implementation rules:

- use the Page Object pattern
- keep selectors inside Page Objects whenever practical
- prefer role, label, and visible-text strategies over brittle selectors
- avoid sleeps and arbitrary timeouts
- use `expect.soft` when validating multiple independent conditions in a single scenario
- keep test code readable and minimal

Reflect progress in the plan as implementation advances.

### 7. Run regression after changes

After making changes, run the relevant validation.

Preferred order:

- the smallest behavior-scoped test or failing spec
- the affected Playwright slice
- the full Playwright suite when the change is broad or repository rules require it

If a pre-existing test fails, stop and treat it as a regression unless proven unrelated.

### 8. Verify supporting workflows when needed

If changes affect configuration, environment variables, dependencies, or test execution shape, also verify:

- `playwright.config.ts`
- `.github/workflows/*.yml`
- required environment variables and secrets

Document any manual follow-up required for CI.

### 9. Final validation and report

Before finishing:

- confirm tags and assertions are correct
- confirm logic is not duplicated outside Page Objects without reason
- update the plan with final status
- summarize changed files, tests run, assumptions, and remaining risks

Mark the plan as completed or ready for review.

## When not to use this skill

Do not use this skill for:

- repository-wide static analysis or lint setup
- generic TypeScript refactors unrelated to UI automation
- single-shot reporting tasks that fit a prompt better than a workflow

## Architectural intent

This skill owns the reusable Playwright workflow.

- global repository rules stay in instructions
- task-specific workflow steps live here
- agents should stay thin and delegate to this skill for execution guidance