/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        daRed: '#FD5B4F'
      }
    },
    
    fontSize: {
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '22': '22px',
      '24': '24px',
      '26': '26px',
      '32': '32px',
      '36': '36px',
      '40': '40px',
      '56': '56px'
    },
  },
  plugins: [],
}