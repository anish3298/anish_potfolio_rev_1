import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  problemStatement: String,
  solution: String,
  technologies: [String],
  features: [String],
  images: [String],
  githubUrl: String,
  liveUrl: String,
  challenges: String,
  learnings: String,
  futureImprovements: String,
  published: { type: Boolean, default: true }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;
