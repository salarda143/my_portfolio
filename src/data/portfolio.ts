export const profile = {
  name: "Paul Jr. E. Salarda",
  location: "Bohol, Philippines",
  tagline: "CS Graduate | Fullstack Developer",
  email: "salardapaul9@gmail.com",
  phone: "+63 (956) 733-1258",
  cvUrl: "/cv/salarda_RESUME.pdf",
  projectsUrl: "#projects",
  image: "/profile/profile.JPG",
  verified: true,
};

export const about = {
  title: "About",
  paragraphs: [
    "I am a Fullstack Developer passionate about merging technical precision with creative design. I enjoy turning complexity into intuitive solutions using modern frontend frameworks and robust cloud-native backends.",
    "I hold a degree in Bachelor of Science in Computer Science from Bohol Island State University, where I began my journey with a deep curiosity for computing. This academic foundation drives my continuous learning and excellence in modern technology.",
    "When I am not writing code, I explore new tools and technologies, or dive into my passion for coding and building innovative solutions.",
  ],
};

export type TimelineEntry = {
  title: string;
  subtitle: string;
  year: string;
};

export const experience: TimelineEntry[] = [
  {
    title: "Data Analyst",
    subtitle: "Bohol Island State University (BISU)",
    year: "2025 - 2026",
  },
  {
    title: "Software Developer Intern",
    subtitle: "National Irrigation Administration (NIA)",
    year: "2025",
  },
  {
    title: "Project Lead Developer",
    subtitle: "Bohol Island State University (BISU)",
    year: "2024 - 2025",
  },
  {
    title: "First System Application Build",
    subtitle: "Sierra Bullones Technical Vocational High School",
    year: "2019 - 2020",
  },
  {
    title: "Hello World!",
    subtitle: "Wrote my first line of code",
    year: "2017 - 2018",
  },
];

export const education: TimelineEntry[] = [
  {
    title: "Bachelor of Science in Computer Science",
    subtitle: "Bohol Island State University - Bilar Campus",
    year: "2022 - 2026",
  },
  {
    title: "ICT - Information and Communications Technology",
    subtitle: "Sierra Bullones Technical Vocational High School",
    year: "2018 - 2020",
  },
];

export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Redux",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend",
    skills: ["Node.js", "JWT", "MySQL", "Python", "Supabase", "REST APIs"],
  },
  {
    label: "Tools & Technologies",
    skills: [
      "Git",
      "Github",
      "Postman",
      "Cursor",
      "Machine Learning",
      "ChatGPT",
    ],
  },
];

