import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';

import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "top-scroll-bar",
  },
  external: ["react", "react-dom","motion/react","framer-motion"],
  plugins: [
      typescript({tsconfig: "tsconfig.json"}),
      postcss({
        extract:true
      }),
  ]
});
