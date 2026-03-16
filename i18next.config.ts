import { defineConfig } from "i18next-cli";

export default defineConfig({
  locales: ["eng", "deu"],
  extract: {
    input: "src/**/*.{js,jsx,ts,tsx}",
    output: "public/locales/{{language}}/{{namespace}}.json",
    primaryLanguage: "eng",
  },
  types: {
    input: ["public/locales/eng/*.json"],
    output: "types/__generated__/i18next/i18next.d.ts",
  },
});
