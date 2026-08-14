import { motion } from 'framer-motion';
import resumePdf from '../assets/Anish_ojha_Rev.04.pdf';

function ResumePage() {
  return (
    <motion.section className="mx-auto max-w-6xl px-6 py-24 text-slate-100" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }}>
      <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-10 shadow-glow">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-white">Resume</h1>
            <p className="mt-3 max-w-2xl text-slate-300">Professional summary, experience, education, certificates and project highlights, all available for download and preview.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={resumePdf} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              View Resume
            </a>
            <a href={resumePdf} download className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400">
              Download Resume
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 rounded-3xl bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Professional Summary</h2>
            <p className="text-slate-300">Full Stack Developer and Software Developer with hands-on experience building responsive web applications using React.js, Node.js, PHP, MySQL, MongoDB and JavaScript.</p>
          </div>
          <div className="space-y-6 rounded-3xl bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Core Skills</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {['React.js', 'Node.js', 'MongoDB', 'PHP', 'JavaScript', 'MySQL', 'Express.js', 'Git'].map((item) => (
                <span key={item} className="rounded-2xl bg-slate-800 px-4 py-3 text-sm text-slate-200">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ResumePage;
