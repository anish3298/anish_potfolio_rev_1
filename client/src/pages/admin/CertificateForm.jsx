import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';

const initialState = {
  title: '',
  organization: '',
  issueDate: '',
  credentialId: '',
  credentialUrl: '',
  description: '',
  image: '',
  published: true
};

function CertificateForm() {
  const { id } = useParams();
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    api.get(`/certificates/${id}`)
      .then((response) => setForm(response.data))
      .catch(() => setError('Unable to load certificate data'))
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

    try {
      if (id) {
        await api.put(`/certificates/${id}`, form);
        setMessage('Certificate updated successfully');
      } else {
        await api.post('/certificates', form);
        setMessage('Certificate created successfully');
      }
      setTimeout(() => navigate('/admin/certificates'), 900);
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
            <h1 className="text-3xl font-semibold text-white">{id ? 'Edit Certificate' : 'New Certificate'}</h1>
            <p className="mt-2 text-slate-400">Add or update your portfolio certificate data.</p>
          </div>
          <button type="button" onClick={() => navigate('/admin/certificates')} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800/80">
            Back to certificates
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
              Organization
              <input name="organization" value={form.organization} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
            </label>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <label className="block text-sm text-slate-300">
              Issue Date
              <input name="issueDate" value={form.issueDate} onChange={handleChange} placeholder="YYYY-MM-DD" className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
            </label>
            <label className="block text-sm text-slate-300">
              Credential ID
              <input name="credentialId" value={form.credentialId} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
            </label>
          </div>

          <label className="block text-sm text-slate-300">
            Credential URL
            <input name="credentialUrl" value={form.credentialUrl} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
          </label>

          <label className="block text-sm text-slate-300">
            Description
            <textarea name="description" value={form.description} onChange={handleChange} rows="3" className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
          </label>

          <label className="block text-sm text-slate-300">
            Image URL
            <input name="image" value={form.image} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
          </label>

          <label className="inline-flex items-center gap-3 text-sm text-slate-300">
            <input name="published" type="checkbox" checked={form.published} onChange={handleChange} className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-cyan-400" />
            Published
          </label>

          <button type="submit" disabled={loading} className="w-full rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-60">
            {id ? 'Save certificate' : 'Create certificate'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CertificateForm;
