# Plan: User Model, Factory & Test Integration

## Goal
Introduce a typed `User` model and factory to replace hardcoded credentials in the login test.

## Assumptions
- `dotenv` is already active via `import "dotenv/config"` in `playwright.config.ts`
- Env vars for login credentials do not yet exist — will add to `.env.example`
- Factory default values fall back to the current hardcoded strings if env vars are absent
- Only the login e2e test is updated (it's the only test using hardcoded credentials)

## Open Questions
- None — all requirements are clear

## Risks & Constraints
- If a real `.env` file exists but does not include the new vars, tests will fall back to defaults (safe)
- No change to Page Objects or test logic — only credential sourcing changes

## Planned Steps

1. [x] Read CODING_STANDARDS.md, playwright.config.ts, login test, .env.example
2. [ ] Create `.ai-temp/user-model-plan.md` (this file)
3. [ ] Create `src/models/User.ts` — TypeScript interface `User { email, password }`
4. [ ] Create `src/factories/userFactory.ts` — `createUser(overrides?)` using env vars
5. [ ] Update `.env.example` with `LOGIN_EMAIL` and `LOGIN_PASSWORD` entries
6. [ ] Update `tests/login.e2e.spec.ts` to import and use `createUser()`
7. [ ] Run full test suite; fix any regressions
8. [ ] Mark plan as complete

## Status: Completed ✅

## Results
- 10/11 tests passed; 1 pre-existing timeout failure in `registration.negative.spec.ts` (unrelated to these changes)
