// src/components/BackgroundChart.jsx

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Gráfica de fondo moderna con barras fluidas, degradados y línea de tendencia Bezier suave (Spline)
const ModernChartSVG = () => {
  // Coordenadas de las barras (x, y_top, altura, delay)
  const bars = [
    { x: 30, y: 170, h: 40, d: 0.05 },
    { x: 90, y: 145, h: 65, d: 0.1 },
    { x: 150, y: 125, h: 85, d: 0.15 },
    { x: 210, y: 135, h: 75, d: 0.2 },
    { x: 270, y: 100, h: 110, d: 0.25 },
    { x: 330, y: 75, h: 135, d: 0.3 },
    { x: 390, y: 85, h: 125, d: 0.35 },
    { x: 450, y: 55, h: 155, d: 0.4 },
    { x: 510, y: 45, h: 165, d: 0.45 },
    { x: 570, y: 25, h: 185, d: 0.5 },
    { x: 630, y: 35, h: 175, d: 0.55 },
    { x: 690, y: 18, h: 192, d: 0.6 },
  ];

  // Curva de tendencia ultra suave usando curvas de Bézier cúbicas (C)
  const smoothTrendPath = "M 30,170 C 90,145 150,130 210,135 C 270,140 300,80 360,78 C 420,76 470,50 530,42 C 590,34 640,30 700,16";
  const smoothAreaPath = `${smoothTrendPath} L 700,210 L 30,210 Z`;

  return (
    <>
      <defs>
        {/* Degradado para las barras */}
        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
        </linearGradient>

        {/* Degradado para la línea de tendencia suave */}
        <linearGradient id="trendGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
        </linearGradient>

        {/* Degradado del área sombreada bajo la curva */}
        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
        </linearGradient>

        {/* Filtro de resplandor suave */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Líneas de cuadrícula horizontal sutiles */}
      <line x1="20" y1="50" x2="710" y2="50" stroke="currentColor" strokeOpacity="0.06" strokeDasharray="6 6" />
      <line x1="20" y1="100" x2="710" y2="100" stroke="currentColor" strokeOpacity="0.06" strokeDasharray="6 6" />
      <line x1="20" y1="150" x2="710" y2="150" stroke="currentColor" strokeOpacity="0.06" strokeDasharray="6 6" />

      {/* Barras animadas con bordes redondeados */}
      {bars.map((b, i) => (
        <motion.rect
          key={i}
          x={b.x - 12}
          y={b.y}
          width="24"
          height={b.h}
          rx="6"
          fill="url(#barGradient)"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{
            delay: b.d,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: `center 210px` }}
        />
      ))}

      {/* Área sombreada bajo la curva suave */}
      <motion.path
        d={smoothAreaPath}
        fill="url(#areaGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.5 }}
      />

      {/* Línea de tendencia suave y fluida */}
      <motion.path
        d={smoothTrendPath}
        fill="none"
        stroke="url(#trendGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 2.2, ease: "easeInOut" }}
      />

      {/* Puntos destacados en la línea de tendencia */}
      {[
        { cx: 30, cy: 170, d: 0.6 },
        { cx: 210, cy: 135, d: 1.0 },
        { cx: 360, cy: 78, d: 1.4 },
        { cx: 530, cy: 42, d: 1.8 },
        { cx: 700, cy: 16, d: 2.2 },
      ].map((pt, idx) => (
        <motion.circle
          key={idx}
          cx={pt.cx}
          cy={pt.cy}
          r="4.5"
          fill="#FFFFFF"
          stroke="#3B82F6"
          strokeWidth="3"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: pt.d, duration: 0.4 }}
        />
      ))}
    </>
  );
};

function BackgroundChart() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden opacity-30 dark:opacity-20"
    >
      <svg
        viewBox="0 0 730 220"
        className="w-full h-full max-h-[500px]"
        preserveAspectRatio="xMidYMid meet"
      >
        {inView && <ModernChartSVG />}
      </svg>
    </motion.div>
  );
}

export default BackgroundChart;