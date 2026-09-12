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
  const [cloudWidth, setCloudWidth] = useState(500);

  useEffect(() => {
    setIsClient(true);
    const updateWidth = () => {
      const screenW = window.innerWidth;
      if (screenW < 480) {
        setCloudWidth(320);
      } else if (screenW < 768) {
        setCloudWidth(420);
      } else {
        setCloudWidth(550);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
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

  const fontScale = scaleLog({
    domain: [
      Math.min(...words.map(w => w.value)),
      Math.max(...words.map(w => w.value))
    ],
    range: cloudWidth < 400 ? [12, 36] : [14, 52],
  });

  const { t } = useTranslation();

  return (
    <section id="projects" className="py-8 md:py-12 min-h-[calc(100vh-5rem)] flex flex-col justify-center bg-transparent relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t('header.projects')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-2.5 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Ecosistema de Tecnologías en Proyectos
          </h3>
          <div className="w-full max-w-3xl mx-auto flex justify-center items-center overflow-hidden p-4 rounded-3xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            {isClient && (
              <Wordcloud
                words={words}
                width={cloudWidth}
                height={200}
                fontSize={(datum) => fontScale(datum.value)}
                font={'system-ui, sans-serif'}
                padding={3}
                spiral="archimedean"
                rotate={0}
                random={() => 0.5}
              >
                {(cloudWords) =>
                  cloudWords.map((w, i) => (
                    <Text
                      key={w.text}
                      fill={i % 2 === 0 ? '#10B981' : '#3B82F6'}
                      textAnchor={'middle'}
                      transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                      fontSize={w.size}
                      fontFamily={w.font}
                      fontWeight={700}
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