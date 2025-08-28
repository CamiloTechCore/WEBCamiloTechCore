// src/sections/ProjectsSection.jsx
import { useState, useEffect, useMemo } from 'react'; 
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { Wordcloud } from '@visx/wordcloud';
import { scaleLog } from '@visx/scale';
import { Text } from '@visx/text';
import { useTranslation } from 'react-i18next';

function ProjectsSection() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);
  
  const words = useMemo(() => {
    const tagFrequency = {};
    projects.forEach(project => {
      project.tags.forEach(tag => {
        tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
      });
    });
    return Object.keys(tagFrequency).map(tag => ({
      text: tag,
      value: tagFrequency[tag] * 15,
    }));
  }, []);

  // ✅ 2. VISX necesita una escala para mapear los 'values' a tamaños de fuente
  const fontScale = scaleLog({
    domain: [Math.min(...words.map(w => w.value)), Math.max(...words.map(w => w.value))],
    range: [10, 100], // Tamaño de fuente mínimo y máximo
  });
 const { t } = useTranslation();
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          {t('header.projects')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          {t('skills.title')}
        </h3>
        <div className="w-full flex justify-center items-center">
          {isClient && (
            // ✅ 3. Implementamos el Wordcloud de VISX
            <Wordcloud
              words={words}
              width={500}
              height={300}
              fontSize={(datum) => fontScale(datum.value)}
              font={'Impact'}
              padding={2}
              spiral="archimedean"
              rotate={0}
              random={() => 0.5}
            >
              {(cloudWords) =>
                cloudWords.map((w, i) => (
                  <Text
                    key={w.text}
                    fill={i % 2 === 0 ? '#BFE89B' : '#94D9FF'}
                    textAnchor={'middle'}
                    transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                    fontSize={w.size}
                    fontFamily={w.font}
                  >
                    {w.text}
                  </Text>
                ))
              }
            </Wordcloud>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}

export default ProjectsSection;