// src/pages/BlogPostPage.jsx
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/blogPosts';
import { FiArrowLeft, FiClock, FiCalendar, FiTag } from 'react-icons/fi';

function BlogPostPage() {
  // 1. Usamos useParams para obtener el 'slug' de la URL
  const { slug } = useParams();

  // 2. Buscamos el post correspondiente en nuestros datos
  const post = posts.find(p => p.slug === slug);

  // 3. Manejamos el caso de que el post no se encuentre
  if (!post) {
    return (
      <div className="text-center py-32 dark:text-white px-4">
        <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">El artículo que estás buscando no existe o fue movido.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
          <FiArrowLeft /> Volver al Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="py-16 md:py-24 bg-transparent min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors">
            <FiArrowLeft />
            Volver a todos los artículos
          </Link>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800/40"
              >
                <FiTag size={12} />
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
          <span className="inline-flex items-center gap-1.5">
            <FiCalendar />
            {post.date}
          </span>
          {post.readTime && (
            <span className="inline-flex items-center gap-1.5">
              <FiClock />
              {post.readTime}
            </span>
          )}
        </div>

        {/* Imagen destacada */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-10 border border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
          <img
            src={post.imageUrl}
            alt={`Imagen para ${post.title}`}
            className="w-full max-h-[480px] object-cover object-center"
          />
        </div>

        {/* Resumen destacado / Intro */}
        {post.summary && (
          <div className="p-6 mb-8 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border-l-4 border-blue-500 text-gray-700 dark:text-gray-200 font-medium text-lg leading-relaxed">
            {post.summary}
          </div>
        )}

        {/* Introducción adicional si existe */}
        {post.intro && (
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            {post.intro}
          </p>
        )}

        {/* Secciones dinámicas */}
        {post.sections && post.sections.map((section, sIdx) => (
          <section key={sIdx} className="mb-10">
            {section.heading && (
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                {section.heading}
              </h2>
            )}

            {section.paragraphs && section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {p}
              </p>
            ))}

            {section.items && (
              <div className="space-y-4 my-6">
                {section.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Conclusión */}
        {post.conclusion && (
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border border-green-500/20 dark:border-blue-500/20">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">💡 Reflexión clave</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{post.conclusion}</p>
          </div>
        )}

        {/* Footer navegación */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 font-semibold transition-colors"
          >
            <FiArrowLeft /> Ver más artículos
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogPostPage;
