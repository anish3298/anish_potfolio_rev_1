import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';

function Projects() {
  return (
    <motion.div
      className="mx-auto max-w-7xl px-6 pb-24 pt-28"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-8 text-4xl font-semibold text-white">Projects</h1>
      <ProjectsSection showHeader={false} />
    </motion.div>
  );
}

export default Projects;
