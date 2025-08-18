// src/pages/BlogPage.jsx
import { posts } from '../data/blogPosts';
import BlogCard from '../components/BlogCard'; // Importamos la tarjeta

function BlogPage() {
  return (
    <div className="bg-white dark:bg-gray-950 py-24 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-black uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-500
           to-blue-500 text-center">Un espacio de curiosidad</h1>
           <br></br>
           <br></br>
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
