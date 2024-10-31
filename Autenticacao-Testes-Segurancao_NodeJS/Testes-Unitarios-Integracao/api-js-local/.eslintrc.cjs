// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'airbnb-base',
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   rules: {
//     'import/extensions': 0,
//     'prefer-destructuring': 0,
//     'no-underscore-dangle': 0,
//   },
//   overrides: [
//     {
//       files: [
//         '*.test.js',
//       ],
//       env: {
//         jest: true,
//       },
//     },
//   ],
// };

import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      indent: ["error", 2],
      quotes: ["error", "single"],
      semi: ["error", "always"],
    },
  },
  pluginJs.configs.recommended,
];