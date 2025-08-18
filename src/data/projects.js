// src/data/projects.js

// Importa tus imágenes de proyecto
import project1Img from '../assets/project1.png';

export const projects = [
  {
    id: 1,
    title: 'Portafolio Personal v1',
    description: 'Mi portafolio personal construido con React, Vite y Tailwind CSS, demostrando mis habilidades en desarrollo front-end y visualización de datos.',
    imageUrl: project1Img,
    tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Data Viz'],
    links: {
      github: 'https://github.com/tu-usuario/tu-repo',
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

