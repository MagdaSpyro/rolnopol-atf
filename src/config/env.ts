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
  USER_EMAIL: requireEnv("USER_EMAIL"),
  USER_PASSWORD: requireEnv("USER_PASSWORD"),
} as const;
