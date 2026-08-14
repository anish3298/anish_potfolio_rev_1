import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Skills', to: '#skills' },
  { label: 'Experience', to: '#experience' },
  { label: 'Projects', to: '#projects' },
  { label: 'Certificates', to: '#certificates' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '#contact' },
  { label: 'Admin', to: '/admin/login' }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled ? 'backdrop-blur bg-slate-950/70 shadow-slate-900/50 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold tracking-[0.25em] text-cyan-300">
          ANISH OJHA.
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.to} className="text-sm text-slate-300 transition hover:text-cyan-300">
              {item.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-cyan-300" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          <span className="block h-0.5 w-6 bg-current transition duration-300" />
          <span className="block h-0.5 w-6 bg-current mt-1 transition duration-300" />
          <span className="block h-0.5 w-6 bg-current mt-1 transition duration-300" />
        </button>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: open ? 'auto' : 0 }}
        className="overflow-hidden bg-slate-950/95 md:hidden"
      >
        <div className="space-y-3 px-6 pb-6 pt-4">
          {navItems.map((item) => (
            <a key={item.label} href={item.to} className="block rounded-xl px-4 py-3 text-sm text-slate-100 transition hover:bg-slate-800/80 hover:text-cyan-300">
              {item.label}
            </a>
          ))}
          <Link to="/resume" className="block rounded-xl bg-cyan-400 px-4 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300">
            Resume
          </Link>
        </div>
      </motion.div>
    </header>
  );
}

export default Navbar;
