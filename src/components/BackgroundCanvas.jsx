// src/components/BackgroundCanvas.jsx
import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Ajustamos la cantidad de nodos para un rendimiento óptimo y balance visual
    const numNodes = Math.min(100, Math.floor((width * height) / 240));
    const nodes = [];

    // Colores para el tema claro (esmeralda, azul, cyan, índigo)
    const lightColors = [
      { r: 16, g: 185, b: 129 }, // emerald-500
      { r: 59, g: 130, b: 246 }, // blue-500
      { r: 6, g: 182, b: 212 },  // cyan-500
      { r: 99, g: 102, b: 241 }, // indigo-500
    ];

    // Color blanco puro para el modo oscuro
    const darkColor = { r: 255, g: 255, b: 255 };

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1.5,
        lightColor: lightColors[i % lightColors.length],
      });
    }

    const maxDist = 130;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDarkMode = document.documentElement.classList.contains('dark');

      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const currentColor = isDarkMode ? darkColor : node.lightColor;
        const nodeAlpha = isDarkMode ? 0.7 : 0.5;

        // Dibujar nodo
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, ${nodeAlpha})`;
        ctx.fill();

        // Conectar nodos cercanos
        for (let j = i + 1; j < nodes.length; j++) {
          let other = nodes[j];
          let dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            const alphaFactor = isDarkMode ? 0.45 : 0.35;
            const alpha = (1 - dist / maxDist) * alphaFactor;
            ctx.strokeStyle = `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60 dark:opacity-40"
    />
  );
}
