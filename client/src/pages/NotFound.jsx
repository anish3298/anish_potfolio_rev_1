import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <motion.section className="flex min-h-[80vh] items-center justify-center px-6 py-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="max-w-3xl rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-12 text-center shadow-glow">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">404</p>
        <h1 className="mt-5 text-5xl font-semibold text-white">Page Not Found</h1>
        <p className="mt-4 text-slate-300">The page you’re looking for may have moved or no longer exists.</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link to="/" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
            Back Home
          </Link>
          <Link to="/projects" className="rounded-full border border-slate-700 px-6 py-3 text-slate-100 transition hover:border-cyan-400">
            View Projects
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export default NotFound;
