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

- Brak widocznych w kodzie locatorów dla "herds" - trzeba zbadać UI
- Dane testowe (nazwy stad) mogą się kumulować między testami

## Planned Steps

1. [x] Zbadać UI aplikacji - widok Staff & Fields (nawigacja i sekcja herd)
2. [ ] Zaktualizować plan o wyniki eksploracji
3. [ ] Dodać locatory i metody dla "herd" do StaffFieldsMainPage.ts
4. [ ] Dodać test tworzenia stada do staff-fields.e2e.spec.ts
5. [ ] Uruchomić pełny zestaw testów i potwierdzić brak regresji
6. [ ] Zweryfikować CI/CD workflow

## Findings from UI Exploration

(to be filled after exploring the app)

## Status

In Progress
