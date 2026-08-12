import Profile from '../models/Profile.js';

export const getProfile = async (req, res) => {
  const profile = await Profile.findOne().sort({ createdAt: -1 });
  if (!profile) return res.status(404).json({ message: 'Profile not found' });
  res.json(profile);
};

export const updateProfile = async (req, res) => {
  const profile = await Profile.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(profile);
};
