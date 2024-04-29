/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#171818",
        extraGray: "#2e2f2f",
      },
      fontSize: {
        xxs: "0.6rem",
      },
      fontFamily: {
        nunito: ["Nunito"],
        montserrat: ["Montserrat"],
        cormorant: ["Cormorant"],
      },
      backgroundImage: {
        "holding-phone": "url('https://i.imgur.com/gTvIfM3.png')",
        gold: "url('https://i.imgur.com/0QSowlc.jpeg')",
      },
    },
  },
  plugins: [],
};
