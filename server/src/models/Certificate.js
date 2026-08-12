import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  organization: String,
  issueDate: String,
  credentialId: String,
  credentialUrl: String,
  description: String,
  image: String,
  published: { type: Boolean, default: true }
}, { timestamps: true });

const Certificate = mongoose.model('Certificate', certificateSchema);
export default Certificate;
