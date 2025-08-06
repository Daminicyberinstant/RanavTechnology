// models/jobApplicationModel.js
import mongoose from 'mongoose';

const JobApplicationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dob: String,
  email: String,
  contact: String,
  linkedin: String,
  portfolio: String,
  fitAnswer1: String,
  fitAnswer2: String,
  skills: String,
  currentCTC: String,
  expectedCTC: String,
  references: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.JobApplication ||
  mongoose.model('JobApplication', JobApplicationSchema);
