import { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';

const Header = ({ theme, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const onHomePage = ['/', '/aboutme', '/about', '/projects', '/skills', '/contact'].includes(location.pathname.toLowerCase());
  
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

  const navigateToSection = (targetPath, targetId) => {
    navigate(targetPath);
    setTimeout(() => {
      scroller.scrollTo(targetId, {
        smooth: true,
        offset: -80,
        duration: 500,
      });
    }, 100);
  };
  
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onHomePage) {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <header className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl sticky top-0 z-50 shadow-[0_4px_20px_0_rgba(31,38,135,0.04)] border-b border-white/50 dark:border-white/10 transition-colors">
        <nav className="container mx-auto flex justify-between items-center h-20 px-4">
          
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            <a href="/" onClick={handleLogoClick} className="cursor-pointer tracking-tight">
              CamiloTechCore
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center space-x-7 text-gray-600 dark:text-gray-300 font-medium">
              <li>
                <button
                  onClick={() => navigateToSection('/aboutme', 'about')}
                  className="cursor-pointer hover:text-blue-500 transition-colors duration-300 bg-transparent border-0 text-inherit p-0 font-inherit"
                >
                  {t('header.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection('/projects', 'projects')}
                  className="cursor-pointer hover:text-blue-500 transition-colors duration-300 bg-transparent border-0 text-inherit p-0 font-inherit"
                >
                  {t('header.projects')}
                </button>
              </li>
              <li>
                <RouterLink to="/blog" className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
                  {t('header.blog')}
                </RouterLink>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection('/contact', 'contact')}
                  className="cursor-pointer hover:text-blue-500 transition-colors duration-300 bg-transparent border-0 text-inherit p-0 font-inherit"
                >
                  {t('header.contact')}
                </button>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Redes Sociales en la barra de navegación */}
            <div className="hidden sm:flex items-center space-x-1 border-r border-gray-200 dark:border-gray-700 pr-2 mr-1">
              <a
                href="https://www.linkedin.com/in/camilotechcore/?locale=es"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
                className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                <FiLinkedin size={19} />
              </a>
              <a
                href="https://www.instagram.com/camilo.m.vera/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="Instagram"
                className="p-2 text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                <FiInstagram size={19} />
              </a>
              <a
                href="https://github.com/CamiloTechCore"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
                className="p-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                <FiGithub size={19} />
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1.5">
              <button
                onClick={toggleTheme}
                aria-label="Cambiar tema"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors"
              >
                {theme === 'light' ? <FiMoon size={19} /> : <FiSun size={19} />}
              </button>
              <button
                onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
                className="text-xs font-bold px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 transition-colors"
              >
                {i18n.language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 z-50 text-gray-800 dark:text-gray-200"
              aria-label="Menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && <MobileMenu closeMenu={() => setIsMenuOpen(false)} theme={theme} toggleTheme={toggleTheme} />}
      </AnimatePresence>
    </>
  );
};

export default Header;