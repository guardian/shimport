import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [{ file: pkg.main, format: "es", outDir: "dist" }],
    plugins: [
      typescript(),
      terser(),
      {
        transformBundle(code) {
          return {
            code: code.replace("alert", "(0,eval)"),
            map: null,
          };
        },
      },
      filesize(),
    ],
  },
];
