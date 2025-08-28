// src/sections/SkillsSection.jsx

import TechnologyCard from '../components/TechnologyCard';
import { useTranslation } from 'react-i18next';
import BackgroundChart from '../components/BackgroundChart';

// Importaciones de iconos
import PandasIcon from '../assets/icons/pandas.svg?react';
import ExcelIcon from '../assets/icons/excel.svg?react'; 
import LookerIcon from '../assets/icons/looker.svg?react';
import AppsScriptIcon from '../assets/icons/googleappsscript.svg?react';
import JavascriptIcon from '../assets/icons/js.svg?react';
import PythonIcon from '../assets/icons/python.svg?react';
import Html5Icon from '../assets/icons/html5.svg?react';
import Css3Icon from '../assets/icons/css3.svg?react';

// Si usaste Framer Motion para la "nube", estas variantes podrían estar aquí.
// Si las ves, elimínalas o coméntalas, no son necesarias para las TechnologyCards.
/*
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};
*/

const technologies = [
  { 
    name: 'Python', 
    Icon: PythonIcon, 
    styling: {
      gradient: 'bg-gradient-to-br from-yellow-300 to-blue-500',
      iconColor: 'text-white',
      textColor: 'text-white'
    } 
  },
  { 
    name: 'Pandas', 
    Icon: PandasIcon, 
    styling: {
      bgColor: 'bg-indigo-50 dark:bg-gray-800',
      borderColor: 'border-pandas',
      iconColor: 'text-pandas'
    } 
  },
  { 
    name: 'HTML5', 
    Icon: Html5Icon, 
    styling: {
      bgColor: 'bg-orange-50 dark:bg-gray-800',
      borderColor: 'border-html',
      iconColor: 'text-html'
    } 
  },
  { 
    name: 'CSS3', 
    Icon: Css3Icon, 
    styling: {
      bgColor: 'bg-blue-50 dark:bg-gray-800',
      borderColor: 'border-css',
      iconColor: 'text-css'
    } 
  },
  { 
    name: 'JavaScript', 
    Icon: JavascriptIcon, 
    styling: {
      bgColor: 'bg-yellow-50 dark:bg-gray-800',
      borderColor: 'border-yellow-400',
      iconColor: 'text-yellow-400'
    } 
  },
  { 
    name: 'Apps Script', 
    Icon: AppsScriptIcon, 
    styling: {
      bgColor: 'bg-sky-50 dark:bg-gray-800',
      borderColor: 'border-appsscript',
      iconColor: 'text-appsscript'
    } 
  },
  { 
    name: 'Excel Avanzado', 
    Icon: ExcelIcon, 
    styling: {
      bgColor: 'bg-green-50 dark:bg-gray-800',
      borderColor: 'border-excel',
      iconColor: 'text-excel'
    } 
  },
  { 
    name: 'Looker Studio', 
    Icon: LookerIcon, 
    styling: {
      bgColor: 'bg-blue-50 dark:bg-gray-800',
      borderColor: 'border-looker',
      iconColor: 'text-looker'
    } 
  },
];

function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      
      <BackgroundChart type="bar" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-12">
          {t('skills.title')}
        </h2>
        
        {/* ✅ ESTE ES EL ÚNICO BLOQUE QUE DEBE RENDERIZAR LAS HABILIDADES */}
        {/* Asegúrate de que no haya otro div o span que intente hacer una "nube de palabras" aquí */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.name} name={tech.name} Icon={tech.Icon} styling={tech.styling} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;