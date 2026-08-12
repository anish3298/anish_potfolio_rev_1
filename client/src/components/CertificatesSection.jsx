import certificates from '../data/certificates';

function CertificatesSection() {
  return (
    <section id="certificates" className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-10 shadow-glow">
        <div className="mb-10">
          <span className="inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-300">Certificates</span>
          <h2 className="mt-4 text-4xl font-semibold text-white">Verified learning and professional growth.</h2>
          <p className="mt-3 max-w-3xl text-slate-300">Dynamic certificates that support core skills and career readiness. Each item can be managed from the Admin Panel.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <article key={certificate.id} className="rounded-[2rem] border border-slate-800/90 bg-slate-900/90 p-6 shadow-glow transition hover:-translate-y-1">
              <div className="mb-5 rounded-3xl bg-slate-950/90 p-4">
                <img src={certificate.image} alt={certificate.title} className="h-48 w-full rounded-3xl object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-white">{certificate.title}</h3>
              <p className="mt-3 text-slate-300">{certificate.organization}</p>
              <p className="mt-2 text-sm text-slate-400">Issued {certificate.issueDate}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={certificate.credentialUrl} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-400/10 px-4 py-2 text-xs text-cyan-300 transition hover:bg-cyan-400/20">
                  View Certificate
                </a>
                <a href={certificate.credentialUrl} download className="rounded-full bg-slate-800 px-4 py-2 text-xs text-slate-200 transition hover:bg-slate-700">
                  Download
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificatesSection;
