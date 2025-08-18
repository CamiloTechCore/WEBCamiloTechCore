// src/components/TechnologyCard.jsx

function TechnologyCard({ name, Icon, color }) {
  // Estilos dinámicos usando el color recibido
  const iconStyle = { color: `var(--color-${color})` };
  const borderStyle = { borderColor: `var(--color-${color})` };

  return (
    // Aplicamos el color al borde izquierdo y al pasar el ratón
    <div 
      className="group flex items-center gap-4 rounded-lg bg-gray-100 p-4 transition-all duration-300  hover:bg-green-400 dark:hover:bg-green-400 dark:bg-gray-800 border-l-4"
      style={{'--color-python': '#3776AB', '--color-pandas': '#130754', '--color-html': '#E34F26', '--color-css': '#1572B6', '--color-javascript': '#F7DF1E', '--color-appsscript': '#4285F4', '--color-excel': '#217346', '--color-looker': '#4285F4', borderColor: `var(--color-${color})`}}
    >
      <Icon className="h-8 w-8 transition-colors duration-300 group-hover:text-[var(--color-icon)]" style={{'--color-icon': `var(--color-${color})`}}/>
      <span className="font-medium text-gray-800 dark:text-white">{name}</span>
    </div>
  );
}

export default TechnologyCard;