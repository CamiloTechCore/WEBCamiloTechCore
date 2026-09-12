// src/sections/AboutMeSection.jsx

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { FiTrendingUp, FiAward, FiBookOpen, FiLayers } from 'react-icons/fi';

// Rutas a imágenes
import profile1 from '../assets/profile1.png'; 
import profile2 from '../assets/profile2.png';

function AboutMeSection() {
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { t } = useTranslation();
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      const timer = setTimeout(() => {
        setShowSecondImage(true);
        setHasAnimated(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [inView, hasAnimated]);

  const imageVariants = {
    initial: { opacity: 0, scale: 0.95, rotateY: -90 },
    animate: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, scale: 0.95, rotateY: 90, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" ref={ref} className="py-8 md:py-12 min-h-[calc(100vh-5rem)] flex flex-col justify-center bg-transparent relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t('header.about')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mt-2.5 rounded-full"></div>
        </div>

        {/* Layout Paralelo: Columna Izquierda (Foto Cuadrada/Grande) + Columna Derecha (Mosaico Bento Grid de Vidrio Líquido) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-stretch">
          
          {/* Bloque Izquierdo: Foto Principal con Vidrio Líquido */}
          <div className="md:col-span-5 flex items-center justify-center relative min-h-[260px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[420px] rounded-3xl overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl p-4 sm:p-6 border border-white/60 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <AnimatePresence initial={false} mode="wait">
              {!showSecondImage ? (
                <motion.div
                  key="image1"
                  className="w-full h-full flex items-center justify-center"
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <img
                    src={profile1}
                    alt="Camilo - Analista de Datos"
                    className="max-h-[220px] sm:max-h-[260px] md:max-h-[320px] lg:max-h-[380px] w-auto object-contain rounded-2xl drop-shadow-2xl"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="image2"
                  className="w-full h-full flex items-center justify-center"
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <img
                    src={profile2}
                    alt="Camilo - Desarrollador Web"
                    className="max-h-[220px] sm:max-h-[260px] md:max-h-[320px] lg:max-h-[380px] w-auto object-contain rounded-2xl drop-shadow-2xl"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bloque Derecho: Mosaico Bento en Vidrio Líquido */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 md:gap-4">
            
            {/* Bloque 1 (Superior Horizontal - Ocupa 2 columnas): Visión */}
            <div className="sm:col-span-2 p-4 sm:p-5 md:p-6 rounded-3xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/70 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="p-2 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shadow-sm">
                  <FiTrendingUp size={18} />
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                  Visión & Trayectoria
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-2">
                {t('parragraps.tittle2')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-xs leading-relaxed">
                {t('parragraps.tittle4')}
              </p>
            </div>

            {/* Bloque 2 (Inferior Izquierdo): Mercado Libre */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/70 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-1.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shadow-sm">
                    <FiAward size={16} />
                  </span>
                  <div>
                    <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Experiencia</span>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      Mercado Libre
                    </h4>
                  </div>
                </div>
                <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 mb-1">Quality Monitor</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                  {t('parragraps.tittle3')}
                </p>
              </div>
            </div>

            {/* Columna Derecha con 2 Bloques Apilados */}
            <div className="flex flex-col gap-3.5 md:gap-4">
              
              {/* Bloque 3: Formación Continua */}
              <div className="p-4 sm:p-4.5 rounded-3xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/70 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="p-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm">
                    <FiBookOpen size={15} />
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                    {t('hero.subtitle9')} {t('hero.subtitle10')}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-3">
                  {t('parragraps.tittle7')}
                </p>
              </div>

              {/* Bloque 4: Consultoría de Software */}
              <div className="p-4 sm:p-4.5 rounded-3xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/70 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="p-1.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shadow-sm">
                    <FiLayers size={15} />
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                    {t('hero.subtitle12')}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-3">
                  {t('parragraps.tittle8')}
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
