import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: String,
  role: String,
  status: String,
  summary: String,
  location: String,
  email: String,
  github: String,
  linkedin: String
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;
