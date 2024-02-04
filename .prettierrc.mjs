// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  printWidth: 120,
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
