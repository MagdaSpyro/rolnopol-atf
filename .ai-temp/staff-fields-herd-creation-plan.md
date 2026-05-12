# Plan: Test dla tworzenia nowego stada zwierząt w Staff & Field

## Goal

Przygotować test E2E dla zalogowanego użytkownika (DEMO_USER), który tworzy nowe stado zwierząt (animal herd) w widoku Staff & Fields.

## Assumptions & Open Questions

- Widok Staff & Fields dostępny pod `/staff-fields-main.html`
- Użytkownik DEMO_USER jest już zalogowany (via storage state z setup projektu)
- Stado zwierząt (herd) to osobna sekcja w widoku Staff & Fields, obok Fields i Staff
- Test powinien używać unikalnej nazwy stada (z timestamp)
- Należy sprawdzić rzeczywisty UI aplikacji, aby poznać dokładne locatory

## Risks & Constraints

- `session.e2e.spec.ts` revokes the shared JWT token during logout. Mitigated by
  performing a fresh UI login (clearCookies + login + waitForURL) at the start of
  the animal-herd test to ensure an independent, valid auth session.
- `test.slow()` applied because the fresh-login path adds extra navigation steps.

## Planned Steps

1. [x] Zbadać UI aplikacji - widok Staff & Fields (nawigacja i sekcja herd)
2. [x] Zaktualizować plan o wyniki eksploracji
3. [x] Dodać locatory i metody dla "herd" do StaffFieldsMainPage.ts:
   - openAddAnimalBtn (#openAddAnimalModal)
   - addAnimalModal (#addAnimalModal)
   - animalTypeSelect (#animalType)
   - animalAmountInput (#animalAmount)
   - submitAddAnimalBtn (#addAnimalForm button)
   - addAnimal(type, amount) – opens modal, waits for option, selects, fills, submits,
     waits for modal to be hidden (confirms API success)
   - animalListItemByType(type) – first li in #animalsList containing type text
4. [x] Dodać test tworzenia stada do staff-fields.e2e.spec.ts
5. [x] Root cause found: loginPage.login() doesn't await the async API+redirect.
   Fixed by adding page.waitForURL(/profile\.html/) after login.
6. [x] Uruchomić pełny zestaw testów - 11 passed, 0 failed
7. [x] Zweryfikować CI/CD workflow (no new env vars or dependencies added)

## Findings from UI Exploration

- "Add Animal" modal triggered by #openAddAnimalModal button
- Modal ID: #addAnimalModal
- Animal type select: #animalType (populated async via /api/v1/animals/types)
- Animal amount input: #animalAmount
- Submit button: inside #addAnimalForm, role=button, name contains "Add Animal"
- On success: modal style set to display:none, animals list refreshed via #animalsList
- Animal list items contain the type key text (e.g., "cow") as the primary identifier

## Status

COMPLETED ✓
