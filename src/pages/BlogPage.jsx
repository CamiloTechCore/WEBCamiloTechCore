// src/pages/BlogPage.jsx
import { posts } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

function BlogPage() {
  return (
    <div className="bg-transparent py-16 md:py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
          >
            <FiArrowLeft /> Volver al Portafolio
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-teal-400 to-blue-500 mb-4">
            Un espacio de curiosidad
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Artículos, reflexiones y metodologías sobre andamiaje cognitivo, inteligencia artificial, analítica de datos y desarrollo de software.
          </p>
        </div>

        {/* Grid responsivo para las tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
