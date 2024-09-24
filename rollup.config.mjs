import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };
import terser from "@rollup/plugin-terser";

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.ts", "**/*.test.tsx", "**/*.stories.tsx"],
      }),
      postcss({
        extensions: [".css", ".scss"],
        extract: false,
        inject: true,
      }),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: packageJson.types, format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|scss)$/],
  },
];

export default config;
