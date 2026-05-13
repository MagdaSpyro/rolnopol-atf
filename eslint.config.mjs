import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPlaywright from "eslint-plugin-playwright";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

const typescriptFiles = ["**/*.ts"];

export default [
  {
    ignores: [
      "node_modules/**",
      "playwright/.auth/**",
      "playwright/.cache/**",
      "playwright-report/**",
      "playwright-report-ci/**",
      "test-results/**",
      ".ai-docs/**",
      ".ai-temp/**",
      ".playwright-mcp/**",
    ],
  },
  {
    files: typescriptFiles,
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  },
  {
    ...js.configs.recommended,
    files: typescriptFiles,
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: typescriptFiles,
  })),
  {
    files: typescriptFiles,
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    ...eslintPluginPlaywright.configs["flat/recommended"],
    files: ["tests/**/*.ts"],
  },
  {
    ...eslintConfigPrettier,
    files: typescriptFiles,
  },
];
