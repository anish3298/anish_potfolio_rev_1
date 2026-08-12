import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import User from '../models/User.js';

const generateToken = (user) => jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '1d' });

const createEmailTransporter = () => {
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

const sendResetEmail = async (to, resetUrl) => {
  const transporter = createEmailTransporter();
  if (!transporter) {
    return null;
  }

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to,
    subject: 'Portfolio Admin Password Reset',
    html: `<p>Click the link below to reset your admin password:</p><p><a href="${resetUrl}">${resetUrl}</a></p><p>This link expires in one hour.</p>`
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user);
  res.status(200).json({ token });
};

export const register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'Email already exists' });

  const hashed = await bcrypt.hash(password, 12);
  const user = await User.create({ email, password: hashed });
  const token = generateToken(user);
  res.status(201).json({ token });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(200).json({ message: 'If that account exists, reset instructions have been sent.' });
  }

  const resetToken = crypto.randomBytes(20).toString('hex');
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = Date.now() + 3600000;
  await user.save();

  const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/admin/reset-password/${resetToken}`;

  try {
    await sendResetEmail(user.email, resetUrl);
  } catch (emailError) {
    console.error('Email send failed:', emailError.message || emailError);
  }

  const responseBody = { message: 'If that account exists, reset instructions have been sent.' };
  if (!process.env.EMAIL_HOST) {
    responseBody.resetUrl = resetUrl;
  }

  res.status(200).json(responseBody);
};

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  if (!password) return res.status(400).json({ message: 'Password is required' });

  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() }
  });

  if (!user) {
    return res.status(400).json({ message: 'Reset token is invalid or has expired' });
  }

  user.password = await bcrypt.hash(password, 12);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();

  const newToken = generateToken(user);
  res.status(200).json({ message: 'Password reset successful', token: newToken });
};
