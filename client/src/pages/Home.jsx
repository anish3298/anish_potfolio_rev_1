import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificatesSection from '../components/CertificatesSection';
import ContactSection from '../components/ContactSection';
import QuickContactButton from '../components/QuickContactButton';

function Home() {
  return (
    <motion.div
      className="space-y-24"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <QuickContactButton />
    </motion.div>
  );
}

export default Home;
