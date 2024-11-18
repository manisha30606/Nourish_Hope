/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' }, // Adjust the height as needed
        },
      },
      animation: {
        updown: 'updown 3s ease-in-out infinite', // 3s duration, ease-in-out, and infinite loop
      },
    },
  },
  plugins: [],
};
