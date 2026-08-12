import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' },
  resetPasswordToken: String,
  resetPasswordExpires: Date
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
