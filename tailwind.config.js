module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        'chip-fall': {
          '0%': { transform: 'translateY(-100%) rotate(0deg)', opacity: 0 },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        'chip-fall': 'chip-fall 3s infinite ease-in',
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
