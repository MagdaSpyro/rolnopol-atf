# Profile Page E2E Test Plan

## Goal

Verify the presence and correctness of key elements on the profile page after successful login.
Add an additional e2e test covering user info display, navigation, and interactive components.
Fix environment variable inconsistencies if found.

## Assumptions

- The app is running at http://localhost:3000
- Test user credentials are available via `LOGIN_EMAIL`/`LOGIN_PASSWORD` env vars (with fallback defaults)
- `ProfilePage.ts` already has headings and logout button; needs extension with user-specific info and form inputs

## Open Questions

- What user info fields does the profile page display? (email, name, role, balance?) → TO BE CONFIRMED VIA MCP
- Are there navigation links (navbar) on the profile page? → TO BE CONFIRMED VIA MCP
- What interactive components exist beyond logout (e.g., update profile form)? → TO BE CONFIRMED VIA MCP

## Risks and Constraints

- `userFactory.ts` reads `LOGIN_EMAIL`/`LOGIN_PASSWORD` but `.env` only has `USER_EMAIL`/`USER_PASSWORD` — potential mismatch to address
- Relying on dynamic user data (email) may be fragile unless test user is stable
- Profile page may show different data per user role

## Planned Steps

1. [x] Read CODING_STANDARDS.md, TEST_PLAN.md, playwright.config.ts
2. [x] Read existing ProfilePage.ts, LoginPage.ts, login.e2e.spec.ts
3. [x] Check env.ts, userFactory.ts, .env file
4. [x] Confirm app is reachable
5. [x] Create this plan
6. [ ] Explore profile page via Playwright MCP: navigate to /login.html → login → /profile.html
7. [ ] Document discovered elements (locators, headings, inputs, nav links)
8. [ ] Extend ProfilePage.ts with new locators for user info and interactive elements
9. [ ] Add `LOGIN_EMAIL`/`LOGIN_PASSWORD` to `.env` (align with userFactory.ts)
10. [ ] Create `tests/profile.e2e.spec.ts` with tags @auth @login @profile
11. [ ] Run full test suite (`npx playwright test`)
12. [ ] Fix any regressions
13. [ ] Confirm all tests pass

## Implementation Notes

- Tags to use: `@auth`, `@login`, `@profile` (from TEST_PLAN.md — Authentication section)
- Follow AAA pattern with comments
- Use `expect.soft()` for multiple independent element checks
- No `expect()` in Page Objects
- Use `getByTestId()` preferably, `getByRole()` for accessibility-relevant elements

## Findings from MCP Exploration

Profile page (`/profile.html`) elements confirmed via `data-testid` attributes:

- **User info**: `profile-header`, `displayed-name`, `email-value`, `last-login`, `user-id`, `created-at`
- **Navigation**: `nav-home`, `nav-profile` ("Welcome, {name}"), `nav-staff-fields`, `nav-financial`, `nav-marketplace`, `nav-map`, `nav-alerts`, `nav-docs`, `nav-api-explorer`
- **Update Profile form**: `new-displayed-name-input`, `new-password-input`, `confirm-password-input`, `update-profile-submit-btn`
- **Danger Zone**: `delete-account-btn`
- **Logout**: `logout-btn` (appears twice — in header and profile section; `.first()` used)

## Status

COMPLETED — all 12 tests pass (6.6s)
