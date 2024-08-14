/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xl: { max: "1440px" },
            xls: { max: "1300px" },
            lg: { max: "1024px" },
            md: { max: "768px" },
            mds: { max: "700px" },
            sm: { max: "425px" },
            xs: { max: "375px" },
            xxs: { max: "320px" },
        },
        extend: {
            colors: {
                red: "hsl(14, 86%, 42%)",
                green: "hsl(159, 69%, 38%)",
                customRose: {
                    50: "hsl(20, 50%, 98%)",
                    100: "hsl(13, 31%, 94%)",
                    300: "hsl(14, 25%, 72%)",
                    400: "hsl(7, 20%, 60%)",
                    500: "hsl(12, 20%, 44%)",
                    900: "hsl(14, 65%, 9%)",
                },
            },
            fontFamily: {
                sans: ["Red Hat Text", "sans-serif"],
            },
        },
    },
    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: "10px" },
            });
        }),
    ],
};
