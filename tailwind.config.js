/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  mode: "jit",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.content(),
  ],
}

