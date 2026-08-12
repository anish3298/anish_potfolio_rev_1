import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: String,
  dates: String,
  details: String,
  published: { type: Boolean, default: true }
}, { timestamps: true });

const Education = mongoose.model('Education', educationSchema);
export default Education;
