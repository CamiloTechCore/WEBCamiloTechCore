// src/sections/SkillsSection.jsx
import TechnologyCard from '../components/TechnologyCard';
// 2. Importar los SVGs como componentes de React (¡magia de Vite!)
import PandasIcon from '../assets/icons/pandas.svg?react';
import ExcelIcon from '../assets/icons/googlesheets.svg?react';
import LookerIcon from '../assets/icons/looker.svg?react';
import AppsScriptIcon from '../assets/icons/googleappsscript.svg?react';
import JavascriptIcon from '../assets/icons/js.svg?react';
import PythonIcon from '../assets/icons/python.svg?react';
import Html5Icon from '../assets/icons/html5.svg?react';
import Css3Icon from '../assets/icons/css3.svg?react';
import BackgroundChart from '../components/BackgroundChart';
import { useTranslation } from 'react-i18next';


// 3. Definir los datos de las tecnologías
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
    <section id="skills" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4">
      <BackgroundChart type="bar" className="container " />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white">
          {t('hero.subtitle8')}
        </h2>
        
        {/* 4. Crear el grid responsivo y mapear los datos */}
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.name} name={tech.name} Icon={tech.Icon} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

export default SkillsSection;