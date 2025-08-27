// src/components/Header.jsx

import { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';

const Header = ({ theme, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const onHomePage = location.pathname === '/';
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navigateAndScroll = (targetId) => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo(targetId, {
        spy: true, smooth: true, offset: -80, duration: 500,
      });
    }, 100);
  };
  
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <nav className="container mx-auto flex justify-between items-center h-20 px-4">
          
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            <a href="/" onClick={handleLogoClick} className="cursor-pointer">
              CamiloTechCore
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center space-x-8 text-gray-600 dark:text-gray-300">
              <li>
                {onHomePage ? (
                  <ScrollLink to="about" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{t('header.about')}</ScrollLink>
                ) : (
                  <a onClick={() => navigateAndScroll('about')} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{t('header.about')}</a>
                )}
              </li>
              <li>
                {onHomePage ? (
                  <ScrollLink to="projects" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{t('header.projects')}</ScrollLink>
                ) : (
                  <a onClick={() => navigateAndScroll('projects')} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{t('header.projects')}</a>
                )}
              </li>
              <li>
                <RouterLink to="/blog" className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
                  {t('header.blog')}
                </RouterLink>
              </li>
              <li>
                {onHomePage ? (
                  <ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{t('header.contact')}</ScrollLink>
                ) : (
                  <a onClick={() => navigateAndScroll('contact')} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{t('header.contact')}</a>
                )}
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex items-center space-x-2">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                {/* ✅ ERROR CORREGIDO: Se eliminó la barra inclinada '/' extra */}
                {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
              </button>
              <button onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')} className="text-sm font-semibold p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                {i18n.language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 z-50"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && <MobileMenu closeMenu={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;