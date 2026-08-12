import Education from '../models/Education.js';

export const getEducation = async (req, res) => {
  const education = await Education.find({ published: true }).sort({ createdAt: -1 });
  res.json(education);
};

export const createEducation = async (req, res) => {
  const education = await Education.create(req.body);
  res.status(201).json(education);
};

export const updateEducation = async (req, res) => {
  const education = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!education) return res.status(404).json({ message: 'Education record not found' });
  res.json(education);
};

export const deleteEducation = async (req, res) => {
  const education = await Education.findByIdAndDelete(req.params.id);
  if (!education) return res.status(404).json({ message: 'Education record not found' });
  res.json({ message: 'Education deleted' });
};
