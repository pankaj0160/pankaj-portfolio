export const personalInfo = {
  name: "Pankaj Thakur",
  role: "AI Engineer & Full Stack Developer",
  taglines: [
    "AI Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "GenAI & RAG Developer"
  ],

  email: "pankajthakur.dev01@gmail.com",
  phone: "+91 8964056215",
  location: "Gwalior, Madhya Pradesh, India",

  education: {
    institution: "Madhav Institute of Technology & Science (MITS), Gwalior",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    duration: "2023 – 2027",
    cgpa: "8.3 / 10"
  },

  summary:
    "AI & Full-Stack Developer pursuing B.Tech in AI & Data Science. Experienced in building production-grade AI systems, RAG pipelines, multi-agent applications, and scalable full-stack products using LangChain, LangGraph, FastAPI, React.js, and Node.js. Qualified GATE CSE 2026 (Top 7.3% nationally) and actively seeking AI Engineer / Software Development internships."
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/pankaj-thakur-b3b749288/",
  github: "https://github.com/pankaj0160",
  leetcode: "https://leetcode.com/u/pankaj_devx/",
  resume: "/resume.pdf"
};

export const skills = {
  languages: [
    "Python",
    "C++",
    "JavaScript",
    "SQL",
    "HTML5",
    "CSS3"
  ],

  frontend: [
    "React.js",
    "Vite",
    "Tailwind CSS",
    "React Router DOM",
    "Streamlit",
    "Leaflet"
  ],

  backend: [
    "Node.js",
    "Express.js",
    "FastAPI",
    "REST APIs",
    "JWT Authentication",
    "RBAC",
    "Zod"
  ],

  databases: [
    "MongoDB Atlas",
    "MySQL",
    "SQLite",
    "ChromaDB"
  ],

  ai: [
    "LangChain",
    "LangGraph",
    "RAG",
    "Agentic AI",
    "Multi-Agent Systems",
    "Prompt Engineering",
    "NLP",
    "OpenAI Whisper",
    "Groq",
    "HuggingFace Embeddings"
  ],

  tools: [
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "Socket.io",
    "Razorpay",
    "Google OAuth",
    "FFmpeg",
    "Tavily API"
  ],

  deployment: [
    "Vercel",
    "Render",
    "MongoDB Atlas",
    "Streamlit Cloud"
  ],

  coreCS: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "System Design Fundamentals",
    "REST API Design",
    "Authentication & Authorization",
    "Concurrency Control"
  ]
};
export const projects = [
  {
    title: "ResearchOS — Multi-Modal AI Research Platform",
    featured: true,

    description:
      "A production-grade AI research platform integrating Topic Research, PDF Chat, News Intelligence, and AI Dashboard modules with streaming AI workflows and multi-agent systems.",

    techStack: [
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Groq",
      "React.js",
      "ChromaDB",
      "SQLite",
      "JWT",
      "SSE",
      "Tavily API"
    ],

    features: [
      "4 AI-powered modules",
      "21 REST API routes",
      "Streaming SSE responses",
      "JWT-secured authentication",
      "Multi-agent research pipeline",
      "News intelligence system",
      "PDF RAG chatbot",
      "Dashboard AI assistant",
      "Session-isolated vector databases"
    ],

    github: "https://github.com/pankaj0160/ResearchOS",
    liveDemo: "https://github.com/pankaj0160/ResearchOS"
  },

  {
    title: "Summly — AI Meeting Intelligence Platform",
    featured: true,

    description:
      "AI-powered meeting intelligence system that transcribes, analyzes, summarizes, and enables semantic search over meeting recordings.",

    techStack: [
      "FastAPI",
      "LangGraph",
      "Groq",
      "OpenAI Whisper",
      "ChromaDB",
      "FFmpeg",
      "SQLite",
      "React.js"
    ],

    features: [
      "Audio transcription",
      "Meeting summarization",
      "Action item extraction",
      "Decision tracking",
      "Topic tagging",
      "RAG-based Q&A",
      "YouTube ingestion",
      "Email generation",
      "JWT authentication"
    ],

    github: "https://github.com/pankaj0160/AI-meeting-Assistant",
    liveDemo: "https://github.com/pankaj0160/AI-meeting-Assistant"
  },

  {
    title: "SmartPark — Full-Stack Parking SaaS",
    featured: true,

    description:
      "Production-ready parking management platform with smart recommendations, real-time booking, online payments, and role-based access control.",

    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Socket.io",
      "Razorpay",
      "JWT",
      "Leaflet"
    ],

    features: [
      "Driver, Owner & Admin roles",
      "Real-time parking availability",
      "Online payments",
      "Google OAuth",
      "Geo-based recommendations",
      "Booking analytics",
      "Socket.io updates",
      "Secure JWT authentication",
      "MongoDB transactions"
    ],

    liveDemo: "https://smart-park-client.vercel.app/",
    github: "https://github.com/pankaj0160/SmartPark"
  }
];
export const achievements = [
  {
    title: "GATE CSE 2026",
    value: "426",
    suffix: "",
    description: "GATE Score"
  },
  {
    title: "LeetCode",
    value: "120",
    suffix: "+",
    description: "Problems Solved"
  },
  {
    title: "Production AI Projects",
    value: "3",
    suffix: "+",
    description: "Deployed Projects"
  },
  {
    title: "CGPA",
    value: "8.3",
    suffix: "",
    description: "Current CGPA"
  }
];
export const certifications = [
  {
    title: "DSA & Problem Solving",
    issuer: "PW Skills",
    description:
      "Data Structures, Algorithms, Problem Solving, Time & Space Complexity.",
    link:
      "https://cdn.pwskills.com/learn/certificates/8f46db3a-5ba2-4783-a69a-8de1727a9384.pdf"
  },

  {
    title: "Backend Development (Node.js & Express.js)",
    issuer: "Udemy",
    description:
      "REST APIs, Authentication, Authorization, Middleware, JWT Security.",
    link:
      "https://www.udemy.com/certificate/UC-dcb0bae9-f7d8-4fd9-be03-debb55df0e22/"
  }
];


export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];