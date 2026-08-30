/** @type {import('tailwindcss').Config} */
/* Batch 5 — Ocean Theme Color System
   "Coastal Professional" — clean, calm, premium */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ── Background / Surface ─────────────────── */
        'surface-base':   '#FFFFFF',   /* main page bg */
        'surface-soft':  '#F8FAFC',   /* section alt bg */
        'surface-muted': '#EEF4F8',   /* secondary section */
        'surface-ocean': '#0B3D5C',   /* footer / deep CTA bg */
        /* ── Border ──────────────────────────────── */
        'border-subtle': 'rgba(15,45,92,0.10)',
        'border-strong': 'rgba(15,45,92,0.20)',
        'border-ocean': 'rgba(27,111,159,0.30)',
        /* ── Primary / Ocean (Deep) ─────────────── */
        'ocean-deep':   '#0B3D5C',   /* primary brand — deep ocean blue */
        'ocean-sea':    '#1E6F9F',   /* secondary — sea blue */
        'ocean-sky':    '#6FB3D2',   /* accent highlight — sky blue */
        'ocean-aqua':   '#5AE6CF',   /* special accent — soft aqua (use sparingly) */
        /* ── Warm Neutral / Sand (limited) ──────── */
        'sand':         '#F5E6D3',   /* coastal accent, tag bg */
        'sand-dark':    '#E8D5BE',   /* border accent, dividers */
        /* ── Functional ─────────────────────────── */
        'action-primary': '#0B3D5C',  /* button bg */
        'action-hover':  '#1E6F9F',  /* button hover */
        'action-text':   '#FFFFFF',  /* text on buttons */
        'success':       '#5AE6CF',  /* ready/available status */
        'info':          '#6FB3D2', /* helper text */
        /* ── Semantic — kept for component compat ── */
        brand: {
          50:  '#EEF4F8',
          100: '#E0EBF4',
          200: '#C2D9EC',
          300: '#9AC4E0',
          400: '#6FB3D2',   /* sky blue → ocean-sky */
          500: '#1E6F9F',   /* sea blue → ocean-sea */
          600: '#0B3D5C',   /* deep ocean → ocean-deep */
          700: '#08304A',
          800: '#062339',
          900: '#041729',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        'section': '6rem',     /* py-24 */
        'section-lg': '8rem',   /* py-32 */
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        'card': '1rem',
      },
      boxShadow: {
        'card':    '0 1px 3px rgba(15,45,92,0.08), 0 1px 2px rgba(15,45,92,0.06)',
        'card-hover': '0 10px 25px rgba(15,45,92,0.12), 0 4px 10px rgba(15,45,92,0.08)',
        'btn':     '0 2px 8px rgba(15,45,92,0.15)',
      },
    },
  },
  plugins: [],
};
