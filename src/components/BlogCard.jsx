// src/components/BlogCard.jsx
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';

function BlogCard({ post }) {
  const { slug, title, date, summary, imageUrl, readTime, tags } = post;

  return (
    <article className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-2xl border border-white/70 dark:border-white/10 overflow-hidden flex flex-col justify-between transform hover:-translate-y-1.5 transition-all duration-300 group">
      <div>
        <Link to={`/blog/${slug}`} className="block overflow-hidden relative">
          <img
            src={imageUrl}
            alt={`Imagen para el post ${title}`}
            className="w-full h-40 sm:h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {tags && tags.length > 0 && (
            <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
              {tags.slice(0, 2).map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Link>

        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-3 text-[11px] font-medium text-gray-500 dark:text-gray-400 mb-2">
            <span className="flex items-center gap-1">
              <FiCalendar />
              {date}
            </span>
            {readTime && (
              <span className="flex items-center gap-1">
                <FiClock />
                {readTime}
              </span>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            <Link to={`/blog/${slug}`}>
              {title}
            </Link>
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-2">
            {summary}
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-5 pb-4 pt-1 border-t border-white/40 dark:border-white/10">
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-1.5 font-semibold text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors group/link"
        >
          <span>Leer artículo completo</span>
          <FiArrowRight className="transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;
