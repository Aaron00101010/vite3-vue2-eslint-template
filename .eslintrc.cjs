module.exports = {
  parser: "vue-eslint-parser",
  extends: ["plugin:vue/recommended", "standard", "prettier"],
  plugins: ["standard", "prettier", "vue"],
  rules: {
    "prettier/prettier": "error",
  },
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    parser: "@babel/eslint-parser",
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      parserOpts: {
        plugins: ["jsx"],
      },
    },
  },
};
