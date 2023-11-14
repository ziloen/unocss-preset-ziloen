import { typescript, format } from "@ziloen/eslint-config"

export default [
  ...typescript({ tsconfigPath: "./tsconfig.json" }),
  ...format
]
