import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'React', value: 'React.js' },
  { label: 'Node.js', value: 'Node.js' },
  { label: 'PHP', value: 'PHP' },
  { label: 'JavaScript', value: 'JavaScript' },
  { label: 'AI', value: 'AI' },
  { label: 'MongoDB', value: 'MongoDB' },
  { label: 'MySQL', value: 'MySQL' }
];

function ProjectsSection({ showHeader = true }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = activeFilter === 'all' || project.technologies.includes(activeFilter);
      const matchesSearch = search.trim().length === 0 || [project.title, project.description, project.technologies.join(' ')].some((value) => value.toLowerCase().includes(search.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      {showHeader && (
        <div className="mb-10">
          <span className="inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-300">Projects</span>
          <h2 className="mt-4 text-4xl font-semibold text-white">High-impact projects with real technical value.</h2>
          <p className="mt-3 max-w-3xl text-slate-300">Curated work that emphasizes modern full stack workflows, recruiter-ready outcomes, and maintainable code.</p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-[1fr_3fr]">
        <div className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-glow">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick filter</h3>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`rounded-full px-4 py-2 text-sm transition ${activeFilter === filter.value ? 'bg-cyan-400 text-slate-950' : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800/90'}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3 rounded-3xl border border-slate-800/90 bg-slate-900/90 p-4">
            <label htmlFor="project-search" className="text-sm font-medium text-slate-300">Search projects</label>
            <input
              id="project-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search projects..."
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
            />
          </div>
        </div>
        <div className="space-y-6">
          {filteredProjects.length === 0 ? (
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-10 text-center text-slate-300">
              No projects found. Try another filter or search term.
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              <div className="grid gap-6 sm:grid-cols-2">
                {filteredProjects.map((project) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    className="group overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-6 shadow-glow transition hover:-translate-y-1"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">{project.technologies[0]}</span>
                      <span className="text-sm text-slate-400">{project.technologies.length} tech</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-4 text-slate-300">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((technology) => (
                        <span key={technology} className="rounded-full bg-slate-900/90 px-3 py-2 text-xs text-slate-200">
                          {technology}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200"
                    >
                      View details →
                    </Link>
                  </motion.article>
                ))}
              </div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
