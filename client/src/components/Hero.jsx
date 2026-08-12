import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroScene from './HeroScene';
import profile from '../data/profile';
import resumePdf from '../assets/Anish_ojha_Rev.03.pdf';

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pt-28 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.14),_transparent_22%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-300">
              {profile.status}
            </span>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Anish Kumar Ojha
            </h1>
            <p className="mt-4 max-w-2xl text-xl leading-9 text-slate-300">
              {profile.role} — Full Stack Developer building responsive web apps with React, Node, PHP, MySQL, MongoDB and JavaScript.
            </p>
          </motion.div>

          <motion.div className="grid gap-4 sm:max-w-lg" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <p className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-6 text-slate-300 shadow-glow">
              Full Stack Developer and Software Developer with hands-on experience building responsive web applications using React.js, Node.js, PHP, MySQL, MongoDB and JavaScript.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/projects" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                View My Projects
              </Link>
              <a href={resumePdf} download className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400">
                Download Resume
              </a>
              <a href="#contact" className="rounded-full border border-cyan-400/20 bg-transparent px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative min-h-[480px] rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-6 shadow-glow">
          <HeroScene />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
