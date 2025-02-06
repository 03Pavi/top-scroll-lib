import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "top-scroll",
  },
  external: ["react", "react-dom","motion"],
  plugins: [
      typescript({tsconfig: "tsconfig.json"})
  ]
});
