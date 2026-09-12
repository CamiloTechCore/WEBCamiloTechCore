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
    <section id="about" ref={ref} className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t('header.about')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Layout Paralelo: Columna Izquierda (Foto Cuadrada/Grande) + Columna Derecha (Mosaico Bento Grid de Vidrio Líquido) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Bloque Izquierdo: Foto Principal con Vidrio Líquido */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] rounded-3xl overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl p-6 sm:p-8 border border-white/60 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
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
                    className="max-h-[340px] sm:max-h-[380px] lg:max-h-[420px] w-auto object-contain rounded-2xl drop-shadow-2xl"
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
                    className="max-h-[340px] sm:max-h-[380px] lg:max-h-[420px] w-auto object-contain rounded-2xl drop-shadow-2xl"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bloque Derecho: Mosaico Bento en Vidrio Líquido */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Bloque 1 (Superior Horizontal - Ocupa 2 columnas): Visión */}
            <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/70 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shadow-sm">
                  <FiTrendingUp size={22} />
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Visión & Trayectoria
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
                {t('parragraps.tittle2')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                {t('parragraps.tittle4')}
              </p>
            </div>

            {/* Bloque 2 (Inferior Izquierdo): Mercado Libre */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/70 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shadow-sm">
                    <FiAward size={22} />
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Experiencia</span>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      Mercado Libre
                    </h4>
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Quality Monitor</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {t('parragraps.tittle3')}
                </p>
              </div>
            </div>

            {/* Columna Derecha con 2 Bloques Apilados */}
            <div className="flex flex-col gap-5">
              
              {/* Bloque 3: Formación Continua */}
              <div className="p-5 sm:p-6 rounded-3xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/70 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm">
                    <FiBookOpen size={18} />
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                    {t('hero.subtitle9')} {t('hero.subtitle10')}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-4">
                  {t('parragraps.tittle7')}
                </p>
              </div>

              {/* Bloque 4: Consultoría de Software */}
              <div className="p-5 sm:p-6 rounded-3xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/70 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shadow-sm">
                    <FiLayers size={18} />
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                    {t('hero.subtitle12')}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-4">
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
