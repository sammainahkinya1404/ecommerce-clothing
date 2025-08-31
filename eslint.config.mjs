// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Extend Next.js defaults
  ...compat.extends("next/core-web-vitals"),

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "next-env.d.ts",
    ],

    rules: {
      // 🔴 Disable errors blocking build
      "react/no-unescaped-entities": "off",
      // 🟡 Disable optional warnings
      "@next/next/no-img-element": "off",
      "import/no-anonymous-default-export": "off",
    },
  },
];
