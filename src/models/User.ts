export interface User {
  email: string;
  password: string;
  displayedName: string;
}

export function getEmptyEnvUser(overrides: Partial<User> = {}): User {
  return {
    email: process.env.EMPTY_USER_EMAIL ?? "",
    password: process.env.EMPTY_USER_PASSWORD ?? "",
    displayedName: process.env.EMPTY_USER_DISPLAY_NAME ?? "",
    ...overrides,
  };
}

export function getDemoEnvUser(overrides: Partial<User> = {}): User {
  return {
    email: process.env.DEMO_USER_EMAIL ?? "",
    password: process.env.DEMO_USER_PASSWORD ?? "",
    displayedName: process.env.DEMO_USER_DISPLAY_NAME ?? "",
    ...overrides,
  };
}
