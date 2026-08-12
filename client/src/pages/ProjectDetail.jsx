import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/projects';

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-32 text-center text-slate-300">
        <h2 className="mb-4 text-3xl font-semibold text-white">Project not found</h2>
        <p className="mb-6">The project you are looking for does not exist or has been removed.</p>
        <Link to="/projects" className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
          View all projects
        </Link>
      </div>
    );
  }

  return (
    <motion.section
      className="mx-auto max-w-6xl px-6 py-24"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -32 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
          <div className="space-y-2">
            <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300">Featured Project</span>
            <h1 className="text-4xl font-semibold text-white">{project.title}</h1>
            <p className="text-slate-300">{project.description}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 rounded-3xl bg-slate-900/80 p-5">
              <h2 className="text-sm uppercase tracking-[0.2em] text-slate-400">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2 rounded-3xl bg-slate-900/80 p-5">
              <h2 className="text-sm uppercase tracking-[0.2em] text-slate-400">Links</h2>
              <div className="flex flex-col gap-3">
                {project.liveUrl && project.liveUrl !== '#' ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-2xl bg-cyan-400/10 px-4 py-3 text-sm text-cyan-300 transition hover:bg-cyan-400/15">
                    View Live Demo
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-2xl bg-slate-800 px-4 py-3 text-sm text-slate-100 transition hover:bg-slate-700">
                    View Source Code
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <section className="space-y-3 rounded-3xl bg-slate-900/80 p-6">
              <h3 className="text-xl font-semibold text-white">Problem statement</h3>
              <p className="text-slate-300">{project.problemStatement}</p>
            </section>
            <section className="space-y-3 rounded-3xl bg-slate-900/80 p-6">
              <h3 className="text-xl font-semibold text-white">Solution</h3>
              <p className="text-slate-300">{project.solution}</p>
            </section>
            <section className="space-y-3 rounded-3xl bg-slate-900/80 p-6">
              <h3 className="text-xl font-semibold text-white">Key features</h3>
              <ul className="grid gap-2 text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-300" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
            <section className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <h3 className="text-xl font-semibold text-white">Challenges</h3>
                <p className="mt-3 text-slate-300">{project.challenges}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <h3 className="text-xl font-semibold text-white">Learnings</h3>
                <p className="mt-3 text-slate-300">{project.learnings}</p>
              </div>
            </section>
            <section className="rounded-3xl bg-slate-900/80 p-6">
              <h3 className="text-xl font-semibold text-white">Future improvements</h3>
              <p className="mt-3 text-slate-300">{project.futureImprovements}</p>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          {project.images.map((image) => (
            <div key={image} className="overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/90 shadow-glow">
              <img src={image} alt={`${project.title} screenshot`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectDetail;
