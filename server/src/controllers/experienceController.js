import Experience from '../models/Experience.js';

export const getExperience = async (req, res) => {
  const experience = await Experience.find({ published: true }).sort({ createdAt: -1 });
  res.json(experience);
};

export const createExperience = async (req, res) => {
  const experience = await Experience.create(req.body);
  res.status(201).json(experience);
};

export const updateExperience = async (req, res) => {
  const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!experience) return res.status(404).json({ message: 'Experience not found' });
  res.json(experience);
};

export const deleteExperience = async (req, res) => {
  const experience = await Experience.findByIdAndDelete(req.params.id);
  if (!experience) return res.status(404).json({ message: 'Experience not found' });
  res.json({ message: 'Experience deleted' });
};
