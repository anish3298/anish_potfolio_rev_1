import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: String,
  location: String,
  dates: String,
  points: [String],
  published: { type: Boolean, default: true }
}, { timestamps: true });

const Experience = mongoose.model('Experience', experienceSchema);
export default Experience;
