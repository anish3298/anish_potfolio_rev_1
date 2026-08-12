import { useState } from 'react';
import profile from '../data/profile';

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-12">
      <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-10 shadow-glow">
        <div className="mb-10">
          <span className="inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-300">Contact</span>
          <h2 className="mt-4 text-4xl font-semibold text-white">Ready to collaborate on your next digital product.</h2>
          <p className="mt-3 max-w-3xl text-slate-300">Send a message to discuss full stack development, product engineering, or project opportunities.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6 rounded-3xl border border-slate-800/90 bg-slate-900/90 p-8">
            <div>
              <h3 className="text-lg font-semibold text-white">Email</h3>
              <p className="mt-2 text-slate-300">anishsandilya6@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Location</h3>
              <p className="mt-2 text-slate-300">Gurgaon, Haryana, India</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Phone</h3>
              <p className="mt-2 text-slate-300">+91 9588103298</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Social</h3>
              <div className="mt-3 flex flex-col gap-2 text-slate-300">
                <a href={profile.contact.github} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">GitHub</a>
                <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-800/90 bg-slate-900/90 p-8">
            {submitted && <p className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-200">Message sent successfully.</p>}
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                Name
                <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
              </label>
            </div>
            <label className="space-y-2 text-sm text-slate-300">
              Subject
              <input name="subject" value={form.subject} onChange={handleChange} required className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Message
              <textarea name="message" value={form.message} onChange={handleChange} required rows="5" className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
            </label>
            <button type="submit" className="w-full rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
