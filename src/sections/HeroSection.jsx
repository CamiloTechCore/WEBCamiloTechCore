// src/sections/HeroSection.jsx

import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';

// Estas variantes las seguimos usando para la entrada de los elementos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  },
};

function HeroSection() {
  const { t } = useTranslation();
  const [text] = useTypewriter({
    words: [t('hero.subtitle1'), t('hero.subtitle2')],
    loop: 1, // Lo hará en un ciclo infinito
    typeSpeed: 120
  });

  return (
    <section id="home" className="h-screen flex items-center justify-center text-center bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center  text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-black uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-500
           to-blue-500"
        >
          CamiloTechCore
        </motion.h1>
        
        {/* ✅ 3. Reemplazamos el subtítulo y el cursor manual */}
        <motion.div 
          variants={itemVariants}
          className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mt-4 font-semibold h-16" // Le damos una altura fija para evitar saltos
        >
          <span>{text}</span>
          <Cursor cursorColor='#3b82f6' /> {/* Usamos el cursor de la librería */}
        </motion.div>
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
       {t('parragraps.tittleinit')}        
        </motion.p>
      </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;