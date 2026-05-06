export interface User {
  email: string;
  password: string;
  displayedName: string;
}

export function createUser(overrides: Partial<User> = {}): User {
  return {
    email: process.env.EMPTY_USER_EMAIL ?? "",
    password: process.env.EMPTY_USER_PASSWORD ?? "",
    displayedName: process.env.EMPTY_USER_DISPLAY_NAME ?? "",
    ...overrides,
  };
}
