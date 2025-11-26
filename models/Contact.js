import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    maxlength: [100, 'Name cannot be more than 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    maxlength: [100, 'Email cannot be more than 100 characters'],
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  type: {
    type: String,
    required: [true, 'Please select an inquiry type'],
    enum: ['artist', 'event', 'brand', 'creative', 'other'],
  },
  subject: {
    type: String,
    required: [true, 'Please provide a subject'],
    maxlength: [200, 'Subject cannot be more than 200 characters'],
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
    maxlength: [5000, 'Message cannot be more than 5000 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['new', 'read', 'responded', 'archived'],
    default: 'new',
  },
})

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema)

