import Resume from '../models/Resume.js';

export const getActiveResume = async (req, res) => {
  const resume = await Resume.findOne({ active: true }).sort({ createdAt: -1 });
  if (!resume) return res.status(404).json({ message: 'Active resume not found' });
  res.json(resume);
};

export const getResumes = async (req, res) => {
  const resumes = await Resume.find().sort({ createdAt: -1 });
  res.json(resumes);
};

export const uploadResume = async (req, res) => {
  const { fileUrl, active } = req.body;
  if (!fileUrl) return res.status(400).json({ message: 'Resume file URL is required' });

  if (active) {
    await Resume.updateMany({}, { active: false });
  }

  const resume = await Resume.create({ fileUrl, active: active || false });
  res.status(201).json(resume);
};

export const updateResume = async (req, res) => {
  const resume = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!resume) return res.status(404).json({ message: 'Resume not found' });
  res.json(resume);
};

export const deleteResume = async (req, res) => {
  const resume = await Resume.findByIdAndDelete(req.params.id);
  if (!resume) return res.status(404).json({ message: 'Resume not found' });
  res.json({ message: 'Resume deleted' });
};

export const incrementDownload = async (req, res) => {
  const resume = await Resume.findByIdAndUpdate(req.params.id, { $inc: { downloadCount: 1 } }, { new: true });
  if (!resume) return res.status(404).json({ message: 'Resume not found' });
  res.json(resume);
};
