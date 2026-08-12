import education from '../data/education';
import profile from '../data/profile';

function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_0.9fr]">
        <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-10 shadow-glow">
          <span className="inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-300">About Me</span>
          <h2 className="text-4xl font-semibold text-white">Professional full stack development with focus on quality and clarity.</h2>
          <p className="text-slate-300 leading-8">I build modern, maintainable web applications using a combination of React, Node.js, PHP, MySQL, MongoDB and JavaScript. My work emphasizes polished UI, strong backend architecture, and reliable full stack delivery.</p>
          <p className="text-slate-300 leading-8">I am currently focused on building recruiter-friendly portfolios, project management dashboards, and tools that communicate technical skills clearly while remaining fast and accessible.</p>
        </div>
        <div className="space-y-10">
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <h3 className="text-xl font-semibold text-white">Education</h3>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <div key={item.id} className="rounded-3xl border border-slate-800/90 bg-slate-900/90 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{item.dates}</p>
                  <h4 className="mt-3 text-lg font-semibold text-white">{item.degree}</h4>
                  <p className="mt-2 text-slate-300">{item.institution}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <h3 className="text-xl font-semibold text-white">Developer Journey</h3>
            <ol className="mt-6 space-y-5 border-l border-slate-800/80 pl-6 text-slate-300">
              <li>
                <span className="mb-2 block text-sm uppercase tracking-[0.28em] text-cyan-300">Launch</span>
                Started with web fundamentals and built a strong base in HTML, CSS and JavaScript.
              </li>
              <li>
                <span className="mb-2 block text-sm uppercase tracking-[0.28em] text-cyan-300">Growth</span>
                Expanded into full stack workflows with React, Node.js, PHP, MySQL and MongoDB.
              </li>
              <li>
                <span className="mb-2 block text-sm uppercase tracking-[0.28em] text-cyan-300">Focus</span>
                Delivered recruiter-ready projects, modular admin systems, and polished UI experiences.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
