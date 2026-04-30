# Plan: Login E2E Test

## Goal

Create an end-to-end test covering:

1. Navigate to login page
2. Log in with `emptyuser@rolnopol.demo.pl` / `demoPass123`
3. Assert redirect to logged-in page / dashboard
4. Assert sections visible: "Profile information", "Update Profile", "Danger Zone"
5. Log out and assert redirect to home page

## Tags (from TEST_PLAN.md)

`@auth` `@login` `@session` `@logout`

## Assumptions & Open Questions

- [ ] What is the URL of the post-login page? (TBD via MCP exploration)
- [ ] What are the test-ids of the login email/password inputs and submit button? (TBD via MCP)
- [ ] What are the test-ids for profile sections? (TBD via MCP)
- [ ] Where is the logout control? (TBD via MCP)
- [ ] Does the existing `LoginPage` PO need extending? Yes – it currently only has `loginSubtitle`.

## Risks & Constraints

- App must be running at http://localhost:3000
- Credentials must be pre-seeded in the app; if not, the test will fail at login

## Planned Steps

1. [x] Read existing project files (CODING_STANDARDS, TEST_PLAN, playwright.config, POs, tests)
2. [x] Create this plan
3. [ ] Check if app is running; if not, start it
4. [ ] Explore login page via MCP to find locators
5. [ ] Explore post-login (profile/dashboard) page via MCP to find locators and sections
6. [ ] Explore logout flow via MCP
7. [ ] Extend `LoginPage` PO with email input, password input, submit button, and a `login()` method
8. [ ] Create `ProfilePage` PO with locators for the three sections and logout
9. [ ] Add `PROFILE` URL to `pageUrls.ts` if needed
10. [ ] Write test in a new file `tests/login.e2e.spec.ts`
11. [ ] Run full test suite
12. [ ] Validate and report

## MCP Findings (filled during exploration)

- Post-login URL: TBD
- Login form test-ids: TBD
- Profile section test-ids: TBD
- Logout test-id / element: TBD

## Status

In progress
