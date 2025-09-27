/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ¡Vigila todos mis archivos de React!
  ],
  darkMode: 'class', // ¡Activa el modo oscuro cuando el HTML tenga la clase "dark"!
  theme: {
    extend: {
      // Próximamente: El ADN de "Camilo Tech Core" (colores, fuentes) vivirá aquí.
      colors: {
        'primary': '#7FFF00', // ✅ Color primario 
        'python': '#FFD700',
        'pandas': '#130754',
        'html': '#E34F26',
        'css': '#1572B6',
        'javascript': '#F7DF1E',
        'appsscript': '#4285F4',
        'excel': '#217346',
        'looker': '#4285F4',
        'secondary': '#A0E8B6'
      },
    },
  },
  plugins: [],
}


