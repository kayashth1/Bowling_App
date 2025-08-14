import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import { defineConfig } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
      react: pluginReact,
      "react-hooks": fixupPluginRules(pluginReactHooks),
      "jsx-a11y": fixupPluginRules(pluginJsxA11y),
    },
    extends: [
      js.configs.recommended,
      pluginReact.configs.flat.recommended,
      fixupConfigRules(pluginReactHooks.configs.recommended),
      fixupConfigRules(pluginJsxA11y.configs.recommended),
    ],
    rules: {
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "no-unused-vars": "warn",
      semi: ["error", "always"],
    },
  },
]);
