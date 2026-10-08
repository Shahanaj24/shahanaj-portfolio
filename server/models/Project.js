import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true },
    longDescription: { type: String, required: true },
    image: { type: String, required: true },
    technologies: [{ type: String }],
    features: [{ type: String }],
    githubUrl: { type: String, default: '#' },
    liveUrl: { type: String, default: '#' },
    featured: { type: Boolean, default: false },
    category: { type: String, default: 'MERN' },
  },
  { timestamps: true },
);

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
