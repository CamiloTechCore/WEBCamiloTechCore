// src/data/projects.js
//import { useTranslation } from 'react-i18next';
// Importa tus imágenes de proyecto
import project1Img from '../assets/project1.png';
//const { t } = useTranslation();
export const projects = [
  {
    id: 1,
    title: 'Portafolio Personal',
    description: 'Mi portafolio personal construido con React, Vite y Tailwind CSS, demostrando mis habilidades en desarrollo front-end y visualización de datos.',
    imageUrl: project1Img,
    tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Data Viz'],
    links: {
      github: 'https://github.com/CamiloTechCore',
      live: 'https://tu-dominio.dev',
    },
  },
  // Añade más proyectos aquí...
  // {
  //   id: 2,
  //   title: 'Dashboard de Análisis de Ventas',
  //   description: 'Un dashboard interactivo creado con Tableau y embebido en una página web para visualizar KPIs de ventas en tiempo real.',
  //   imageUrl: 'URL_o_import_de_la_imagen',
  //   tags: ['Tableau', 'SQL', 'Data Viz', 'React'],
  //   links: { ... }
  // }
];

