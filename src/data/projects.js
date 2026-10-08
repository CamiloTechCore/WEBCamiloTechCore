// src/data/projects.js
//import { useTranslation } from 'react-i18next';
// Importa tus imágenes de proyecto
import project1Img from '../assets/project1.png';
import project2Img from '../assets/Project2.png';
import project3Img from '../assets/Project3.png';
import project4Img from '../assets/Project4.png';
import project5Img from '../assets/Project5.png';
import project6Img from '../assets/Project6.png';
//const { t } = useTranslation();
export const projects = [
  {
    id: 1,
    title: 'Portafolio Personal',
    description: 'Mi portafolio personal construido con React, Vite y Tailwind CSS, demostrando mis habilidades en desarrollo front-end y visualización de datos.',
    imageUrl: project1Img,
    tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Data Viz'],
    links: {
    },
  }, // <--- AQUÍ: Se añadió la llave de cierre y la coma
  {
    id: 2,
    title: 'AVA Lets - Plataforma para gestion y control de tareas',
    description: 'Esta herramienta permite la creacion y seguiemiento de tareas operativas, pensada para lideres de equipo y coordinadores de cuenta, AVA Lets busca optimizar los tiempos de gestion de actividades e implementar estrategias de control y gestion del tiempo de manera individual.',
    imageUrl: project2Img,
    tags: ['AppScripts', 'CSS', 'Sheets', 'Javascript', 'HTML'],
    links: {
      github: 'https://github.com/CamiloTechCore/AVA-Lents.git'
    },
  },
  {
    id: 3,
    title: 'P&PF | Finances',
    description: 'P&PF | Finances es una plataforma integral de gestión financiera diseñada para centralizar el control de ingresos, gastos y metas de ahorro con un enfoque en proyecciones de crecimiento patrimonial.',
    imageUrl: project3Img,
    tags: ['React 18 & Vite', 'Axios', 'Recharts', 'Javascript', 'HTML', 'jsPDF & AutoTable', 'Node' , 'Supabase', 'Bcrypt', 'Helmet & CORS'],
    links: {
      github: 'https://github.com/CamiloTechCore/ProfesionalPF/tree/main/ProfesionalPF',
    },
  },
  {
    id: 4,
    title: 'FlowMapper',
    description: 'FlowMapper es una herramienta avanzada para la visualización y análisis de flujos de datos, diseñada para ayudar a los usuarios a comprender patrones complejos y optimizar procesos mediante representaciones gráficas interactivas.',
    imageUrl: project4Img,
    tags: ['React 19 ', 'React Flow', 'Vite', 'Javascript', 'HTML', 'Google Apps Script', 'CSS'],
    links: {
      github: 'https://github.com/CamiloTechCore/FlowMapper',
    },
  },
  {
    id: 5,
    title: 'Drip',
    description: '**Daily Records for Individuals & Partners**: registros diarios para tus finanzas personales y en conjunto, Comparte tus buenos habitos de gasto y manten la racha para mejorar tu ahorro.',
    imageUrl: project5Img,
    tags: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'TanStack Query', 'Recharts', 'date-fns','jsPDF','Lucide React','React Router','Content Service','Google Sheets','Google Apps Script'],
    links: {
      live: 'https://drip-inky.vercel.app/',
      github: 'https://github.com/CamiloTechCore/Drip',
    },
  },
  {
    id: 6,
    title: 'CRM SST gestion documental',
    description: 'CRT SST gestion documental es una plataforma diseñada para la gestión eficiente de documentos relacionados con la seguridad y salud en el trabajo, facilitando el control y seguimiento de la documentación requerida.',
    imageUrl: project6Img,
    tags: ['React 18 ', 'Vite', 'Tailwind CSS', 'React Router v6', 'React Context + useReducer', 'fetch API nativa', 'Google Apps Script', 'typescript','Google Sheets','Google Drive','Gmail (GAS MailApp)','Vercel '],
    links: {
      github: 'https://github.com/CamiloTechCore/CRM_SST_Gestion',
    },
  }
];
  // Añade más proyectos aquí...
  // {
  //   id: 2,
  //   title: 'Dashboard de Análisis de Ventas',
  //   description: 'Un dashboard interactivo creado con Tableau y embebido en una página web para visualizar KPIs de ventas en tiempo real.',
  //   imageUrl: 'URL_o_import_de_la_imagen',
  //   tags: ['Tableau', 'SQL', 'Data Viz', 'React'],
  //   links: { ... }
  // }


