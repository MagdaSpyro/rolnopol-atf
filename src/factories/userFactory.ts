import { User } from "../models/User";

export function createUser(overrides: Partial<User> = {}): User {
  return {
    email: process.env.LOGIN_EMAIL ?? "emptyuser@rolnopol.demo.pl",
    password: process.env.LOGIN_PASSWORD ?? "demoPass123",
    displayedName:
      process.env.EMPTY_USER_DISPLAY_NAME ??
      process.env.DEMO_USER_DISPLAY_NAME ??
      "Empty User",
    ...overrides,
  };
}
