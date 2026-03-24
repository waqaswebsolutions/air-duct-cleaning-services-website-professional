import mongoose from 'mongoose'

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    match: [/.+\@.+\..+/, 'Please provide a valid email'],
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number'],
    trim: true,
  },
  message: {
    type: String,
    default: '',
    trim: true,
  },
  service: {
    type: String,
    default: '',
  },
  preferredDate: {
    type: String,
    default: '',
  },
  package: {
    type: String,
    default: 'professional',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema)