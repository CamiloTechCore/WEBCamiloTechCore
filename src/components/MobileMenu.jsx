// src/components/MobileMenu.jsx

import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiSun, FiMoon } from 'react-icons/fi';

function MobileMenu({ closeMenu, theme, toggleTheme }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeMenu();
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
      className="fixed inset-0 bg-white dark:bg-gray-900 z-40 p-8 flex flex-col items-center justify-between"
    >
      <ul className="flex flex-col items-center gap-8 text-2xl text-gray-800 dark:text-gray-200 mt-20">
        <li>
          <ScrollLink onClick={closeMenu} to="about" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-primary">
            {t('header.about')}
          </ScrollLink>
        </li>
        <li>
          <ScrollLink onClick={closeMenu} to="projects" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-primary">
            {t('header.projects')}
          </ScrollLink>
        </li>
        <li>
          <RouterLink onClick={closeMenu} to="/blog" className="cursor-pointer hover:text-primary">
            {t('header.blog')}
          </RouterLink>
        </li>
        <li>
          <ScrollLink onClick={closeMenu} to="contact" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-primary">
            {t('header.contact')}
          </ScrollLink>
        </li>
      </ul>

      <div className="flex items-center gap-6 mb-12">
        <button 
          onClick={toggleTheme}
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-800"
        >
          {theme === 'light' ? <FiMoon size={22} /> : <FiSun size={22} />}
        </button>
        <button
          onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
          className="text-lg font-semibold p-3 rounded-md bg-gray-100 dark:bg-gray-800"
        >
          {i18n.language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </motion.div>
  );
}

export default MobileMenu;