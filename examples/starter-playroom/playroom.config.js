import path from "node:path";

import loaderUtils from "loader-utils";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  title: "Reshaped Playroom",
  outputPath: "./dist/playroom",
  components: "./src/components.ts",
  frameComponent: "./src/FrameComponent.tsx",
  snippets: "./src/snippets.ts",
  themes: "./src/themes.ts",
  typeScriptFiles: ["./node_modules/reshaped/**/*.{ts,tsx}"],
  webpackConfig: () => ({
    module: {
      rules: [
        {
          // Pocess the JSX in `FrameComponent.tsx`.
          // Forces webpack-merge to create a new rule.
          test: /src.*\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "esbuild-loader",
            options: {
              target: "esnext",
              jsx: "automatic",
            },
          },
        },
        {
          // Playroom uses `webpack-merge` configured in such that it merges
          // rules based on the `test` key, but will not merge `include` keys.
          // Since it has a default rule for css files only including codemirror
          // we need to make sure to create a new css rule.
          // Hence the specific regex. The default one being `/\.css$/`.
          test: /(reshaped|\@fontsource\/inter).*\.css$/,
          exclude: /codemirror/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // Backward compatibility.
                // Allows us to use `styles.button` instead of `styles.default.button`.
                esModule: false,
              },
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: {
                  // Let Webpack determine whether it's a CSS module based on filename convention.
                  // *.module.css --> mode: local
                  // *.css --> mode: global
                  auto: true,

                  // This block ensure pre css-loader 7.x behaviour.
                  // default exports, no identifiers rewrite.
                  namedExport: false,
                  exportLocalsConvention: "as-is",

                  // css-loader [name] token will include the full basename, with `.module`.
                  // Resulting in classes like: `Button-module-root_NZJpo`.
                  // So we use `getLocalIdent` to remove it.
                  getLocalIdent: (
                    context /*: LoaderContext */,
                    localIdentName /*: string */,
                    localName /*: string */,
                  ) => {
                    const fileName = path.basename(
                      context.resourcePath,
                      ".module.css",
                    );
                    const hash = loaderUtils.getHashDigest(
                      context.resourcePath + localName,
                      "md5",
                      "base64",
                      5,
                    );

                    return `${fileName}-${localName}_${hash}`;
                  },
                },
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  config: path.resolve(
                    import.meta.dirname,
                    "postcss.config.js",
                  ),
                },
              },
            },
          ],
        },
      ],
    },
  }),
};
