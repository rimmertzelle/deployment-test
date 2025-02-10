/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'light-green': '#E9FBE5',
        'dark-green': '#7ea474',
        'forest-green': '#619e52',
        'ground-brown': '#866E62',
      },
      ontFamily: {
        // Add a custom font
        lohit: ['"Lohit Tamil"', 'sans-serif'], // Add fallback fonts if desired
      },
    },
  },
  plugins: [],
}

