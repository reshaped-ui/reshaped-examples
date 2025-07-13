import { config } from "reshaped/config/postcss";

const output = {
  plugins: {
    ...config.plugins,
    "@tailwindcss/postcss": {},
  },
};

export default output;
