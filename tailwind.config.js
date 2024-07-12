/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle, rgba(242,138,46,1) 0%, rgba(242,138,46,0.5) 70%, rgba(242,138,46,0) 100%)",
        "custom-radial-gradient":
          "radial-gradient(circle, rgba(85,230,165,1) 0%, rgba(85,230,165,0.5) 70%, rgba(85,230,165,0) 100%)",
      },
    },
  },
  plugins: [],
};