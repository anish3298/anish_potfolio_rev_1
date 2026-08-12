import skills from '../data/skills';

function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-10 shadow-glow">
        <div className="mb-10 flex flex-col gap-3">
          <span className="inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-300">Skills</span>
          <h2 className="text-4xl font-semibold text-white">Technical skills built for real projects.</h2>
          <p className="max-w-3xl text-slate-300">My primary skill set includes frontend, backend, databases, and developer tools used to deliver scalable web applications.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-3xl border border-slate-800/90 bg-slate-900/90 p-6">
              <h3 className="mb-5 text-lg font-semibold text-white">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <ul className="space-y-3 text-slate-300">
                {items.map((skillItem) => (
                  <li key={skillItem} className="rounded-2xl bg-slate-950/80 px-4 py-3 transition hover:border hover:border-cyan-400/20">
                    {skillItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
