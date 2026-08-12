import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRoutes from './routes/api/auth.js';
import projectRoutes from './routes/api/projects.js';
import certificateRoutes from './routes/api/certificates.js';
import experienceRoutes from './routes/api/experience.js';
import skillRoutes from './routes/api/skills.js';
import educationRoutes from './routes/api/education.js';
import messageRoutes from './routes/api/messages.js';
import resumeRoutes from './routes/api/resume.js';
import profileRoutes from './routes/api/profile.js';
import settingsRoutes from './routes/api/settings.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 120 });
app.use(limiter);

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/settings', settingsRoutes);

app.get('/api', (req, res) => res.json({ message: 'Portfolio API running' }));

app.use((req, res) => res.status(404).json({ message: 'Resource not found' }));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || 'Server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
