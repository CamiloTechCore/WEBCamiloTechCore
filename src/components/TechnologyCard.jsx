// src/components/TechnologyCard.jsx

function TechnologyCard({ name, Icon, styling }) {
  const cardClasses = `
    group relative flex flex-col items-center justify-center p-6 rounded-3xl transition-all duration-300
    bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl
    border border-white/60 dark:border-white/10
    shadow-[0_4px_20px_0_rgba(31,38,135,0.05)] dark:shadow-[0_4px_20px_0_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_32px_0_rgba(31,38,135,0.12)] dark:hover:shadow-[0_12px_32px_0_rgba(0,0,0,0.5)]
    hover:-translate-y-2
    ${styling.borderColor ? `hover:${styling.borderColor}` : 'hover:border-blue-400/80'}
  `;

  const iconContainerClasses = `
    p-3.5 rounded-2xl mb-3.5 transition-transform duration-300 group-hover:scale-110 shadow-sm
    ${styling.bgColor || 'bg-gray-100/80 dark:bg-gray-800/80'}
  `;

  const iconClasses = `
    h-10 w-10
    ${styling.iconColor || 'text-gray-700 dark:text-gray-300'}
  `;

  const textClasses = `
    text-sm font-bold text-center text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors
  `;

  return (
    <div className={cardClasses}>
      <div className={iconContainerClasses}>
        <Icon className={iconClasses} />
      </div>
      <span className={textClasses}>{name}</span>
    </div>
  );
}

export default TechnologyCard;