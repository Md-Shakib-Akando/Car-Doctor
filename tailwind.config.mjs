/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
    daisyui: {
        themes: ["light"],
    },
};
