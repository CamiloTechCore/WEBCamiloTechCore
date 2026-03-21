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

  const [dbStatus, setDbStatus] = useState('unknown');

  useEffect(() => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_API_BASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl) {
      setDbStatus('missing-endpoint');
      return;
    }
    if (!supabaseKey) {
      setDbStatus('missing-key');
      return;
    }

    const checkDbConnection = async () => {
      try {
        const endpoint = `${supabaseUrl.replace(/\/+$/, '')}/rest/v1/scr_contact_portafolio?select=id&limit=1`;
        const res = await fetch(endpoint, {
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            Accept: 'application/json',
          },
          cache: 'no-store',
        });

        if (!res.ok) {
          throw new Error(`Status ${res.status}`);
        }

        const rows = await res.json();
        setDbStatus(Array.isArray(rows) ? 'connected' : 'unhealthy');
      } catch (err) {
        console.error('Supabase health check error:', err);
        setDbStatus('offline');
      }
    };

    checkDbConnection();
    const interval = setInterval(checkDbConnection, 30_000); // cada 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-950">
      <div className="w-full text-center py-1 text-xs font-semibold bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100">
        {dbStatus === 'connected' && '✅ Conexión a base de datos OK'}
        {dbStatus === 'unhealthy' && '⚠️ Conexión establecida pero salud de DB no óptima'}
        {dbStatus === 'offline' && '❌ No se pudo conectar a la API/BD'}
        {dbStatus === 'missing-endpoint' && '❌ Falta VITE_API_BASE_URL en .env'}        {dbStatus === 'missing-key' && '❌ Falta VITE_SUPABASE_ANON_KEY en .env'}        {dbStatus === 'unknown' && '⏳ Verificando conexión con la API/BD...'}
      </div>
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