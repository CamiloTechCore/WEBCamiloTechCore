// src/components/BlogCard.jsx
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';

function BlogCard({ post }) {
  const { slug, title, date, summary, imageUrl, readTime, tags } = post;

  return (
    <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col justify-between transform hover:-translate-y-1.5 transition-all duration-300 group">
      <div>
        <Link to={`/blog/${slug}`} className="block overflow-hidden relative">
          <img
            src={imageUrl}
            alt={`Imagen para el post ${title}`}
            className="w-full h-52 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {tags && tags.length > 0 && (
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
              {tags.slice(0, 2).map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Link>

        <div className="p-6">
          <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
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

          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            <Link to={`/blog/${slug}`}>
              {title}
            </Link>
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
            {summary}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-800/60 mt-2">
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-2 font-semibold text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors group/link"
        >
          <span>Leer artículo completo</span>
          <FiArrowRight className="transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;
