// src/data/blogPosts.js

// 1. Importa la imagen desde su ruta relativa
import cognitiveScaffoldingImg from '../assets/cognitivescaffolding.png';
import iaHerramientaEducativaImg from '../assets/Artificial Analysis Intelligence Index v4.3.png';

export const posts = [
  {
    id: 1,
    slug: 'cognitivescaffolding',
    title: '5 pasos para el cognitive scaffolding',
    date: '02 de Agosto, 2025',
    summary: 'Este enfoque iterativo garantiza que el proceso de cognitive scaffolding sea dinámico y adaptativo, permitiendo que el aprendizaje sea un ciclo continuo de apoyo, práctica, retroalimentación y autonomía progresiva.',
    imageUrl: cognitiveScaffoldingImg,
  },
   {
    id: 2,
    slug: 'la-ia-como-herramienta-educativa',
    title: 'IA como erramienta educativa',
    date: '12 de Septiembre, 2026',
    summary: '¿Qué tanto la IA ha impactado mi modelo educativo? y ¿como mido por medio de sistemas de performace y curva laboral lo que realmente aprendo usando IA como asistente personal de estudio?',
    imageUrl: iaHerramientaEducativaImg,
  },
];


