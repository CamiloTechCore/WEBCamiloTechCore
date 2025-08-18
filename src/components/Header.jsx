// src/components/Header.jsx

import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTranslation } from 'react-i18next'; // Importación correcta
import { Link } from 'react-scroll';

const Header = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(); // Lógica de traducción
  const onHomePage = location.pathname === '/';

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navigateAndScroll = (targetId) => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo(targetId, {
        spy: true,
        smooth: true,
        offset: -80,
        duration: 500,
      });
    }, 100);
  };

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center h-20 px-4">
        
        <div className="text-xl font-bold text-gray-800 dark:text-white">
    <Link 
    to="home" // ID de la sección a la que quieres ir
    spy={true} 
    smooth={true} 
    offset={-80} // Ajusta el offset si es necesario para que quede bien alineado
    duration={500} 
    className="cursor-pointer"
    >
    CamiloTechCore
    </Link>
    </div>

        <div className="hidden md:block">
          <ul className="flex items-center space-x-8 text-gray-600 dark:text-gray-300">
            <li>
              {onHomePage ? (
                // ✅ Texto traducido
                <ScrollLink to="about" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-blue-500 transition-colors duration-300" >{t('header.about')}</ScrollLink>
              ) : (
                <a onClick={() => navigateAndScroll('about')} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{t('header.about')}</a>
              )}
            </li>
            <li>
              {onHomePage ? (
                // ✅ Texto traducido
                <ScrollLink to="projects" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{t('header.projects')}</ScrollLink>
              ) : (
                <a onClick={() => navigateAndScroll('projects')} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{t('header.projects')}</a>
              )}
            </li>
             <li>
              {onHomePage ? (
                // ✅ Texto traducido
                <ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{t('header.contact')}</ScrollLink>
              ) : (
                <a onClick={() => navigateAndScroll('contact')} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{t('header.contact')}</a>
              )}
            </li>
            <li>
               {/* ✅ Texto traducido */}
              <RouterLink to="/blog" className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
                {t('header.blog')}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-5">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {theme === 'light' ? (
              <FiMoon size={20} className="text-black dark:text-black  hover:text-green-500" />
            ) : (
              <FiSun size={20} className="text-black dark:text-black  hover:text-green-500 " />
            )}
          </button>
          
          {/* ✅ Botón de idioma completamente funcional */}
          <button 
            onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
            className="text-sm font-semibold  dark:hover:bg-gray-700  text-black dark:text-black hover:text-green-500 p-2"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;