// src/data/projects.js
//import { useTranslation } from 'react-i18next';
// Importa tus imágenes de proyecto
import project1Img from '../assets/project1.png';
import project2Img from '../assets/Project2.png';
//const { t } = useTranslation();
export const projects = [
  {
    id: 1,
    title: 'Portafolio Personal',
    description: 'Mi portafolio personal construido con React, Vite y Tailwind CSS, demostrando mis habilidades en desarrollo front-end y visualización de datos.',
    imageUrl: project1Img,
    tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Data Viz'],
    links: {
      github: 'https://github.com/CamiloTechCore/CamiloTechCore',
      live: 'https://camilotechcore.vercel.app/',
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


