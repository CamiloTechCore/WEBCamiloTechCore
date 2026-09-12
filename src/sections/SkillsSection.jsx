// src/sections/SkillsSection.jsx

import TechnologyCard from '../components/TechnologyCard';
import { useTranslation } from 'react-i18next';
import BackgroundChart from '../components/BackgroundChart';

// Importaciones de iconos
import ReactIcon from '../assets/icons/react.svg?react';
import PythonIcon from '../assets/icons/python.svg?react';
import PandasIcon from '../assets/icons/pandas.svg?react';
import JavascriptIcon from '../assets/icons/js.svg?react';
import Html5Icon from '../assets/icons/html5.svg?react';
import Css3Icon from '../assets/icons/css3.svg?react';
import AppsScriptIcon from '../assets/icons/googleappsscript.svg?react';
import GoogleSheetsIcon from '../assets/icons/googlesheets.svg?react';
import ExcelIcon from '../assets/icons/excel.svg?react'; 
import LookerIcon from '../assets/icons/looker.svg?react';
import GcpIcon from '../assets/icons/GCP.svg?react';

const technologies = [
  { 
    name: 'React', 
    Icon: ReactIcon, 
    styling: {
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/40',
      borderColor: 'border-cyan-400',
      iconColor: 'text-cyan-500'
    } 
  },
  { 
    name: 'JavaScript', 
    Icon: JavascriptIcon, 
    styling: {
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/40',
      borderColor: 'border-yellow-400',
      iconColor: 'text-yellow-500'
    } 
  },
  { 
    name: 'Python', 
    Icon: PythonIcon, 
    styling: {
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/40',
      borderColor: 'border-python',
      iconColor: 'text-python'
    } 
  },
  { 
    name: 'Pandas', 
    Icon: PandasIcon, 
    styling: {
      bgColor: 'bg-blue-50 dark:bg-blue-950/40',
      borderColor: 'border-pandas',
      iconColor: 'text-pandas'
    } 
  },
  { 
    name: 'HTML5', 
    Icon: Html5Icon, 
    styling: {
      bgColor: 'bg-orange-50 dark:bg-orange-950/40',
      borderColor: 'border-html',
      iconColor: 'text-html'
    } 
  },
  { 
    name: 'CSS3 / Tailwind', 
    Icon: Css3Icon, 
    styling: {
      bgColor: 'bg-sky-50 dark:bg-sky-950/40',
      borderColor: 'border-css',
      iconColor: 'text-css'
    } 
  },
  { 
    name: 'Google Cloud Platform', 
    Icon: GcpIcon, 
    styling: {
      bgColor: 'bg-red-50 dark:bg-red-950/40',
      borderColor: 'border-red-400',
      iconColor: 'text-red-500'
    } 
  },
  { 
    name: 'Apps Script', 
    Icon: AppsScriptIcon, 
    styling: {
      bgColor: 'bg-sky-50 dark:bg-sky-950/40',
      borderColor: 'border-appsscript',
      iconColor: 'text-appsscript'
    } 
  },
  { 
    name: 'Google Sheets', 
    Icon: GoogleSheetsIcon, 
    styling: {
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/40',
      borderColor: 'border-emerald-500',
      iconColor: 'text-emerald-600'
    } 
  },
  { 
    name: 'Excel Avanzado', 
    Icon: ExcelIcon, 
    styling: {
      bgColor: 'bg-green-50 dark:bg-green-950/40',
      borderColor: 'border-excel',
      iconColor: 'text-excel'
    } 
  },
  { 
    name: 'Looker Studio', 
    Icon: LookerIcon, 
    styling: {
      bgColor: 'bg-blue-50 dark:bg-blue-950/40',
      borderColor: 'border-looker',
      iconColor: 'text-looker'
    } 
  },
];

function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-8 md:py-12 min-h-[calc(100vh-5rem)] flex flex-col justify-center bg-transparent relative overflow-hidden scroll-mt-20">
      {/* Gráfica de fondo suave con línea de tendencia */}
      <BackgroundChart />
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t('skills.title')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-2.5 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto text-xs sm:text-sm">
            Stack tecnológico enfocado en análisis cuantitativo, automatización de flujos de trabajo y desarrollo frontend reactivo.
          </p>
        </div>
        
        {/* Mosaico de 4 columnas en pantallas medianas/grandes (Grid 4xN) con vidrio líquido */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.name} name={tech.name} Icon={tech.Icon} styling={tech.styling} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;