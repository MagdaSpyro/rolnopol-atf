import "dotenv/config";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value || value.trim() === "") {
    throw new Error(
      `Environment variable "${name}" is not set or is empty. ` +
        `Please define it in your .env file or CI environment.`,
    );
  }
  return value;
}

export const ENV = {
  BASE_URL: requireEnv("BASE_URL"),
  EMPTY_USER_EMAIL: requireEnv("EMPTY_USER_EMAIL"),
  EMPTY_USER_PASSWORD: requireEnv("EMPTY_USER_PASSWORD"),
  EMPTY_USER_DISPLAY_NAME: requireEnv("EMPTY_USER_DISPLAY_NAME"),
} as const;
