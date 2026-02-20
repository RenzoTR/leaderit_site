import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
        'bg-dark': 'var(--color-bg-dark)',
        'text-inverse': 'var(--color-text-inverse)'
      },
      boxShadow: {
        soft: '0 12px 40px -24px rgba(0, 0, 0, 0.3)'
      }
    }
  },
  plugins: []
};

export default config;
