module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // yoda style
    "yoda": [
      "error",
      "always"
    ],
    // blank line at the end of the file
    "eol-last": [
      "error",
      "always"
    ],
    // 4 spaces identation
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    // \n eol
    "linebreak-style": [
      "error",
      "unix"
    ],
    // single quotes
    "quotes": [
      "error",
      "single"
    ],
    // semicolons at the end of every statement
    "semi": [
      "error",
      "always"
    ],
    // always add parenthesis in arrow functions
    "arrow-parens": [
      "error",
      "always"
    ],
    // add spaces inside braces
    "object-curly-spacing": [
      "error",
      "always"
    ],

    "arrow-spacing": "warn",
    "block-spacing": "warn",
    "function-call-argument-newline": ["warn", "consistent"],
    "func-call-spacing": "warn",
    "max-statements-per-line": "warn",
    "newline-per-chained-call": "warn",
    "no-multi-spaces": "warn",
    "template-curly-spacing": ["warn", "never"],
    "no-whitespace-before-property": "warn",
    "no-trailing-spaces": "warn",
    "no-multiple-empty-lines": [
      "warn",
      { "max": 1, "maxBOF": 0 }
    ],

    "template-tag-spacing": "warn",

    "prefer-arrow-callback": [
      "warn",
      { "allowNamedFunctions": true }
    ],
    "prefer-exponentiation-operator": "warn",
    "prefer-promise-reject-errors": [
      "warn",
      { "allowEmptyReject": true }
    ],
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "quote-props": [
      "warn",
      "consistent-as-needed"
    ],
    "require-await": "warn",
    "require-yield": "warn",
    "comma-spacing": "warn",
    "computed-property-spacing": "warn",
    "dot-location": [
      "warn",
      "property"
    ],
    "function-paren-newline": [
      "warn",
      "multiline-arguments"
    ],
    "generator-star-spacing": [
      "warn",
      { "before": false, "after": true }
    ],
    "implicit-arrow-linebreak": "warn",
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "lines-between-class-members": [
      "warn",
      "always",
      { "exceptAfterSingleLine": true }
    ],
    "padded-blocks": [
      "warn",
      "never"
    ],
    "rest-spread-spacing": "warn",
    "space-before-blocks": "warn",
    "space-in-parens": "warn",
    "space-unary-ops": "warn",
    "switch-colon-spacing": "warn",
    "wrap-iife": [
      "warn",
      "any"
    ],
    "yield-star-spacing": [
      "warn",
      "after"
    ],


    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
