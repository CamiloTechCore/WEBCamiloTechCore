// src/pages/HomePage.jsx

// ✅ AÑADE ESTAS IMPORTACIONES AL PRINCIPIO DEL ARCHIVO
import HeroSection from '../sections/HeroSection';
import AboutMeSection from '../sections/AboutMeSection';
import SkillsSection from '../sections/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';

function HomePage() {
  // Ahora que los componentes están importados, React sabe qué renderizar.
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default HomePage;