/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#222222', // Slightly softer black for readability
        background: '#FFFFFF',
        'muted-text': '#555555', // A clear but not dominant gray (was #666)
        'subtle-bg': '#F9F9F9', // Very, very light gray, almost white
        'border-color': '#EAEAEA', // Subtle border color
        accent: '#000000', // Pure black for strong accents/CTA
        'accent-hover': '#333333',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
      }
    },
  },
  plugins: [],
};