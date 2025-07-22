// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      keyframes: {
        'chip-fall': {
          '0%': { transform: 'translateY(-100%) rotate(0deg)', opacity: 0 },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: 1 },
        },
        'logo-pop': {
          '0%': { transform: 'translateY(100%) scale(0.5)', opacity: 0 },
          '100%': { transform: 'translateY(0) scale(1)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'chip-fall': 'chip-fall 3s infinite ease-in',
        'logo-pop': 'logo-pop 1s ease-out',
        'fade-in': 'fade-in 2s ease-in',
      },
    },
  },
  plugins: [],
};
