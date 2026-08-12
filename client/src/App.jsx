import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import ResumePage from './pages/ResumePage';
import NotFound from './pages/NotFound';
import AdminLogin from './pages/admin/AdminLogin';
import AdminSignup from './pages/admin/AdminSignup';
import AdminForgotPassword from './pages/admin/AdminForgotPassword';
import AdminResetPassword from './pages/admin/AdminResetPassword';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProjects from './pages/admin/AdminProjects';
import ProjectForm from './pages/admin/ProjectForm';
import AdminCertificates from './pages/admin/AdminCertificates';
import CertificateForm from './pages/admin/CertificateForm';
import ProtectedRoute from './components/ProtectedRoute';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}> 
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:slug" element={<ProjectDetail />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
          <Route path="/admin/reset-password/:token" element={<AdminResetPassword />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/projects" element={<ProtectedRoute><AdminProjects /></ProtectedRoute>} />
          <Route path="/admin/projects/new" element={<ProtectedRoute><ProjectForm /></ProtectedRoute>} />
          <Route path="/admin/projects/:id/edit" element={<ProtectedRoute><ProjectForm /></ProtectedRoute>} />
          <Route path="/admin/certificates" element={<ProtectedRoute><AdminCertificates /></ProtectedRoute>} />
          <Route path="/admin/certificates/new" element={<ProtectedRoute><CertificateForm /></ProtectedRoute>} />
          <Route path="/admin/certificates/:id/edit" element={<ProtectedRoute><CertificateForm /></ProtectedRoute>} />
          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
