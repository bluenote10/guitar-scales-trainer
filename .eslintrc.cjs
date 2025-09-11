module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["*.cjs"],
  overrides: [
    {
      files: ["**/*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: {
          ts: "@typescript-eslint/parser",
        },
      },
      plugins: ["svelte"],
      extends: ["plugin:svelte/recommended"],
      rules: {},
    },
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
