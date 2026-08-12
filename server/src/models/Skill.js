import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  published: { type: Boolean, default: true }
}, { timestamps: true });

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;
