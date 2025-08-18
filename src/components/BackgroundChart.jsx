// src/components/BackgroundChart.jsx

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// ... (Los componentes LineChartSVG y BarChartSVG no necesitan cambios)
const LineChartSVG = () => (
  <motion.path
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2, ease: "easeInOut" }}
    d="M 10 150 Q 100 50, 200 120 T 400 100 T 600 160"
    stroke="currentColor"
    strokeWidth="8"
    fill="none"
    strokeLinecap="round"
  />
);

const BarChartSVG = () => (
  <>
    {/* Barra 1 */}
    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }} d="M 50 180 V 180" stroke="currentColor" strokeWidth="25" fill="none" strokeLinecap="round" />
    {/* Barra 2 */}
    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }} d="M 80 180 V 160" stroke="currentColor" strokeWidth="25" fill="none" strokeLinecap="round" />
    {/* Barra 3 */}
    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }} d="M 170 180 V 120" stroke="currentColor" strokeWidth="25" fill="none" strokeLinecap="round" />
    {/* Barra 4 */}
    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4, duration: 1.5, ease: "easeOut" }} d="M 200 180 V 100" stroke="currentColor" strokeWidth="25" fill="none" strokeLinecap="round" />
    {/* --- BARRAS NUEVAS --- */}
    {/* Barra 5 */}
    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }} d="M 290 180 V 80" stroke="currentColor" strokeWidth="25" fill="none" strokeLinecap="round" />
    {/* Barra 6 */}
    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }} d="M 320 180 V 30" stroke="currentColor" strokeWidth="25" fill="none" strokeLinecap="round" />
    {/* Barra 7 */}
    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }} d="M 410 180 V 60" stroke="currentColor" strokeWidth="25" fill="none" strokeLinecap="round" />
    {/* Barra 8 */}
    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }} d="M 440 180 V 40" stroke="currentColor" strokeWidth="25" fill="none" strokeLinecap="round" />
    {/* Barra 9 */}
    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 1.5, ease: "easeOut" }} d="M 530 180 V 20" stroke="currentColor" strokeWidth="25" fill="none" strokeLinecap="round" />
    {/* --- ✅ LÍNEA TIPO PARETO AÑADIDA --- */}
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      // La animación de la línea empieza después de que las barras comiencen a dibujarse
      transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }}
      // Las coordenadas 'd' conectan las puntas de las 9 barras
      d="M 50 80 L 110 120 L 170 50 L 230 150 L 290 100 L 350 30 L 410 130 L 470 90 L 530 60"
      stroke="#9BD2E8"
      strokeWidth="5" // Hacemos la línea más delgada que las barras
      fill="none"
      strokeLinecap="round"
    />
  </>
);


function BackgroundChart({ type }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  // La opacidad ahora la controlaremos directamente con las clases de color
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.2, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      // ✅ 2. COLOR Y OPACIDAD ADAPTABLES: Usamos colores distintos para cada tema
      // 'text-primary/10' = color primario con 10% de opacidad
      // 'dark:text-white/5' = color blanco con 5% de opacidad en modo oscuro
      className="absolute inset-0 z-0 text-secondary dark:text-white/5 pointer-events-none flex justify-center items-center"
    >
      <svg 
        viewBox="0 0 600 200" 
        // ✅ 3. TAMAÑO AJUSTADO: Hacemos que ocupe todo el ancho para un mayor impacto
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {inView && (type === 'line' ? <LineChartSVG /> : <BarChartSVG />)}
      </svg>
    </motion.div>
  );
}

export default BackgroundChart;