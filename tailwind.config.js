module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        softPurple:"#7d71d3",
      },
    },
    corePlugins: {
      aspectRatio: false,
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      // ...
    ],
  },
  plugins: [],
}
