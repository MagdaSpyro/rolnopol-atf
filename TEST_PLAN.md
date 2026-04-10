# Rolnopol – Test Plan

**Application:** http://localhost:3000  
**Docs:** http://localhost:3000/docs.html  
**Version:** 1.0.99

---

## 1. Registration & Login

| #   | Test Case                                             | Expected Result                                                                    |
| --- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 1.1 | Register with valid email, display name, and password | Account created; user redirected to `/profile.html`                                |
| 1.2 | Register with already used email                      | Error message displayed                                                            |
| 1.3 | Login with valid credentials                          | Redirected to `/profile.html`; `rolnopolToken` and `rolnopolLoginTime` cookies set |
| 1.4 | Login with invalid credentials                        | Error message displayed; no cookies set                                            |
| 1.5 | Access a protected page without a token               | Redirected to login or error shown                                                 |
| 1.6 | Logout                                                | Authentication cookies cleared; session invalidated                                |

---

## 2. Farm & Resource Management

| #   | Test Case                                             | Expected Result                                        |
| --- | ----------------------------------------------------- | ------------------------------------------------------ |
| 2.1 | Add a field (name, area)                              | Field appears in user's farm dashboard                 |
| 2.2 | Edit a field                                          | Changes saved and reflected in dashboard               |
| 2.3 | Delete an unassigned field                            | Field removed from the list                            |
| 2.4 | Add an animal (type, amount) and assign it to a field | Animal listed; field assignment saved                  |
| 2.5 | Add a staff member (name, age)                        | Staff member appears in the list                       |
| 2.6 | Assign a staff member to a field                      | Assignment created and visible                         |
| 2.7 | Remove an assignment                                  | Assignment deleted; resource no longer linked to field |

---

## 3. Marketplace Trading

| #   | Test Case                                        | Expected Result                                                |
| --- | ------------------------------------------------ | -------------------------------------------------------------- |
| 3.1 | Browse marketplace offers                        | Available offers listed                                        |
| 3.2 | Create an offer for an unassigned asset          | Offer created with status `active`                             |
| 3.3 | Attempt to create an offer for an assigned asset | Offer created with status `unavailable`                        |
| 3.4 | Purchase an active offer with sufficient funds   | Ownership transferred; balances updated; offer status → `sold` |
| 3.5 | Attempt to purchase with insufficient funds      | Error: "Insufficient funds: overdraft is not allowed."         |
| 3.6 | Attempt to purchase own offer                    | Purchase blocked                                               |
| 3.7 | Cancel an active offer                           | Offer status → `cancelled`                                     |

---

## 4. Financial Operations

| #   | Test Case                          | Expected Result                                       |
| --- | ---------------------------------- | ----------------------------------------------------- |
| 4.1 | View account balance               | Current balance displayed correctly                   |
| 4.2 | View transaction history           | List of past income/expense transactions shown        |
| 4.3 | Sell a resource via marketplace    | `income` transaction recorded; balance increased      |
| 4.4 | Buy a resource via marketplace     | `expense` transaction recorded; balance decreased     |
| 4.5 | Transfer funds to another user     | Sender balance decreases; recipient balance increases |
| 4.6 | Transfer more than current balance | Transfer blocked; error displayed                     |

---

## 5. System Health

| #   | Test Case                                         | Expected Result              |
| --- | ------------------------------------------------- | ---------------------------- |
| 5.1 | Call health-check endpoint (`GET /api/v1/health`) | `200 OK` with healthy status |

---

## Out of Scope

- Admin / Superadmin dashboards and audit logs
- Rate limiting edge cases
- Performance and load testing
