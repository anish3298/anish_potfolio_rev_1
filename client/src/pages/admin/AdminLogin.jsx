import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import api, { getToken, setToken } from '../../services/api';

function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (token) {
      navigate('/admin/dashboard');
    }
  }, [navigate, token]);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/auth/login', form);
      setToken(response.data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  if (token) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-background px-6 py-24 text-slate-100">
      <div className="mx-auto max-w-md rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-10 shadow-glow">
        <h1 className="text-3xl font-semibold text-white">Admin Login</h1>
        <p className="mt-3 text-slate-400">Secure access to the portfolio admin dashboard.</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && <div className="rounded-2xl bg-rose-500/10 p-4 text-sm text-rose-200">{error}</div>}
          <label className="block text-sm text-slate-300">
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="admin@example.com"
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400"
            />
          </label>
          <label className="block text-sm text-slate-300">
            Password
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange}
              placeholder="Your password"
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400"
            />
          </label>
          <div className="flex items-center justify-between gap-4 text-sm text-slate-400">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword((value) => !value)}
                className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-cyan-400"
              />
              Show password
            </label>
            <Link to="/admin/forgot-password" className="text-cyan-300 hover:text-cyan-200">Forgot password?</Link>
          </div>
          <button type="submit" className="w-full rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Sign in</button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-400">
          Need an account? <Link to="/admin/signup" className="text-cyan-300 hover:text-cyan-200">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
