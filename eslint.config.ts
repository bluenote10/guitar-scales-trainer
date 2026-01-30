// ESLint 9 flat config
import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import { defineConfig } from "eslint/config";
import ts from "typescript-eslint";

export default defineConfig(
  // Respect .gitignore automatically
  // @ts-expect-error(fine for Node 22+)
  includeIgnoreFile(import.meta.dirname + "/.gitignore"),
  {
    ignores: ["svelte.config.js", "postcss.config.cjs"],
  },

  // Base recommended rules
  js.configs.recommended,
  ...ts.configs.recommended,

  // Ideally I'd like to switch to `recommendedTypeChecked`, but that seems tricky.
  // {
  //   languageOptions: {
  //     parserOptions: {
  //       projectService: true,
  //       tsconfigRootDir: import.meta.dirname,
  //       extraFileExtensions: [".svelte"],
  //     },
  //   },
  // },
  // ...ts.configs.recommendedTypeChecked,

  // Svelte recommended (sets up parser, processor, and svelte-specific rules)
  ...svelte.configs.recommended,

  // Disable formatting rules that conflict with Prettier
  prettier,
  ...svelte.configs.prettier,

  // Custom rules
  {
    rules: {
      // no-undef is already disabled by ts.configs.recommended (TypeScript handles this better).
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },

  // Svelte file-specific TypeScript parser options
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
);
