/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#C9A86A',  /* Batch 1 — warm gold */
          600: '#B89458',  /* Batch 1 — warm gold */
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          surface: {
          base: '#0E0F12',
          raised: '#1A1B1F',
          deep: '#07080A',
        },
        accent: {
          primary: '#C9A86A',
          hover: '#D4B576',
          tint: 'rgba(201,168,106,0.12)',
        },
        action: {
          primary: '#D4B576',
          text: '#0E0F12',
        },
        success: '#5A8A6A',
        info: '#6B8FA8',
        slate: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          },
        },
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
