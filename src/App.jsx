// src/App.jsx
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage'; // 1. Importa la nueva página

function App() {
    // 1. Estado para el tema actual. Leemos el valor guardado en localStorage o usamos 'light' por defecto.
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // 2. Función para cambiar el tema. La pasaremos al Header.
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 3. useEffect para aplicar los cambios cuando el estado 'theme' cambie.
  useEffect(() => {
    const root = window.document.documentElement; // La etiqueta <html>
    
    // Eliminamos la clase anterior para evitar conflictos
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    
    // Añadimos la clase actual
    root.classList.add(theme);
    
    // Guardamos la preferencia en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-950">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} /> 
        </Routes>
      </main>
    </div>
  );
}
export default App;