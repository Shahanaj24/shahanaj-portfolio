export const projects = [
  {
    id: 1,
    title: 'Interview-Ai',
    slug: 'interview-ai',
    description:
      'AI-powered interview preparation platform that analyzes resumes against job descriptions and creates smart preparation plans.',
    longDescription:
      'Interview-Ai is an AI-powered interview preparation platform built using the MERN stack and Gemini AI. Users can upload their resume and provide a job description to analyze how well their profile matches the role. The application generates a match score, identifies skill gaps, creates technical and behavioral interview questions, and provides a personalized preparation plan. It also includes authentication, resume upload, MongoDB storage, and PDF report generation using Puppeteer.',
    problemStatement:
      'Job seekers often struggle to understand how well their resume matches a specific job description and what they should prepare for an interview. They also have to manually identify skill gaps and prepare technical and behavioral questions.',
    solution:
      "Interview-Ai analyzes the user's resume and job description using Gemini AI. It identifies relevant skills, highlights skill gaps, generates technical and behavioral interview questions, and creates a personalized preparation plan.",
    architecture:
      'React frontend communicates with a Node.js and Express.js backend through REST APIs. User data and application information are stored in MongoDB. Gemini AI is used for resume and job description analysis and interview content generation. Puppeteer is used to generate PDF reports. The application is deployed using AWS EC2.',
    challenges: 'Integrating Gemini AI into the application, handling resume uploads, designing useful prompts for AI-generated results, managing authentication and protected routes, generating downloadable PDF reports, and deploying the MERN application on AWS EC2.',
    learned:
      'I learned how to integrate generative AI APIs into a MERN application, design effective AI prompts, implement JWT authentication, handle file uploads, create PDF reports, build REST APIs, and deploy a full-stack application on AWS EC2.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Gemini AI', 'JWT', 'Puppeteer', 'AWS EC2'],
    features: ['Resume upload', 'Job description analysis', 'AI-generated match score', 'Skill gap identification', 'Technical interview questions', 'Behavioral interview questions', 'Personalized preparation plan', 'User authentication', 'JWT-based authorization', 'PDF report generation', 'MongoDB data storage'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://interview-ai.shahanaj.tech/login',
    featured: true,
    category: 'AI / MERN',
  },
  {
    id: 2,
    title: 'Query-Nest',
    slug: 'query-nest',
    description:
      'AI-powered document question-answering application using a Retrieval-Augmented Generation pipeline.',
    longDescription:
      'Query-Nest is an AI-powered document question-answering application that allows users to upload PDF documents and ask questions based on their documents. It uses a RAG pipeline to extract text from PDFs, split the text into chunks, generate embeddings using Hugging Face, store them in FAISS, and retrieve relevant information before generating answers using Gemini. It supports user authentication, separate document libraries, multiple chat histories, and page-level citations.',
    problemStatement:
      "Users often spend a lot of time searching through large PDF documents to find specific information. Traditional keyword search may not understand the meaning of a user's question or provide a direct answer.",
    solution:
      "Query-Nest uses a RAG pipeline to extract text from uploaded PDFs, split the content into smaller chunks, generate embeddings, store them in FAISS, and retrieve the most relevant information for a user's question. Gemini AI then generates an answer based on the retrieved document content.",
    architecture:
      'PDF → PyPDFLoader → Text Splitting → Hugging Face Embeddings → FAISS Vector Store → Similarity Search → Gemini AI → Answer with Citations. Each user’s documents are isolated using user-specific storage and ownership checks.',
    challenges: 'Building a complete RAG pipeline, extracting and splitting PDF content, generating and storing document embeddings, implementing user-specific FAISS indexes, connecting retrieval results with Gemini, providing accurate page-level citations, and maintaining secure multi-user document isolation.',
    learned:
      'I learned how RAG systems work, how to create embeddings, use vector databases such as FAISS, integrate LangChain with Gemini, build APIs using FastAPI, and implement secure multi-user document retrieval.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Python', 'FastAPI', 'MongoDB', 'LangChain', 'Gemini AI', 'Hugging Face', 'FAISS'],
    features: ['User registration and login', 'JWT authentication', 'PDF upload', 'Personal document library', 'Multiple chat conversations', 'Persistent chat history', 'AI-powered PDF question answering', 'Semantic document search', 'FAISS vector search', 'Page-level citations', 'User-specific document isolation', 'Not found in documents behavior'],
    githubUrl: 'https://github.com/',
    liveUrl: null,
    featured: true,
    category: 'AI / RAG',
  },
  {
    id: 3,
    title: 'Cravio',
    slug: 'cravio',
    description:
      'Food-focused social application for food reels, reviews, and order discovery.',
    longDescription:
      'Cravio is a food-focused social application built using the MERN stack. Users can explore food reels, share food-related content, interact with reviews, and use the platform for food-related orders. The application includes user authentication, media handling, reviews, and order management.',
    problemStatement:
      'Food lovers often use different platforms to discover food content, share experiences, read reviews, and interact with food-related content. There is a need for a single platform that combines food discovery, social content, reviews, and ordering functionality.',
    solution:
      'Cravio combines food reels, user-generated food content, reviews, and food-related ordering into one MERN-based application. Users can authenticate securely, explore food content, interact with reviews, and manage their food-related activities from one platform.',
    architecture:
      'React frontend → Express.js REST APIs → Node.js backend → MongoDB database. ImageKit is used for media handling and storage. JWT and cookies are used for authentication and session management.',
    challenges: 'Building a complete MERN application, implementing secure authentication, handling image and media uploads, managing reviews and user-generated content, designing APIs for different application features, and managing order-related data.',
    learned:
      'I improved my understanding of MERN stack development, REST API design, MongoDB data modeling, JWT authentication, cookie-based authentication, media handling, and building complete full-stack applications.',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'ImageKit', 'JWT', 'Cookies'],
    features: ['User authentication', 'Food reels', 'Food-related content', 'Reviews', 'Order management', 'Media upload and handling', 'JWT authentication', 'Cookie-based authentication', 'ImageKit integration', 'MongoDB data storage'],
    githubUrl: 'https://github.com/',
    liveUrl: null,
    featured: true,
    category: 'MERN / Full Stack',
  },
  {
    id: 4,
    title: 'Quora-Lite',
    slug: 'quora-lite',
    description:
      'MERN stack question-and-answer community platform inspired by Quora.',
    longDescription:
      'Quora-Lite is a MERN stack-based question-and-answer platform inspired by Quora. It allows users to ask questions, share answers, and participate in a community-driven knowledge-sharing platform. The project focuses on building a complete full-stack application with user interaction, authentication, and content management.',
    problemStatement:
      'Users need a simple platform where they can ask questions, share knowledge, and find answers from other users in a community-driven environment.',
    solution:
      'Quora-Lite provides a full-stack question-and-answer platform where users can create and manage questions and answers and participate in knowledge sharing.',
    architecture: 'React frontend → Express.js REST APIs → Node.js backend → MongoDB database.',
    challenges: 'Designing the question-and-answer data structure, building REST APIs, managing user-generated content, connecting frontend components with backend APIs, and designing a responsive and user-friendly interface.',
    learned:
      'I improved my understanding of MERN stack development, REST APIs, MongoDB, frontend-backend integration, authentication, and managing user-generated content.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    features: ['User authentication', 'Ask questions', 'Post answers', 'View questions and answers', 'User interaction', 'Content management', 'Responsive interface'],
    githubUrl: 'https://github.com/',
    liveUrl: null,
    featured: false,
    category: 'MERN / Full Stack',
  },
  {
    id: 5,
    title: 'MelodiStream',
    slug: 'melodistream',
    description:
      'MERN stack music streaming web application with a modern, responsive browsing experience.',
    longDescription:
      'MelodiStream is a MERN stack-based music streaming web application designed to provide users with an interactive platform for exploring and listening to music. It focuses on creating a smooth music browsing and streaming experience with a modern and responsive interface.',
    problemStatement:
      'Users need a simple and engaging platform where they can browse music and enjoy an interactive music-listening experience from a modern web application.',
    solution:
      'MelodiStream provides a full-stack music platform with a responsive React interface and a Node.js/Express backend connected to MongoDB.',
    architecture: 'React frontend → Express.js REST APIs → Node.js backend → MongoDB database.',
    challenges: 'Building a responsive music interface, managing music-related data, connecting the React frontend with backend APIs, designing a smooth user experience, and structuring the application using the MERN stack.',
    learned:
      'I improved my understanding of MERN stack development, React component design, REST APIs, MongoDB, frontend-backend integration, and building responsive full-stack applications.',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    features: ['Music browsing', 'Music streaming', 'Responsive music interface', 'User interaction', 'Full-stack MERN architecture', 'MongoDB data management'],
    githubUrl: 'https://github.com/',
    liveUrl: null,
    featured: false,
    category: 'MERN / Full Stack',
  },
];

export const projectFilters = ['All', 'MERN', 'AI'];
