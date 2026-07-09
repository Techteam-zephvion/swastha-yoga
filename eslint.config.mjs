import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig, globalIgnores } from "eslint/config";

// eslint-config-next 15.5.x still ships its config in legacy eslintrc
// shape (`{ extends: [...] }`), not a flat-config array — FlatCompat
// bridges it into this flat config the way next.js's own docs recommend
// for versions before eslint-config-next added native flat-array exports.
const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

const eslintConfig = defineConfig([
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Python asset pipeline — not linted by ESLint.
    "tools/**",
  ]),
]);

export default eslintConfig;
