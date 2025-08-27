// src/components/MobileMenu.jsx

import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Este componente recibe la función para cerrarse como prop
function MobileMenu({ closeMenu }) {
  const { t } = useTranslation();

  const menuVariants = {
    hidden: { x: '100%' }, // Empieza fuera de la pantalla a la derecha
    visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-white dark:bg-gray-900 z-40 p-8 flex flex-col items-center justify-center text-center"
    >
      <ul className="flex flex-col items-center gap-8 text-2xl text-gray-800 dark:text-gray-200">
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
    </motion.div>
  );
}

export default MobileMenu;