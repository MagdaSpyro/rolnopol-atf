export interface User {
  email: string;
  password: string;
}

export function createUser(overrides: Partial<User> = {}): User {
  return {
    email: process.env.LOGIN_EMAIL!,
    password: process.env.LOGIN_PASSWORD!,
    ...overrides,
  };
}
