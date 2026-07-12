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
        // Brand blue scale — anchored on the logo (#3888d0 = primary-500).
        primary: {
          50: '#eef6fc',
          100: '#d9eaf7',
          200: '#bcd7f0',
          300: '#8fbde7',
          400: '#5ba2dc',
          500: '#3888d0', // logo blue
          600: '#2b6fb0', // text links / hover (AA on white)
          700: '#235a91',
          800: '#1f4b78',
          900: '#1c3f63',
        },
        // Navy = "ink": headings, nav, footer, dark sections. Same hue family as blue.
        navy: { DEFAULT: '#1e2a44', 900: '#131c30' },
        ink: '#17223B',   // heading text — deeper, richer navy-black
        // Amber = the single primary-CTA action color (complement of blue).
        accent: {
          DEFAULT: '#b45309', // CTA bg — white text 5.02:1 (AA)
          hover: '#92400e',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#b45309',
          700: '#92400e',
        },
        // WhatsApp keeps its recognizable green (platform convention).
        whatsapp: { DEFAULT: '#0f766e', bright: '#25D366' }, // AA with white text (5.47:1)
        // Warm neutral system — reads "heritage/considered", not "clinical dashboard".
        canvas: '#FBFAF6',    // off-white page background (not pure white)
        body: '#3B3F49',      // warm slate body copy
        muted: '#6E695F',     // warm grey meta (AA on canvas/mist/white)
        mist: '#F5F2EC',      // warm greige alt-section surface
        line: '#E7E2D8',      // warm hairline border
        brand: { blue: '#3888d0' }, // legacy alias for decorative gradients
        success: '#15803d',
        warning: '#b45309',
        error: '#b91c1c',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
        entrance: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(23,34,59,0.04), 0 12px 32px -12px rgba(23,34,59,0.10)',
      },
    },
  },
  plugins: [],
};
