/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        screens: {
            md: '1024px',
            sm: '624px',
        },
    },
    plugins: [],
};
