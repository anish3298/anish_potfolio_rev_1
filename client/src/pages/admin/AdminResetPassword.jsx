import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api, { setToken } from '../../services/api';

function AdminResetPassword() {
  const { token } = useParams();
  const [form, setForm] = useState({ password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await api.post(`/auth/reset-password/${token}`, { password: form.password });
      setToken(response.data.token);
      setMessage(response.data.message || 'Password reset successful.');
      setTimeout(() => navigate('/admin/dashboard'), 1200);
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to reset password.');
    }
  };

  return (
    <div className="min-h-screen bg-background px-6 py-24 text-slate-100">
      <div className="mx-auto max-w-md rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-10 shadow-glow">
        <h1 className="text-3xl font-semibold text-white">Reset Password</h1>
        <p className="mt-3 text-slate-400">Enter a new password for your admin account.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {message && <div className="rounded-2xl bg-emerald-500/10 p-4 text-sm text-emerald-200">{message}</div>}
          {error && <div className="rounded-2xl bg-rose-500/10 p-4 text-sm text-rose-200">{error}</div>}

          <label className="block text-sm text-slate-300">
            New Password
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange}
              placeholder="New password"
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400"
            />
          </label>

          <label className="block text-sm text-slate-300">
            Confirm Password
            <input
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400"
            />
          </label>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword((value) => !value)}
              className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-cyan-400"
            />
            <span>Show password</span>
          </div>

          <button type="submit" className="w-full rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            Reset password
          </button>

          <div className="pt-4 text-sm text-slate-400">
            <Link to="/admin/login" className="text-cyan-300 hover:text-cyan-200">Return to sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminResetPassword;
