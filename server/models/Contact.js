import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email'],
    },
    message: { type: String, required: true, trim: true, maxlength: 1200 },
  },
  { timestamps: true },
);

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
