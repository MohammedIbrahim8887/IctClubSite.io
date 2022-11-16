/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            colors: {
                DarkBlue: "#2F2E41",
                SunsetYellow: "#F9A826",
            },
        },
        fontFamily: {
            sans: "Poppins,Inter,Helvetica, Arial, sans-serif",
        },
        backgroundImage: {
            'hero-pattern': "url('/img/Web-Header-Background.svg')",

        }

    },
    plugins: [],
};