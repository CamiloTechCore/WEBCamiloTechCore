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
    readTime: '5 min de lectura',
    summary: 'Este enfoque iterativo garantiza que el proceso de cognitive scaffolding sea dinámico y adaptativo, permitiendo que el aprendizaje sea un ciclo continuo de apoyo, práctica, retroalimentación y autonomía progresiva.',
    imageUrl: cognitiveScaffoldingImg,
    tags: ['Educación', 'Metodología', 'Pedagogía'],
    intro: 'El andamiaje cognitivo (cognitive scaffolding) es una estrategia pedagógica esencial que facilita el aprendizaje al proporcionar apoyo estructurado y temporal a los estudiantes. Este enfoque se basa en cinco claves interconectadas que, al aplicarse de manera iterativa, construyen un flujo de aprendizaje lógico y autónomo.',
    sections: [
      {
        heading: 'Estructura del proceso de andamiaje',
        paragraphs: [
          'El proceso inicia con la clara definición de objetivos, seguido de la provisión de apoyo gradual y diferenciado. A medida que el aprendiz avanza, se fomenta la práctica independiente y se brinda retroalimentación específica y oportuna. El ciclo culmina con la retirada progresiva del andamiaje, permitiendo que el estudiante internalice las habilidades y logre la competencia de manera autónoma.',
          'Este método no solo mejora el rendimiento, sino que también fomenta la meta-cognición, la auto-regulación y la confianza, transformando al estudiante en un aprendiz activo y capaz de enfrentar nuevos desafíos.'
        ]
      },
      {
        heading: 'Las 5 claves fundamentales',
        items: [
          {
            title: 'Clave 1: La Meta - Definición Clara de Objetivos',
            description: 'Este pilar establece la dirección, desglosando una meta grande en sub-objetivos manejables para crear una hoja de ruta clara.'
          },
          {
            title: 'Clave 2: El Andamio - Provisión de Apoyo Gradual',
            description: 'Aquí se brinda el soporte necesario, desde la demostración inicial hasta el uso de herramientas, adaptando la ayuda a las necesidades del aprendiz.'
          },
          {
            title: 'Clave 3: El Aprendiz en Acción - Fomento de la Práctica Independiente',
            description: 'Se anima al estudiante a aplicar lo aprendido de manera autónoma, promoviendo la auto-evaluación y la meta-cognición.'
          },
          {
            title: 'Clave 4: La Brújula - Retroalimentación Específica y Oportuna',
            description: 'Se proporciona feedback constructivo y procesal para que el aprendiz comprenda sus errores y sepa cómo corregirlos.'
          },
          {
            title: 'Clave 5: La Autonomía - Retirada Gradual del Andamiaje',
            description: 'El apoyo se retira progresivamente a medida que el aprendiz demuestra competencia, asegurando la transferencia del conocimiento y la independencia a largo plazo.'
          }
        ]
      }
    ],
    conclusion: 'Implementar el cognitive scaffolding de manera sistemática permite transformar la curva de aprendizaje en una experiencia medible, progresiva y altamente motivadora.'
  },
  {
    id: 2,
    slug: 'la-ia-como-herramienta-educativa',
    title: 'La IA como herramienta educativa y medición de curva de aprendizaje',
    date: '12 de Septiembre, 2026',
    readTime: '6 min de lectura',
    summary: '¿Qué tanto la IA ha impactado mi modelo educativo? y ¿cómo mido por medio de sistemas de performance y curva laboral lo que realmente aprendo usando IA como asistente personal de estudio?',
    imageUrl: iaHerramientaEducativaImg,
    tags: ['Inteligencia Artificial', 'Productividad', 'Data Analytics', 'EdTech'],
    intro: 'La proliferación de modelos de lenguaje de vanguardia evaluados en índices como el Artificial Analysis Intelligence Index v4.3 ha transformado radicalmente la forma en la que abordamos el estudio técnico y el desarrollo de software. Sin embargo, surge la pregunta crítica: ¿cómo medimos el aprendizaje real frente a la simple dependencia operativa?',
    sections: [
      {
        heading: 'El rol de los modelos LLM en el aprendizaje acelerado',
        paragraphs: [
          'La comparativa de modelos de última generación (desde Claude 3.5/3.7, GPT-4o, GPT-5 hasta Gemini y DeepSeek) demuestra capacidades sin precedentes en razonamiento lógico, codificación y síntesis conceptual.',
          'Utilizar la IA no debe consistir en delegar el pensamiento crítico, sino en utilizarla como un tutor socrático disponible 24/7 que desafía nuestras hipótesis, genera casos de prueba extremos y clarifica abstracciones complejas en tiempo récord.'
        ]
      },
      {
        heading: 'Pilares para medir el impacto en la curva laboral y técnica',
        items: [
          {
            title: '1. Tiempo de resolución autónoma (Zero-Shot Retention)',
            description: 'Evaluar periódicamente la capacidad de resolver problemas de arquitectura y código sin asistencia de IA para validar retención conceptual profunda.'
          },
          {
            title: '2. Velocidad de ciclo de iteración (Feedback Loop Speed)',
            description: 'Medir la reducción en el tiempo requerido para prototipar, depurar y desplegar soluciones funcionales manteniendo altos estándares de calidad.'
          },
          {
            title: '3. Calidad y robustez del entregable (Code Quality & Security)',
            description: 'Monitorear métricas de cobertura de pruebas, reducción de deuda técnica y cumplimiento de patrones de diseño en proyectos reales.'
          },
          {
            title: '4. Capacidad de extrapolación a nuevos dominios',
            description: 'Medir la facilidad para transferir conceptos aprendidos con IA hacia nuevas tecnologías, librerías o stacks de desarrollo.'
          }
        ]
      },
      {
        heading: 'Conclusión y Visión Futura',
        paragraphs: [
          'La verdadera ventaja competitiva radica en crear una sinergia donde la IA actúe como acelerador cognitivo, respaldada por métricas rigurosas de rendimiento y una mentalidad orientada a la excelencia empírica.'
        ]
      }
    ],
    conclusion: 'Al combinar análisis de datos, rigor metodológico e inteligencia artificial, el proceso formativo se vuelve cuantificable, reproducible y exponencialmente más efectivo.'
  },
];


