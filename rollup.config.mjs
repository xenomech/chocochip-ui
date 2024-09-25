import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };
import tailwindcss from "tailwindcss";

import autoprefixer from "autoprefixer";
import alias from "@rollup/plugin-alias";

export default [
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
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        skip: ["react", "react-dom"],
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      alias({
        resolve: [".jsx", ".js", ".ts", ".tsx", ".css", ".scss"],
        entries: [{ find: "@", replacement: "./src" }],
      }),
      postcss({
        plugins: [tailwindcss, autoprefixer],
        extensions: [".css"],
        minimize: true,
        inject: true,
      }),
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
  {
    input: "dist/esm/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
