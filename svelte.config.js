// Initially this was adapter-auto, but I think we need adapter-static
// for GitHub pages.
// https://kit.svelte.dev/docs/adapter-static#usage
// https://kit.svelte.dev/docs/adapter-static#github-pages
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/guitar-scales-trainer" : "",
    },
  },
};

export default config;
