import experience from '../data/experience';

function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-10 shadow-glow">
        <div className="mb-10">
          <span className="inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-300">Experience</span>
          <h2 className="mt-4 text-4xl font-semibold text-white">Professional timeline with real project delivery.</h2>
          <p className="mt-3 max-w-3xl text-slate-300">Past roles and outcomes that demonstrate practical experience in web development, collaboration, and production-ready systems.</p>
        </div>
        <div className="space-y-8">
          {experience.map((item) => (
            <div key={item.id} className="rounded-3xl border border-slate-800/90 bg-slate-900/90 p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-slate-300">{item.company} · {item.location}</p>
                </div>
                <span className="rounded-full bg-slate-950/70 px-4 py-2 text-sm text-slate-400">{item.dates}</span>
              </div>
              <ul className="mt-6 grid gap-3 text-slate-300">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-cyan-300" />
                    {point}
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

export default ExperienceSection;
