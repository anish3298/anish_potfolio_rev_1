import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import api, { getToken } from '../../services/api';

function AdminForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const token = getToken();

  useEffect(() => {
    if (token) {
      window.location.href = '/admin/dashboard';
    }
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await api.post('/auth/forgot-password', { email });
      setMessage(response.data.message || 'If that account exists, instructions have been sent.');
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to send reset instructions.');
    }
  };

  if (token) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-background px-6 py-24 text-slate-100">
      <div className="mx-auto max-w-md rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-10 shadow-glow">
        <h1 className="text-3xl font-semibold text-white">Forgot Password</h1>
        <p className="mt-3 text-slate-400">Enter your admin email and we&rsquo;ll send a reset link if the account exists.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {message && <div className="rounded-2xl bg-emerald-500/10 p-4 text-sm text-emerald-200">{message}</div>}
          {error && <div className="rounded-2xl bg-rose-500/10 p-4 text-sm text-rose-200">{error}</div>}

          <label className="block text-sm text-slate-300">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="admin@example.com"
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400"
            />
          </label>

          <button type="submit" className="w-full rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            Send reset link
          </button>

          <div className="pt-4 text-sm text-slate-400">
            <Link to="/admin/login" className="text-cyan-300 hover:text-cyan-200">Back to sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminForgotPassword;
