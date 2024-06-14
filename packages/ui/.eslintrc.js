/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  rules: {
    "no-redeclare": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-redundant-type-constituents": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "import/no-absolute-path": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]|^(Interface|Props)$",
          match: false,
        },
      },
    ],
    "eslint-comments/require-description": ["error", { ignore: [] }],
  },
};
