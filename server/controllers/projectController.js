const projectSeed = [
  {
    id: 1,
    title: 'Interview AI',
    slug: 'interview-ai',
    description:
      'Interview-Ai is an AI-powered interview preparation platform built using the MERN stack and Gemini AI.',
    longDescription:
      'Interview-Ai is an AI-powered interview preparation platform built using the MERN stack and Gemini AI. Users can upload their resume and provide a job description to analyze how well their profile matches the role. The application generates a match score, identifies skill gaps, creates technical and behavioral interview questions, and provides a personalized preparation plan. It also includes authentication, resume upload, MongoDB storage, and PDF report generation using Puppeteer.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Gemini AI', 'JWT', 'Puppeteer', 'AWS EC2'],
    features: [
      'Resume analysis',
      'Job description analysis',
      'AI match score',
      'Skill gap analysis',
      'Interview questions',
      'Preparation plan',
      'JWT authentication',
      'Resume upload',
      'PDF report generation',
    ],
    githubUrl: 'https://github.com/Shahanaj24/Interview-AI',
    liveUrl: 'https://interview-ai.shahanaj.tech/login',
    featured: true,
    category: 'MERN',
  },
  {
    id: 2,
    title: 'Query-Nest',
    slug: 'query-nest',
    description:
      'AI-powered document question-answering application using a Retrieval-Augmented Generation pipeline.',
    longDescription:
      'Query-Nest is an AI-powered document question-answering application that allows users to upload PDF documents and ask questions based on their documents. It uses a RAG pipeline to extract text from PDFs, split the text into chunks, generate embeddings using Hugging Face, store them in FAISS, and retrieve relevant information before generating answers using Gemini. It supports user authentication, separate document libraries, multiple chat histories, and page-level citations.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Python', 'FastAPI', 'MongoDB', 'LangChain', 'Gemini AI', 'Hugging Face', 'FAISS'],
    features: [
      'User authentication',
      'PDF upload',
      'Document processing',
      'Text chunking',
      'Embeddings',
      'FAISS vector search',
      'Gemini response generation',
      'Page citations',
      'Multiple chat history',
      'Document isolation',
    ],
    githubUrl: 'https://github.com/Shahanaj24/QueryNest',
    liveUrl: null,
    
    featured: true,
    category: 'AI',
  },
  {
    id: 3,
    title: 'Cravio',
    slug: 'cravio',
    description:
      'Food-focused social application for food reels, reviews, and order discovery.',
    longDescription:
      'Cravio is a food-focused social application built using the MERN stack. Users can explore food reels, share food-related content, interact with reviews, and use the platform for food-related orders. The application includes user authentication, media handling, reviews, and order management.',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'ImageKit', 'JWT', 'Cookies'],
    features: ['Food reels', 'Reviews', 'Order flow', 'Media handling', 'Authentication'],
    githubUrl: 'https://github.com/Shahanaj24/cravio',
    liveUrl: null,
    featured: true,
    category: 'MERN',
  },
  {
    id: 4,
    title: 'Quora-Lite',
    slug: 'quora-lite',
    description:
      'MERN stack question-and-answer community platform inspired by Quora.',
    longDescription:
      'Quora-Lite is a MERN stack-based question-and-answer platform inspired by Quora. It allows users to ask questions, share answers, and participate in a community-driven knowledge-sharing platform. The project focuses on building a complete full-stack application with user interaction, authentication, and content management.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    features: ['Ask questions', 'Answer posts', 'User interaction', 'Authentication', 'Content management'],
    githubUrl: 'https://github.com/Shahanaj24/Quora_Post',
    liveUrl: null,
    featured: false,
    category: 'MERN',
  },
  {
    id: 5,
    title: 'MelodiStream',
    slug: 'melodistream',
    description:
      'MERN stack music streaming web application with a modern, responsive browsing experience.',
    longDescription:
      'MelodiStream is a MERN stack-based music streaming web application designed to provide users with an interactive platform for exploring and listening to music. It focuses on creating a smooth music browsing and streaming experience with a modern and responsive interface.',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    features: ['Music browsing', 'Streaming experience', 'Responsive UI', 'User content discovery', 'Modern interface'],
    githubUrl: 'https://github.com/Shahanaj24/MelodyStream',
    liveUrl: null,
    featured: false,
    category: 'MERN',
  },
];

export const getProjects = async (_req, res) => {
  res.json({ success: true, data: projectSeed });
};

export const getProjectBySlug = async (req, res) => {
  const project = projectSeed.find((item) => item.slug === req.params.slug);

  if (!project) {
    return res.status(404).json({ success: false, message: 'Project not found' });
  }

  return res.json({ success: true, data: project });
};
