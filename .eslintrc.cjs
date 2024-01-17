module.exports = {
  extends: [
    "plugin:astro/recommended",
  ],
  overrides: [
    {
      files: ["*.astro"],
      processor: "astro/client-side-ts",
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "astro/no-set-html-directive": "error",
        'no-console': 'off',
        quotes: ['error', 'single'],
        indent: [ 2, 2, { SwitchCase: 1 } ],
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'space-infix-ops': 'error',
        'no-multiple-empty-lines':
          ['error', { max: 2 }
          ],
        'import/prefer-default-export': 'off'
      },
    },
  ],
}
