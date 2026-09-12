// src/sections/HeroSection.jsx

import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
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
    words: [t('hero.subtitle1'), t('hero.subtitle2'), t('hero.subtitle3')],
    loop: 0, // Ciclo infinito
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center bg-transparent relative overflow-hidden py-20">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center p-8 sm:p-12 md:p-16 rounded-3xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-teal-400 to-blue-500 py-2"
          >
            CamiloTechCore
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mt-4 font-bold min-h-[3rem] flex items-center justify-center"
          >
            <span>{text}</span>
            <Cursor cursorColor='#3b82f6' />
          </motion.div>
          
          <motion.p 
            variants={itemVariants} 
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            {t('parragraps.tittleinit')}        
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;