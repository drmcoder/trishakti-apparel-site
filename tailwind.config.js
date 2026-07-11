/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Trishakti brand palette (from live-site CSS). Navy is primary, green the accent.
        navy: {
          DEFAULT: '#1a3e73',
          900: '#132d54',
          700: '#1a3e73',
          500: '#2b5aa0',
        },
        brand: {
          blue: '#1e73be',
          green: '#228b22',
          red: '#d7282b',
        },
        ink: '#1f2933',
        body: '#4a4a4a',
        mist: '#f2f2f2',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(16,24,40,0.06), 0 8px 24px rgba(16,24,40,0.06)',
      },
    },
  },
  plugins: [],
};
