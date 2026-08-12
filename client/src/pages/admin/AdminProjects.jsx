import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await api.get('/projects');
      setProjects(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to load projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this project?')) return;
    try {
      await api.delete(`/projects/${id}`);
      setProjects((prev) => prev.filter((project) => project._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || 'Delete failed');
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: 'easeOut' }} className="min-h-screen bg-background px-6 py-24 text-slate-100">
      <div className="mx-auto max-w-7xl space-y-8">
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="flex flex-col gap-4 rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-8 shadow-glow sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white">Projects</h1>
            <p className="mt-2 text-slate-400">Manage your portfolio projects from the admin panel.</p>
          </div>
          <Link to="/admin/projects/new" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            Add Project
          </Link>
        </motion.div>

        <div className="space-y-4">
          {loading && <div className="rounded-2xl bg-slate-900/80 p-6 text-slate-300">Loading projects...</div>}
          {error && <div className="rounded-2xl bg-rose-500/10 p-6 text-slate-200">{error}</div>}
          {!loading && !projects.length && <div className="rounded-2xl bg-slate-900/80 p-6 text-slate-300">No projects found yet.</div>}
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div key={project._id} layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} whileHover={{ y: -6, scale: 1.01 }} transition={{ duration: 0.25 }} className="rounded-[2rem] border border-slate-800/90 bg-slate-900/90 p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                    <p className="mt-2 text-sm text-slate-400">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link to={`/admin/projects/${project._id}/edit`} className="rounded-full border border-cyan-400 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400/10">
                      Edit
                    </Link>
                    <button type="button" onClick={() => handleDelete(project._id)} className="rounded-full border border-rose-500 px-4 py-2 text-sm text-rose-300 transition hover:bg-rose-500/10">
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default AdminProjects;
