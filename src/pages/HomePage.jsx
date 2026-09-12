// src/pages/HomePage.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import HeroSection from '../sections/HeroSection';
import AboutMeSection from '../sections/AboutMeSection';
import SkillsSection from '../sections/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase().replace('/', '');
    const validSections = {
      'aboutme': 'about',
      'about': 'about',
      'projects': 'projects',
      'skills': 'skills',
      'contact': 'contact',
    };

    if (validSections[path]) {
      setTimeout(() => {
        scroller.scrollTo(validSections[path], {
          smooth: true,
          offset: -80,
          duration: 500,
        });
      }, 100);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

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