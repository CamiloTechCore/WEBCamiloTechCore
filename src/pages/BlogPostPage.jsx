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
          <p>El andamiaje cognitivo (cognitive scaffolding) es una estrategia pedagógica esencial que facilita el aprendizaje al proporcionar apoyo estructurado y temporal a los estudiantes. Este enfoque se basa en cinco claves interconectadas que, al aplicarse de manera iterativa, construyen un flujo de aprendizaje lógico y autónomo. El proceso inicia con la clara definición de objetivos, seguido de la provisión de apoyo gradual y diferenciado. A medida que el aprendiz avanza, se fomenta la práctica independiente y se brinda retroalimentación específica y oportuna. El ciclo culmina con la retirada progresiva del andamiaje, permitiendo que el estudiante internalice las habilidades y logre la competencia de manera autónoma. Este método no solo mejora el rendimiento, sino que también fomenta la meta-cognición, la auto-regulación y la confianza, transformando al estudiante en un aprendiz activo y capaz de enfrentar nuevos desafíos.</p>
          <ul>
            <li>
            <p><b>Clave 1: La Meta - Definición Clara de Objetivos.</b> Este pilar establece la dirección, desglosando una meta grande en             sub-objetivos manejables para crear una hoja de ruta clara.</p>
            </li>
            <li>
            <p><b>Clave 2: El Andamio - Provisión de Apoyo Gradual.</b> Aquí se brinda el soporte necesario, desde la demostración inicial hasta el             uso de herramientas, adaptando la ayuda a las necesidades del aprendiz.</p>
            </li>
            <li>
            <p><b>Clave 3: El Aprendiz en Acción - Fomento de la Práctica Independiente.</b> Se anima al estudiante a aplicar lo aprendido de manera            autónoma, promoviendo la auto-evaluación y la meta-cognición.</p>
            </li>
            <li>
            <p><b>Clave 4: La Brújula - Retroalimentación Específica y Oportuna.</b> Se proporciona feedback constructivo y procesal para que el            aprendiz comprenda sus errores y sepa cómo corregirlos.</p>
            </li>
            <li>
            <p><b>Clave 5: La Autonomía - Retirada Gradual del Andamiaje.</b> El apoyo se retira progresivamente a medida que el aprendiz demuestra             competencia, asegurando la transferencia del conocimiento y la independencia a largo plazo.</p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default BlogPostPage;
