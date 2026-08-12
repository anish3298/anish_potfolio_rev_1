import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
  fileUrl: { type: String, required: true },
  active: { type: Boolean, default: true },
  downloadCount: { type: Number, default: 0 }
}, { timestamps: true });

const Resume = mongoose.model('Resume', resumeSchema);
export default Resume;
