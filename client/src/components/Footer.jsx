import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/90 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-100">ANISH KUMAR OJHA</h2>
          <p className="mt-2 text-sm text-slate-400">Full Stack Developer</p>
        </div>
        <div className="grid gap-2 text-sm sm:grid-cols-2 md:grid-cols-4">
          <Link to="/projects" className="transition hover:text-cyan-300">Projects</Link>
          <Link to="/resume" className="transition hover:text-cyan-300">Resume</Link>
          <a href="#certificates" className="transition hover:text-cyan-300">Certificates</a>
          <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-800/70 pt-6 text-center text-xs text-slate-500">
        © 2026 Anish Kumar Ojha. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
