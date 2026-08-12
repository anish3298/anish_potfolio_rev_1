import mongoose from 'mongoose';

const siteSettingsSchema = new mongoose.Schema({
  githubUsername: String,
  recruiterView: { type: Boolean, default: true },
  socialLinks: {
    github: String,
    linkedin: String,
    email: String
  }
}, { timestamps: true });

const SiteSettings = mongoose.model('SiteSettings', siteSettingsSchema);
export default SiteSettings;
