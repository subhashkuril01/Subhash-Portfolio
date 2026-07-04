import React from 'react';
import { 
  FaReact, FaNodeJs, FaAngular, FaPython, FaDocker, 
  FaGithub, FaLinux, FaHtml5, FaCss3Alt, FaBootstrap 
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiCplusplus, SiNextdotjs, 
  SiRedux, SiTailwindcss, SiExpress, SiMysql, SiMongodb, 
  SiElasticsearch, SiGithubactions, SiPostman, SiVite 
} from 'react-icons/si';

export const personalInfo = {
  name: "Subhash",
  title: "Full Stack Developer",
  email: "subhashkuril2004@gmail.com",
  github: "https://github.com/subhashkuril01",
  linkedin: "https://www.linkedin.com/in/subhash-kuril-9a92b5354/",
  location: "Remote",
  openForOpportunities: true,
  summary: "Full Stack Developer with hands-on experience in enterprise web application development through a Full Stack Development Internship. Proficient in JavaScript, Angular, React.js, Node.js, Express.js, MySQL, MongoDB, and REST API development, with exposure to Agile/SDLC workflows, Object-Oriented Programming (OOP), and Database Management System (DBMS). Skilled in building authentication systems, dashboards, and scalable web applications with strong debugging and version control (Git) abilities.",
  photoUrl: "https://via.placeholder.com/400x400/1a1a1a/fafafa?text=Subhash", // Placeholder to be replaced by the user
  resumeUrl: "https://drive.google.com/uc?export=download&id=1YimHuX37soedPCJonItAXwCmMinah1od", // Direct download link
  resumeEmbedUrl: "https://drive.google.com/file/d/1YimHuX37soedPCJonItAXwCmMinah1od/preview" // Embed/preview link
};

export const skills = {
  languages: [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" }
  ],
  frontend: [
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "Angular", icon: FaAngular, color: "#DD0031" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" }
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#ffffff" }
  ],
  databases: [
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Elasticsearch", icon: SiElasticsearch, color: "#005571" }
  ],
  tools: [
    { name: "Git", icon: FaGithub, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#ffffff" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "VS Code", icon: SiVite, color: "#007ACC" }, // Fallback icon
    { name: "Linux", icon: FaLinux, color: "#FCC624" }
  ],
  coreConcepts: [
    "Data Structures and Algorithms (DSA)",
    "Object-Oriented Programming (OOP)",
    "JSON Web Token (JWT) and Session-Based Authentication",
    "Role-Based Access Control (RBAC)",
    "API Integration",
    "WebSockets",
    "Unit Testing",
    "Debugging and Testing",
    "Agile Methodology"
  ]
};

export const experience = [
  {
    role: "Software Development Intern",
    company: "C-DAC Mohali",
    duration: "Jan 2026 - Jul 2026",
    responsibilities: [
      "Designed and developed 6 core Angular modules (Dashboard, User Management, Login, Settings, IP Details, Admin) for a threat-intelligence web platform, improving usability and enabling real-time monitoring workflows.",
      "Executed dual-layer authentication (CAPTCHA validation and session management) and integrated REST APIs across 2 backend systems (MySQL and Elasticsearch) to power real-time analytics.",
      "Built front-end interfaces and monitoring dashboards for a 3-layer cybersecurity web architecture using Angular and Node.js, enabling real-time visibility across all three security layers.",
      "Eliminated API integration, data synchronization, and authentication bugs across 4+ modules through systematic testing in Postman and version control via Git, improving platform stability."
    ]
  }
];

export const projects = [
  {
    title: "CTF - Cyber Threat Feed",
    duration: "Mar 2026 - Jun 2026",
    techStack: ["Angular", "Node.js", "Express.js", "MySQL", "Elasticsearch"],
    description: "Real-time threat monitoring web application integrating 5 core technologies with role-based access control and CAPTCHA-secured authentication.",
    features: [
      "Engineered a real-time threat monitoring web application integrating 5 core technologies with role-based access control and CAPTCHA-secured authentication, reducing unauthorized access attempts during testing.",
      "Configured Elasticsearch for low-latency search and IP geo-location mapping, cutting average threat triage time; designed RESTful APIs using Express.js and MySQL."
    ],
    links: {
      github: null, // Proprietary
      live: null
    },
    image: "/ctf.png"
  },
  {
    title: "CVISION - AI Resume Builder and ATS Analyzer",
    duration: "Jan 2026 - Feb 2026",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "JWT"],
    description: "Architected a full stack AI-powered resume builder, cutting manual resume review time by automating ATS compatibility scoring.",
    features: [
      "Architected a full stack AI-powered resume builder, cutting manual resume review time by automating ATS compatibility scoring using the Gemini AI API.",
      "Modeled 3 core MongoDB schemas (users, resumes, AI analysis) with real-time data persistence.",
      "Applied JWT-based authentication, role-based access control, and a JSON parsing pipeline to deliver structured AI feedback."
    ],
    links: {
      github: "https://github.com/subhashkuril01/Ai-resume-builder",
      live: null
    },
    image: "/cvision.png"
  },
  {
    title: "Dial a Meal - Tiffin Services Platform",
    duration: "Aug 2025 - Sep 2025",
    techStack: ["React.js", "JavaScript", "Firebase", "HTML", "CSS", "Bootstrap"],
    description: "Subscription-based tiffin service platform with live order tracking and a zero-refresh UI.",
    features: [
      "Developed a subscription-based tiffin service platform with a Firebase real-time database, enabling live order tracking and menu updates with zero-refresh UI using React state management.",
      "Enforced Firebase Authentication and built a fully responsive UI using React and Bootstrap, supporting a seamless cross-device ordering experience."
    ],
    links: {
      github: "https://github.com/subhashkuril01/Dial-A-Meal", // Add your link
      live: null
    },
    image: "/dial-a-meal.png"
  }
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    college: "Guru Nanak Dev University",
    year: "2022 - 2026",
    cgpa: "8.01"
  }
];

export const certifications = [
  {
    title: "MERN Stack Web Development",
    issuer: "Webdox Institute",
    duration: "Feb 2025 - Jun 2025",
    description: "Hands-on training in full-stack MERN development, covering APIs, authentication, and database integration."
  }
];

export const highlights = [
  "Maintained a strong academic record with a CGPA of 8.01 in B.Tech Computer Science.",
  "Successfully completed a 6-month Software Development Internship at C-DAC Mohali.",
  "Designed and developed 6 core Angular modules for a threat-intelligence web platform.",
  "Architected a full stack AI-powered resume builder integrating Gemini AI API."
];
