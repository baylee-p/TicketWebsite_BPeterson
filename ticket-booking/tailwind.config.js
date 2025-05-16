/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            light: '#D1FAE5',  // Soft minty green (bg for sidebar, etc)
            dark: '#065F46',   // Dark green for titles
          },
          emerald: {
            500: '#10B981',    // Primary emerald green (buttons, accents)
            600: '#059669',    // Hover emerald (buttons, links)
          },
          green: {
            800: '#065F46',    // Dark green for headings (titles)
            700: '#047857',    // Slightly lighter green (subheadings)
            300: '#6EE7B7',    // Light green for borders/focus rings
            500: '#10B981',    // Standard green (can use for hover if needed)
          },
          neutral: {
            600: '#4B5563',    // Neutral gray for text
          },
          gray: {
            500: '#6B7280',    // Light gray for meta text
          },
        },
      },
    },
    plugins: [],
  };
  