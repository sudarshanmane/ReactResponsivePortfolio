export const personalInfo = {
  name: "Sudarshan Mane",
  role: "MERN Stack Developer",
  location: "Pune, India",
  email: "sudarshanmane2110@gmail.com",
  phone: "+91 93701 05149",
  summary:
    "MERN Stack Developer with nearly four years of experience building secure, scalable, and high-performance products across AI recruitment, marketing technology, and public-sector platforms.",
  profileImage: require("../../images_1/sudarshan.jpeg"),
  resume: require("../../Images/Sudarshan_Mane_Resume.pdf"),
  links: {
    github: "https://github.com/sudarshanmane",
    linkedin: "https://www.linkedin.com/in/sudarshan-mane-065823236",
  },
};

export const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  { value: "4", suffix: " yrs", label: "Professional experience" },
  { value: "5", suffix: "+", label: "Production platforms" },
  { value: "40", suffix: "%", label: "Performance improvement" },
];

export const skillGroups = [
  {
    title: "Frontend",
    eyebrow: "Interfaces",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "TanStack Query",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "ShadCN",
    ],
  },
  {
    title: "Backend",
    eyebrow: "Systems",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "JWT",
      "RabbitMQ",
    ],
  },
  {
    title: "Data & Cloud",
    eyebrow: "Infrastructure",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Prisma ORM",
      "AWS S3",
      "CI/CD",
      "Vercel",
      "Netlify",
    ],
  },
  {
    title: "AI & Quality",
    eyebrow: "Intelligence",
    skills: [
      "OpenAI API",
      "LLM Integration",
      "Prompt Engineering",
      "Jest",
      "React Testing Library",
      "GitHub Copilot",
      "Postman",
      "Agile / Scrum",
    ],
  },
];

export const experiences = [
  {
    company: "Successive Technologies",
    role: "MERN Stack Developer",
    period: "Aug 2025 — Present",
    location: "Pune",
    summary:
      "Building AI-powered recruitment products and enterprise audience platforms with end-to-end full-stack ownership.",
    achievements: [
      "Built job management, candidate tracking, interview scheduling, AI screening, and recruitment analytics workflows.",
      "Integrated OpenAI and LLM workflows for resume parsing, JD extraction, candidate ranking, and structured data generation.",
      "Developed GraphQL services and multi-publisher audience activation across Amazon, Facebook, and Instagram.",
      "Improved reliability and throughput with Redis caching, RabbitMQ processing, query optimization, and production debugging.",
    ],
    stack: ["React", "Node.js", "MongoDB", "GraphQL", "Redis", "OpenAI"],
  },
  {
    company: "Shaleemar IT Solutions",
    role: "MERN Stack Developer",
    period: "Aug 2024 — Jul 2025",
    location: "Pune",
    summary:
      "Led development of a high-availability Digital Lost & Found platform for large-scale public events.",
    achievements: [
      "Architected real-time workflows using Node.js, PostgreSQL, Redis, and WebSockets for high-speed record retrieval.",
      "Implemented AI-assisted identification and search indexing, reducing retrieval time by 40%.",
      "Automated reporting workflows, reducing manual effort by 70% across operational teams.",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "WebSockets"],
  },
  {
    company: "Metamind System",
    role: "MERN Stack Developer",
    period: "Feb 2023 — Aug 2024",
    location: "Pune",
    summary:
      "Delivered workflow-heavy file management products and a responsive corporate website redesign.",
    achievements: [
      "Built role-based dashboards, workflow automation, GraphQL APIs, and multi-stage validation pipelines.",
      "Implemented JWT authentication and RBAC authorization for secure enterprise operations.",
      "Improved website performance by 40% and engagement by 90% through rendering, SEO, and asset optimization.",
    ],
    stack: ["React", "Next.js", "Node.js", "GraphQL", "MongoDB"],
  },
];

const talentAcquisitionImages = [
  {
    src: require("../../successiveImages/dashboard.png"),
    alt: "AI talent acquisition analytics dashboard",
  },
  {
    src: require("../../successiveImages/job.png"),
    alt: "AI-assisted job creation workflow",
  },
  {
    src: require("../../successiveImages/addCandidate.png"),
    alt: "Resume-based candidate onboarding workflow",
  },
  {
    src: require("../../successiveImages/jdMatch.png"),
    alt: "AI-powered candidate and job matching",
  },
  {
    src: require("../../successiveImages/interviews.png"),
    alt: "Interview scheduling calendar",
  },
];

export const projects = [
  {
    title: "AI Talent Acquisition Platform",
    organization: "Successive Technologies",
    description:
      "An end-to-end recruitment platform that combines job and candidate management with AI parsing, intelligent matching, automated voice screening, interview scheduling, and analytics.",
    images: talentAcquisitionImages,
    tags: ["React", "Node.js", "OpenAI", "MongoDB", "Redis", "RabbitMQ"],
    featured: true,
  },
  {
    title: "Dentsu Audience Builder",
    organization: "Successive Technologies · Dentsu",
    description:
      "An enterprise audience activation platform with scalable GraphQL services, identity integrations, and simultaneous publishing across major advertising channels.",
    images: [
      {
        src: require("../../Images/dentsu.png"),
        alt: "Dentsu Audience Builder interface",
      },
    ],
    tags: ["React", "NestJS", "GraphQL", "MongoDB", "Redis"],
  },
  {
    title: "Digital Lost & Found System",
    organization: "Shaleemar IT Solutions",
    description:
      "A real-time, high-availability platform created for Maha Kumbh Mela 2025, supporting AI-assisted identification and coordinated public-event operations.",
    images: [
      {
        src: require("../../Images/lostandfound.png"),
        alt: "Digital Lost and Found platform",
      },
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "WebSockets"],
  },
  {
    title: "File Management System",
    organization: "Metamind System",
    description:
      "A role-based workflow platform for uploading, assigning, digitizing, validating, and exporting map and document data across distributed teams.",
    images: [
      {
        src: require("../../Images/fmsImage1.png"),
        alt: "File Management System dashboard",
      },
    ],
    tags: ["React", "Node.js", "MongoDB", "Redux", "Ant Design"],
  },
  {
    title: "Company Website Redesign",
    organization: "Metamind System",
    description:
      "A responsive corporate website rebuilt to improve speed, SEO, cross-device usability, and customer engagement through a modern component architecture.",
    images: [
      {
        src: require("../../images_1/Screenshot 2024-06-17 154948.png"),
        alt: "Metamind System website redesign",
      },
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "SEO"],
    link: "https://www.metamindsystem.com/",
  },
];
