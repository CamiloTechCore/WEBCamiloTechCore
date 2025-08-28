// src/sections/AboutMeSection.jsx

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

// Asegúrate de que las rutas a tus imágenes sean correctas
import profile1 from '../assets/profile1.png'; 
import profile2 from '../assets/profile2.png';

function AboutMeSection() {
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { t } = useTranslation();
  // Hook para detectar si la sección está visible
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se dispara una sola vez
    threshold: 0.5,    // Se dispara cuando el 50% de la sección es visible
  });

  // useEffect para reaccionar cuando la sección entra en la vista
  useEffect(() => {
    if (inView && !hasAnimated) {
      // Inicia un temporizador para cambiar la imagen
      const timer = setTimeout(() => {
        setShowSecondImage(true);
        setHasAnimated(true); // Marca que la animación ya ocurrió
      }, 500); // 500ms de retraso después de ser visible

      // Limpieza del temporizador
      return () => clearTimeout(timer);
    }
  }, [inView, hasAnimated]);

  // Variantes para la animación de las imágenes
  const imageVariants = {
    initial: { opacity: 0, rotateY: -90 },
    animate: { opacity: 1, rotateY: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, rotateY: 90, transition: { duration: 0.5 } },
  };

  return (
    // Asignamos la referencia 'ref' a la sección para que 'useInView' la observe
    <section id="about" ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Columna de la Imagen */}
        <div className="w-full max-w-sm mx-auto h-96 flex items-center justify-center relative">
          <AnimatePresence initial={false}>
            {!showSecondImage ? (
              <motion.img
                key="image1" // La prop 'key' es crucial para AnimatePresence
                src={profile1}
                alt="Camilo - Analista de Datos"
                className="rounded-xl shadow-lg w-full absolute"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            ) : (
              <motion.img
                key="image2"
                src={profile2}
                alt="Camilo - Desarrollador Web"
                className="rounded-xl shadow-lg w-full absolute"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Columna del Texto */}
          <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">{t('header.about')}</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t('parragraps.tittle2')}</p>
          <br></br>
          <p><strong>Mercado Libre | Quality Monitor</strong></p><p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t('parragraps.tittle3')}</p>
          <br></br>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t('parragraps.tittle4')}</p>
          <br></br>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed"><strong>{t('hero.subtitle9')}</strong></p>
          <br></br>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed"><strong>{t('hero.subtitle10')} </strong> {t('hero.subtitle11')}</p>
          <br></br>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t('parragraps.tittle7')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Exportación por defecto para que pueda ser importado en HomePage.jsx
export default AboutMeSection;
