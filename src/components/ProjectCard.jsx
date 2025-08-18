// src/components/ProjectCard.jsx
import { FiGithub, FiExternalLink } from 'react-icons/fi';

function ProjectCard({ project }) { 
  const { title, description, imageUrl, tags, links } = project;

  return (
    // ✅ VERIFICADO: Todos los atributos aquí y abajo usan 'className'
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-200">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-700 dark:text-gray-400 mb-4">{description}</p>
        
        <div className="flex justify-end gap-4">
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <FiGithub size={24} />
          </a>
          <a href={links.live} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <FiExternalLink size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;