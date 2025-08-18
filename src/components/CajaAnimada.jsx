// src/components/CajaAnimada.jsx
import { motion } from 'framer-motion'; // 1. Importamos 'motion'

function CajaAnimada() {
  return (
    <motion.div // 2. Usamos motion.div en lugar de un div normal
      className="w-32 h-32 bg-purple-500 rounded-lg"
      initial={{ opacity: 0, scale: 0.5 }} // 3. Estado inicial (invisible y pequeño)
      animate={{ opacity: 1, scale: 1 }}   // 4. Estado final (visible y tamaño normal)
      transition={{ duration: 2.0 }}       // 5. Cómo es la transición
    >
    </motion.div>
  );
}

export default CajaAnimada;
