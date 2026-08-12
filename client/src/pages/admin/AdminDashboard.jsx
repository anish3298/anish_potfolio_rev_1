import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import api, { removeToken } from '../../services/api';

function AdminDashboard() {
  const [stats, setStats] = useState({ projects: 0, certificates: 0, messages: 0, resumes: 0 });
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate('/admin/login');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projects, certificates, messages, resumes] = await Promise.all([
          api.get('/projects'),
          api.get('/certificates'),
          api.get('/messages'),
          api.get('/resume/all')
        ]);

        setStats({
          projects: projects.data.length,
          certificates: certificates.data.length,
          messages: messages.data.length,
          resumes: resumes.data.length
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="min-h-screen bg-background px-6 py-24 text-slate-100">
      <div className="mx-auto max-w-7xl space-y-10">
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.35 }} className="flex flex-col gap-4 rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-10 shadow-glow sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white">Admin Dashboard</h1>
            <p className="mt-3 text-slate-400">Overview of portfolio content and metrics. Manage projects, certificates, messages and resume files.</p>
          </div>
          <button type="button" onClick={handleLogout} className="inline-flex items-center justify-center rounded-full bg-rose-500/90 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-500/100">
            Logout
          </button>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-4">
          <motion.div layout whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.25 }} className="rounded-[2rem] border border-slate-800/90 bg-slate-900/90 p-8 text-center">
            <p className="text-5xl font-semibold text-cyan-300">{stats.projects}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Projects</p>
          </motion.div>
          <motion.div layout whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.25 }} className="rounded-[2rem] border border-slate-800/90 bg-slate-900/90 p-8 text-center">
            <p className="text-5xl font-semibold text-cyan-300">{stats.certificates}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Certificates</p>
          </motion.div>
          <motion.div layout whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.25 }} className="rounded-[2rem] border border-slate-800/90 bg-slate-900/90 p-8 text-center">
            <p className="text-5xl font-semibold text-cyan-300">{stats.messages}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Messages</p>
          </motion.div>
          <motion.div layout whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.25 }} className="rounded-[2rem] border border-slate-800/90 bg-slate-900/90 p-8 text-center">
            <p className="text-5xl font-semibold text-cyan-300">{stats.resumes}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Resume files</p>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <a href="/admin/projects" className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/90 p-8 text-left transition hover:border-cyan-400/50 hover:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Manage</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Projects</h2>
            <p className="mt-2 text-slate-400">Create, update, and remove portfolio projects from the admin panel.</p>
          </a>
          <a href="/admin/certificates" className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/90 p-8 text-left transition hover:border-cyan-400/50 hover:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Manage</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Certificates</h2>
            <p className="mt-2 text-slate-400">Add and edit certificates that show your verified skills and achievements.</p>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default AdminDashboard;
