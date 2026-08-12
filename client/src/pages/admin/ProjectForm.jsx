import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';

const initialState = {
  title: '',
  slug: '',
  description: '',
  problemStatement: '',
  solution: '',
  technologies: '',
  features: '',
  images: '',
  githubUrl: '',
  liveUrl: '',
  challenges: '',
  learnings: '',
  futureImprovements: '',
  published: true
};

function ProjectForm() {
  const { id } = useParams();
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    api.get(`/projects/id/${id}`)
      .then((response) => {
        const project = response.data;
        setForm({
          ...project,
          technologies: project.technologies?.join(', ') || '',
          features: project.features?.join(', ') || '',
          images: project.images?.join(', ') || ''
        });
      })
      .catch(() => setError('Unable to load project data'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    const payload = {
      ...form,
      technologies: form.technologies.split(',').map((item) => item.trim()).filter(Boolean),
      features: form.features.split(',').map((item) => item.trim()).filter(Boolean),
      images: form.images.split(',').map((item) => item.trim()).filter(Boolean)
    };

    try {
      if (id) {
        await api.put(`/projects/${id}`, payload);
        setMessage('Project updated successfully');
      } else {
        await api.post('/projects', payload);
        setMessage('Project created successfully');
      }
      setTimeout(() => navigate('/admin/projects'), 900);
    } catch (err) {
      setError(err.response?.data?.message || 'Save failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background px-6 py-24 text-slate-100">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-10 shadow-glow">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white">{id ? 'Edit Project' : 'New Project'}</h1>
            <p className="mt-2 text-slate-400">Add or update your portfolio project details.</p>
          </div>
          <button type="button" onClick={() => navigate('/admin/projects')} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800/80">
            Back to projects
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && <div className="rounded-2xl bg-rose-500/10 p-4 text-sm text-rose-200">{error}</div>}
          {message && <div className="rounded-2xl bg-emerald-500/10 p-4 text-sm text-emerald-200">{message}</div>}

          <div className="grid gap-6 lg:grid-cols-2">
            <label className="block text-sm text-slate-300">
              Title
              <input name="title" value={form.title} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
            </label>
            <label className="block text-sm text-slate-300">
              Slug
              <input name="slug" value={form.slug} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
            </label>
          </div>

          <label className="block text-sm text-slate-300">
            Description
            <textarea name="description" value={form.description} onChange={handleChange} rows="3" className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
          </label>

          <label className="block text-sm text-slate-300">
            Problem Statement
            <textarea name="problemStatement" value={form.problemStatement} onChange={handleChange} rows="2" className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
          </label>

          <label className="block text-sm text-slate-300">
            Solution
            <textarea name="solution" value={form.solution} onChange={handleChange} rows="2" className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
          </label>

          <div className="grid gap-6 lg:grid-cols-2">
            <label className="block text-sm text-slate-300">
              Technologies
              <input name="technologies" value={form.technologies} onChange={handleChange} placeholder="React, Node.js, MongoDB" className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
            </label>
            <label className="block text-sm text-slate-300">
              Features
              <input name="features" value={form.features} onChange={handleChange} placeholder="Authentication, API, Dashboard" className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
            </label>
          </div>

          <label className="block text-sm text-slate-300">
            Images
            <input name="images" value={form.images} onChange={handleChange} placeholder="https://... , https://..." className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
          </label>

          <div className="grid gap-6 lg:grid-cols-2">
            <label className="block text-sm text-slate-300">
              GitHub URL
              <input name="githubUrl" value={form.githubUrl} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
            </label>
            <label className="block text-sm text-slate-300">
              Live URL
              <input name="liveUrl" value={form.liveUrl} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
            </label>
          </div>

          <label className="block text-sm text-slate-300">
            Challenges
            <textarea name="challenges" value={form.challenges} onChange={handleChange} rows="2" className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
          </label>

          <label className="block text-sm text-slate-300">
            Learnings
            <textarea name="learnings" value={form.learnings} onChange={handleChange} rows="2" className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
          </label>

          <label className="block text-sm text-slate-300">
            Future Improvements
            <textarea name="futureImprovements" value={form.futureImprovements} onChange={handleChange} rows="2" className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
          </label>

          <label className="inline-flex items-center gap-3 text-sm text-slate-300">
            <input name="published" type="checkbox" checked={form.published} onChange={handleChange} className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-cyan-400" />
            Published
          </label>

          <button type="submit" disabled={loading} className="w-full rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-60">
            {id ? 'Save project' : 'Create project'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProjectForm;
