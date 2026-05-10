import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071528',
        midnight: '#0B1730',
        cyanite: '#67E8F9',
        aurora: '#8B5CF6',
        glacier: '#E7FBFF',
        mint: '#9FFFE0',
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'InterVariable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 20px 80px rgba(3, 12, 31, 0.22), inset 0 1px 0 rgba(255,255,255,0.55)',
        crystal: '0 0 36px rgba(103,232,249,0.28), 0 24px 80px rgba(139,92,246,0.18)',
      },
      backgroundImage: {
        'liquid-radial': 'radial-gradient(circle at 20% 10%, rgba(103,232,249,.42), transparent 30%), radial-gradient(circle at 80% 0%, rgba(139,92,246,.34), transparent 26%), linear-gradient(135deg, rgba(255,255,255,.82), rgba(255,255,255,.34))',
      },
    },
  },
  plugins: [],
} satisfies Config;
