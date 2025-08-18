// src/components/BlogCard.jsx
import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  // Desestructuramos el post para un acceso más fácil
  const { slug, title, date, summary, imageUrl } = post;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <Link to={`/blog/${slug}`}>
        <img src={imageUrl} alt={`Imagen para el post ${title}`} className="w-full h-56 object-cover" />
      </Link>
      <div className="p-6">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</p>
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          <Link to={`/blog/${slug}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{summary}</p>
        <div className="text-right">
          <Link to={`/blog/${slug}`} className="font-semibold text-primary hover:underline">
            Leer más...
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
