// src/pages/BlogPage.jsx
import { posts } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

function BlogPage() {
  return (
    <div className="bg-transparent py-8 md:py-12 min-h-[calc(100vh-5rem)] flex flex-col justify-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
          >
            <FiArrowLeft /> Volver al Portafolio
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-teal-400 to-blue-500 mb-2">
            Un espacio de curiosidad
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
            Artículos, reflexiones y metodologías sobre andamiaje cognitivo, inteligencia artificial, analítica de datos y desarrollo de software.
          </p>
        </div>

        {/* Grid responsivo para las tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
