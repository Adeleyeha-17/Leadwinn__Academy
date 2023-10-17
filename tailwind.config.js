/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      padding: {
        "2.5" : "px"
      },
      fontSize: {
        "myXL" : "33px"
      }
      ,
      colors: {
        "lead-black" : "#001928",
        "head-black" : "#0E2A4C",
        "head-blue" : "#07F",
        "nav-blue" : "#ECF5FF",
        "footer-blue" : "#003B80",
        "home-gra" : "#012956",
        "home-gra-2" : "#2587F7"
      },
      backgroundImage: {
        "home" : "url(/wave.svg)"
      },
      margin: {
        "15" : "54.4px"
      },
      height: {
        "80": "80vh"
      }
    },
    },
  plugins: [
  ],
}