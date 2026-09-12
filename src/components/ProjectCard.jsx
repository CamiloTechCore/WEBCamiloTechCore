// src/components/ProjectCard.jsx
import { FiGithub, FiExternalLink } from 'react-icons/fi';

function ProjectCard({ project }) { 
  const { title, description, imageUrl, tags, links } = project;

  return (
    <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-2xl border border-white/70 dark:border-white/10 overflow-hidden flex flex-col justify-between transform hover:-translate-y-1.5 transition-all duration-300">
      <div>
        <div className="overflow-hidden h-40 sm:h-44 bg-gray-100/50 dark:bg-gray-800/50 relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="p-4 sm:p-5">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white leading-snug">
            {title}
          </h3>
          
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-500/10 text-blue-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-400/10 dark:text-blue-300 border border-blue-500/20 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-2">
            {description}
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-5 pb-4 pt-1 border-t border-white/40 dark:border-white/10 flex justify-end items-center gap-3">
        {links?.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            title="Ver código en GitHub"
            className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 border border-gray-200/50 dark:border-gray-700/50 transition-all hover:scale-105"
          >
            <FiGithub size={18} />
          </a>
        )}
        {links?.live && (
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            title="Ver sitio web"
            className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 border border-gray-200/50 dark:border-gray-700/50 transition-all hover:scale-105"
          >
            <FiExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;