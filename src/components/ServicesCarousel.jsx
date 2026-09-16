import { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { FiArrowUpRight, FiBarChart2, FiBox, FiCode, FiLayers, FiXCircle } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const services = [
  { id: 'softwareConsulting', Icon: FiCode, accent: 'blue', visual: 'flow' },
  { id: 'customDevelopment', Icon: FiLayers, accent: 'cyan', visual: 'code' },
  { id: 'growthAnalytics', Icon: FiBarChart2, accent: 'amber', visual: 'charts' },
  { id: 'dataMesh', Icon: FiBox, accent: 'violet', visual: 'network' },
];

const accentStyles = {
  blue: 'from-blue-500/25 via-sky-400/10 to-transparent border-blue-400/30 hover:border-blue-400/70 hover:shadow-blue-500/25 text-blue-600 dark:text-blue-300',
  cyan: 'from-cyan-500/25 via-teal-400/10 to-transparent border-cyan-400/30 hover:border-cyan-400/70 hover:shadow-cyan-500/25 text-cyan-600 dark:text-cyan-300',
  amber: 'from-amber-500/25 via-orange-400/10 to-transparent border-amber-400/30 hover:border-amber-400/70 hover:shadow-amber-500/25 text-amber-600 dark:text-amber-300',
  violet: 'from-violet-500/25 via-fuchsia-400/10 to-transparent border-violet-400/30 hover:border-violet-400/70 hover:shadow-violet-500/25 text-violet-600 dark:text-violet-300',
};

function ServiceVisual({ type }) {
  if (type === 'charts') {
    const bars = [{ x: 70, y: 118, height: 62 }, { x: 108, y: 82, height: 98 }, { x: 146, y: 54, height: 126 }, { x: 184, y: 28, height: 152 }];
    return <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      {bars.map((bar, index) => <Motion.rect key={bar.x} {...bar} width="22" rx="6" fill="currentColor" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: index * 0.12, duration: 0.7 }} style={{ transformOrigin: 'bottom' }} />)}
      <Motion.path d="M54 140 C105 125 116 91 154 98 S220 45 260 68 S316 25 355 36" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, delay: 0.3 }} />
      <Motion.circle cx="304" cy="105" r="46" fill="none" stroke="currentColor" strokeWidth="16" strokeDasharray="190 100" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 0.8 }} transition={{ duration: 1 }} style={{ transformOrigin: '304px 105px' }} />
    </svg>;
  }

  if (type === 'network') {
    const nodes = [[65, 110], [140, 55], [142, 167], [230, 108], [316, 48], [330, 165]];
    return <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      {[[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 5]].map(([from, to], index) => <Motion.line key={`${from}-${to}`} x1={nodes[from][0]} y1={nodes[from][1]} x2={nodes[to][0]} y2={nodes[to][1]} stroke="currentColor" strokeWidth="2" strokeOpacity="0.55" strokeDasharray="8 8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: index * 0.12, duration: 0.8 }} />)}
      {nodes.map(([cx, cy], index) => <Motion.g key={`${cx}-${cy}`} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + index * 0.1 }}><circle cx={cx} cy={cy} r="15" fill="currentColor" fillOpacity="0.2" /><circle cx={cx} cy={cy} r="6" fill="currentColor" /></Motion.g>)}
    </svg>;
  }

  if (type === 'flow') {
    return <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      {[[45, 88], [160, 42], [160, 134], [285, 88]].map(([x, y], index) => <Motion.rect key={`${x}-${y}`} x={x} y={y} width="72" height="42" rx="10" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="2" initial={{ opacity: 0, y: y + 12 }} animate={{ opacity: 1, y }} transition={{ delay: index * 0.2 }} />)}
      <Motion.path d="M117 109 H143 M232 63 L266 94 M232 155 L266 124" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 7" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1.3 }} />
    </svg>;
  }

  return <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
    <Motion.rect x="58" y="42" width="284" height="142" rx="14" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
    {[[90, 87, 78], [90, 113, 150], [90, 139, 104]].map(([x, y, width], index) => <Motion.rect key={y} x={x} y={y} width={width} height="10" rx="5" fill="currentColor" initial={{ width: 0 }} animate={{ width }} transition={{ delay: index * 0.18, duration: 0.75 }} />)}
    <Motion.path d="M266 77 l20 20 -20 20 M300 77 l-20 20 20 20" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>;
}