export const fullSkills: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Flutter",
      "Vite",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "JWT",
      "SQL",
      "Python",
      "Express.js",
      "REST APIs",
      "Firebase",
      "Supabase",
      "OAuth",
      "C++",
      "NoSQL",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    label: "Tools & Technologies",
    skills: [
      "Git",
      "Github",
      "Postman",
      "Cursor",
      "Machine Learning",
      "ChatGPT",
      "Claude",
      "Discord",
      "AI Integration",
      "Figma",
      "Copilot",
      "Teams",
      "Canva",
      "VS Code",
      "WebSocket",
    ],
  },
  {
    label: "Hard Skills",
    skills: [
      "Installation",
      "Troubleshooting",
      "Networking",
      "Microsoft Office",
      "Windows OS",
      "Android/iOS OS",
      "Artificial Intelligence(AI)",
      "Database Management System",
    ],
  },
  {
    label: "Soft Skills",
    skills: [
      "Problem-solving",
      "Teamwork",
      "Adaptability",
      "Critical Thinking",
      "Multitasking",
      "Customer Service",
      "Task Management",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  images: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    title: "INA-ANI",
    description: "E-commerce Web application for agricultural products",
    images: [
      "/project/ina/1.png",
      "/project/ina/2.png",
      "/project/ina/3.png",
      "/project/ina/4.png",
      "/project/ina/5.png",
      "/project/ina/6.png",
      "/project/ina/7.png",
    ],
    url: "https://inaani.bisubilar.org/",
  },
  {
    title: "BARMM",
    description: "Survey Mobile application",
    images: ["/project/barmm/1.jpg"],
  },
  {
    title: "IsdApp",
    description: "Fish Identification Mobile application",
    images: [
      "/project/IsdApp/1.png",
      "/project/IsdApp/2.png",
      "/project/IsdApp/3.png",
      "/project/IsdApp/4.png",
      "/project/IsdApp/5.png",
      "/project/IsdApp/6.png",
      "/project/IsdApp/7.png",
    ],
  },
  {
    title: "Voting System",
    description: "Secure online voting management system",
    images: [
      "/project/voting_system/1.jpg",
      "/project/voting_system/2.jpg",
      "/project/voting_system/3.jpg",
      "/project/voting_system/4.jpg",
      "/project/voting_system/5.jpg",
      "/project/voting_system/6.jpg",
      "/project/voting_system/7.jpg",
    ],
  },
  {
    title: "IsdApp Admin",
    description: "Administrative web application",
    images: [
      "/project/IsdApp_Admin/1.png",
      "/project/IsdApp_Admin/2.png",
      "/project/IsdApp_Admin/3.png",
      "/project/IsdApp_Admin/4.png",
      "/project/IsdApp_Admin/5.png",
    ],
  },
  {
    title: "SciMATH FUED",
    description: "Science and math learning project",
    images: ["/project/SciMath/SciMath1.jpg"],
  },
  {
    title: "iCare",
    description: "Care and support platform",
    images: [
      "/project/iCare/65e7e67c-4ab5-421c-adf5-9c6c3799e4d4.jfif",
      "/project/iCare/255d5890-5fbd-49c3-a82b-30736414f052.jfif",
      "/project/iCare/43f40762-983b-4c62-b4f3-c8904744b6a5.jfif",
      "/project/iCare/495a4fc7-0efb-4042-9d13-76684db412c2.jfif",
      "/project/iCare/70a16885-cfb4-4df4-84e9-87dde379d247.jfif",
      "/project/iCare/966cdf73-de11-417f-91b8-0c47b6793437.jfif",
      "/project/iCare/eb56095b-2027-4f6a-b342-5f97eea87e1b.jfif",
      "/project/iCare/f05627f6-dec5-4ede-9068-308577039884.jfif",
    ],
  },
];

export const alwaysLearning = {
  title: "Always Learning",
  description:
    "I believe in continuous growth and staying current with emerging technologies. Every project is an opportunity to learn something new and push the boundaries of what's possible.",
  tags: ["Agentic Coding", "Automation", "Networking"],
};

export type SocialPlatform =
  | "linkedin"
  | "github"
  | "facebook"
  | "whatsapp"
  | "instagram"
  | "twitter"
  | "telegram";

export type SocialLink = {
  platform: SocialPlatform;
  href: string;
  label: string;
};

export const socialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    href: "https://www.linkedin.com/in/paul-jr-salarda-b93a04172/",
    label: "LinkedIn",
  },
  {
    platform: "github",
    href: "https://github.com/salarda143",
    label: "GitHub",
  },
  {
    platform: "facebook",
    href: "https://www.facebook.com/paul.codes123",
    label: "Facebook",
  },
  {
    platform: "instagram",
    href: "https://www.instagram.com/paulcodes_/",
    label: "Instagram",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  { src: "/gallery/quote.jpg", alt: "Gallery photo 1" },
  { src: "/gallery/barong.JPG", alt: "Gallery photo 2" },
  { src: "/gallery/without_cap.JPG", alt: "Gallery photo 3" },
  { src: "/gallery/fam.jpg", alt: "Gallery photo 4" },
  { src: "/gallery/nia.jpg", alt: "Gallery photo 5" },
  { src: "/gallery/par.jpg", alt: "Gallery photo 6" },
  { src: "/gallery/error.jpg", alt: "Gallery photo 7" },
  { src: "/gallery/convo.jpg", alt: "Gallery photo 8" },
  { src: "/gallery/conv.jpg", alt: "Gallery photo 9" },
  { src: "/gallery/barka.jpg", alt: "Gallery photo 10" },
  { src: "/gallery/bark.jpg", alt: "Gallery photo 11" },
  { src: "/gallery/bar.jpg", alt: "Gallery photo 12" },
  { src: "/gallery/after.jpg", alt: "Gallery photo 13" },
  { src: "/gallery/3_idiot.jpg", alt: "Gallery photo 14" },
];
