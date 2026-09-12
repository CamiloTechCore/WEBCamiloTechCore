// src/components/MobileMenu.jsx

import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

function MobileMenu({ closeMenu, theme, toggleTheme }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };

  const handleNavClick = (targetPath, targetId) => {
    closeMenu();
    navigate(targetPath);
    setTimeout(() => {
      scroller.scrollTo(targetId, {
        smooth: true,
        offset: -80,
        duration: 500,
      });
    }, 150);
  };

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md z-40 p-8 flex flex-col items-center justify-between"
    >
      <ul className="flex flex-col items-center gap-7 text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-16">
        <li>
          <button
            onClick={() => handleNavClick('/aboutme', 'about')}
            className="cursor-pointer hover:text-blue-500 transition-colors bg-transparent border-0 text-inherit p-0 font-inherit"
          >
            {t('header.about')}
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick('/projects', 'projects')}
            className="cursor-pointer hover:text-blue-500 transition-colors bg-transparent border-0 text-inherit p-0 font-inherit"
          >
            {t('header.projects')}
          </button>
        </li>
        <li>
          <RouterLink
            onClick={closeMenu}
            to="/blog"
            className="cursor-pointer hover:text-blue-500 transition-colors"
          >
            {t('header.blog')}
          </RouterLink>
        </li>
        <li>
          <button
            onClick={() => handleNavClick('/contact', 'contact')}
            className="cursor-pointer hover:text-blue-500 transition-colors bg-transparent border-0 text-inherit p-0 font-inherit"
          >
            {t('header.contact')}
          </button>
        </li>
      </ul>

      {/* Redes Sociales para Mobile Menu */}
      <div className="flex items-center gap-6 my-4">
        <a
          href="https://www.linkedin.com/in/camilotechcore/?locale=es"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors"
        >
          <FiLinkedin size={22} />
        </a>
        <a
          href="https://www.instagram.com/camilo.m.vera/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-pink-600 transition-colors"
        >
          <FiInstagram size={22} />
        </a>
        <a
          href="https://github.com/CamiloTechCore"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
        >
          <FiGithub size={22} />
        </a>
      </div>

      <div className="flex items-center gap-6 mb-8">
        <button 
          onClick={toggleTheme}
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:scale-105 transition-transform"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <FiMoon size={22} /> : <FiSun size={22} />}
        </button>
        <button
          onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
          className="text-base font-bold px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:scale-105 transition-transform"
        >
          {i18n.language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </motion.div>
  );
}

export default MobileMenu;