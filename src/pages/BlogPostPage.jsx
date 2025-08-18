// src/pages/BlogPostPage.jsx
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/blogPosts';
import { FiArrowLeft } from 'react-icons/fi';

function BlogPostPage() {
  // 1. Usamos useParams para obtener el 'slug' de la URL
  const { slug } = useParams();

  // 2. Buscamos el post correspondiente en nuestros datos
  const post = posts.find(p => p.slug === slug);

  // 3. Manejamos el caso de que el post no se encuentre
  if (!post) {
    return (
      <div className="text-center py-24 dark:text-white">
        <h1 className="text-4xl font-bold">Post no encontrado</h1>
        <Link to="/blog" className="text-primary hover:underline mt-4 inline-block">Volver al Blog</Link>
      </div>
    );
  }

  return (
    <article className="py-24 bg-white dark:bg-gray-950 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="flex items-center gap-2 text-primary mb-8 hover:underline">
          <FiArrowLeft />
          Volver a todos los posts
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">{post.date}</p>
        <img src={post.imageUrl} alt={`Imagen para ${post.title}`} className="w-full rounded-lg shadow-lg mb-8" />
        <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
          {/* Aquí iría el contenido completo del post. Por ahora usamos el resumen. */}
          <p>{post.summary}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
        </div>
      </div>
    </article>
  );
}

export default BlogPostPage;
