// src/components/TechnologyCard.jsx

function TechnologyCard({ name, Icon, styling }) {
  // Construimos las clases de la tarjeta dinámicamente a partir de la prop 'styling'
  const cardClasses = `
    flex items-center gap-4 rounded-lg p-4 transition-all duration-300
    hover:-translate-y-1
    ${styling.gradient ? styling.gradient : (styling.bgColor || 'bg-gray-100 dark:bg-gray-800')}
    ${styling.borderColor ? `border-l-4 ${styling.borderColor}` : 'border-l-4 border-transparent'}
  `;

  // Construimos las clases para el icono
  const iconClasses = `
    h-8 w-8
    ${styling.iconColor || 'text-gray-700 dark:text-gray-300'}
  `;
  
  // Construimos las clases para el texto
  const textClasses = `
    font-medium
    ${styling.textColor || 'text-gray-800 dark:text-white'}
  `;

  return (
    <div className={cardClasses}>
      <Icon className={iconClasses} />
      <span className={textClasses}>{name}</span>
    </div>
  );
}

export default TechnologyCard;