function ServicesCarousel() {
  const [selectedService, setSelectedService] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedService ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedService]);

  return (
    <>
      <section aria-labelledby="services-title" className="relative overflow-hidden bg-gray-50/70 py-4 dark:bg-gray-950/70 sm:py-6">
        <div className="relative z-10">
          <div className="container mx-auto mb-3 max-w-6xl px-4 text-center"><h2 id="services-title" className="text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl">{t('services.heading')}</h2></div>
          <div className="services-carousel-mask"><div className="services-carousel-track hover:[animation-play-state:paused]">
            {[...services, ...services].map((service, index) => {
              const Icon = service.Icon;
              const isDuplicate = index >= services.length;
              return <Motion.button key={`${service.id}-${index}`} type="button" onClick={() => setSelectedService(service)} tabIndex={isDuplicate ? -1 : undefined} aria-hidden={isDuplicate} whileHover={{ y: -4 }} className={`group relative h-32 w-64 shrink-0 overflow-hidden rounded-2xl border bg-gradient-to-br p-3 text-center shadow-lg transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 sm:w-72 ${accentStyles[service.accent]}`}>
                <div className="absolute inset-0 bg-white/65 dark:bg-gray-900/65" /><div className="relative z-10 flex h-full flex-col items-center"><div className="relative mb-2 flex w-full justify-center"><span className="rounded-xl bg-white/70 p-2.5 shadow-sm backdrop-blur dark:bg-gray-950/50"><Icon className="h-5 w-5" /></span><FiArrowUpRight className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-2" /></div><h3 className="text-base font-extrabold text-gray-900 dark:text-white">{t(`services.items.${service.id}.title`)}</h3><p className="mt-0.5 text-xs font-medium text-gray-600 dark:text-gray-300">{t(`services.items.${service.id}.subtitle`)}</p><div className="mt-auto pt-2 text-[0.65rem] font-bold uppercase tracking-wider text-gray-500 transition-all duration-300 group-hover:text-current group-hover:drop-shadow-[0_0_8px_currentColor] dark:text-gray-400">{t('services.viewDetails')}</div></div>
              </Motion.button>;
            })}
          </div></div>
        </div>
      </section>
      <AnimatePresence>{selectedService && <Motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-gray-950/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="service-modal-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedService(null); }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Motion.div initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94, y: 20 }} transition={{ type: 'spring', damping: 24, stiffness: 280 }} className={`relative w-full max-w-2xl overflow-hidden rounded-3xl border bg-white shadow-2xl dark:bg-gray-900 ${accentStyles[selectedService.accent].split(' ').find((style) => style.startsWith('border-'))}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${accentStyles[selectedService.accent].split(' ').filter((style) => /^(from|via|to)-/.test(style)).join(' ')}`} /><div className={`absolute -right-12 -top-5 h-64 w-[30rem] opacity-40 ${accentStyles[selectedService.accent].split(' ').find((style) => style.startsWith('text-'))}`}><ServiceVisual type={selectedService.visual} /></div>
          <div className="relative z-10 p-6 sm:p-9"><button type="button" onClick={() => setSelectedService(null)} aria-label={t('services.closeDetails')} className="absolute right-5 top-5 rounded-xl p-2 text-gray-500 transition-colors hover:bg-gray-900/10 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"><FiXCircle className="h-6 w-6" /></button><selectedService.Icon className={`mb-5 h-9 w-9 ${accentStyles[selectedService.accent].split(' ').find((style) => style.startsWith('text-'))}`} /><p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-300">{t(`services.items.${selectedService.id}.subtitle`)}</p><h2 id="service-modal-title" className="mt-2 max-w-md text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">{t(`services.items.${selectedService.id}.title`)}</h2><p className="mt-5 max-w-xl text-base leading-relaxed text-gray-700 dark:text-gray-200">{t(`services.items.${selectedService.id}.description`)}</p><div className="mt-7"><h3 className="text-sm font-extrabold uppercase tracking-wider text-gray-700 dark:text-gray-200">{t('services.technologiesLabel')}</h3><div className="mt-3 flex flex-wrap gap-2">{t(`services.items.${selectedService.id}.technologies`, { returnObjects: true }).map((technology) => <span key={technology} className="rounded-full border border-gray-300/70 bg-white/60 px-3 py-1.5 text-sm font-semibold text-gray-700 backdrop-blur dark:border-white/15 dark:bg-gray-950/35 dark:text-gray-100">{technology}</span>)}</div></div></div>
        </Motion.div>
      </Motion.div>}</AnimatePresence>
    </>
  );
}

export default ServicesCarousel;
