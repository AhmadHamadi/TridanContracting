import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          900: '#050505',
          soft: '#111113',
          800: '#161618',
          700: '#1E1E22',
          600: '#2A2A2F',
        },
        silver: {
          DEFAULT: '#C7CAD1',
          light: '#E7E9ee',
          mut: '#9BA0AA',
          dark: '#6E727C',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E4C56A',
          soft: '#D9B44A',
          dark: '#9E7E15',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
        prose: '72ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.06), 0 8px 30px rgba(0,0,0,0.08)',
        gold: '0 8px 30px rgba(201,162,39,0.25)',
        'gold-lg': '0 12px 50px -8px rgba(201,162,39,0.45)',
        coin: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 12px rgba(201,162,39,0.35)',
      },
      backgroundImage: {
        'gold-sheen': 'linear-gradient(135deg,#E4C56A 0%,#C9A227 45%,#9E7E15 100%)',
        'ink-radial': 'radial-gradient(120% 90% at 15% 0%, #1E1E22 0%, #0A0A0A 55%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
