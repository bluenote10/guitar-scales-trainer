// ESLint 9 flat config
import js from "@eslint/js";
import gitignore from "eslint-config-flat-gitignore";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import * as tseslint from "typescript-eslint";

export default [
  // Respect .gitignore automatically
  gitignore(),
  {
    ignores: ["svelte.config.js", "postcss.config.cjs"],
  },

  // JavaScript recommended
  js.configs.recommended,

  // TypeScript recommended (no type-checking to keep it fast and simple)
  ...tseslint.configs.recommended,

  // Svelte recommended for flat config
  ...svelte.configs["flat/recommended"],
  // Ensure TypeScript is used for <script lang="ts"> in .svelte files
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  // Apply Prettier plugin settings for Svelte
  ...svelte.configs["flat/prettier"],

  // Disable rules that conflict with Prettier formatting
  prettier,
];
