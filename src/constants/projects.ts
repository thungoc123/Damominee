import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    name: "SkinTime",
    slug: "skintime",
    description:
      "Solves the challenge of booking and managing multi-day skincare treatments through a centralized, flexible scheduling platform.",
    icon: "FaPalette",
    image: [],
    responsibilities:
      "Product Owner & Full-stack Developer. Led end-to-end product delivery including business analysis, UI/UX design, frontend and backend development; planned and tracked project milestones; coordinated the team to ensure on-time delivery of core features.",
    techStack: [
      "React Native",
      "React TypeScript",
      "ASP.NET Web API",
      "MySQL",
      "Hangfire (.NET)",
      "Microsoft Azure Blob Storage",
      "Google Services",
    ],
    deployLink: "https://github.com/SWD391-SkinTimeSystem",
    youtubeLink: "",
    documentLink: "https://docs.google.com/document/d/1Qz_i6rQ2I4yWLrxR3jaw_etejtN7KPxW/edit?usp=drive_link&ouid=110064833507188220910&rtpof=true&sd=true",
    appLink: "",
    AccountTest: [
      {
        role: "admin",
        username: "testuser",
        password: "testpass"
      },
      {
        role: "user",
        username: "user1",
        password: "pass1"
      }
    ]
  },
  {
    name: "GroupTrip",
    slug: "grouptrip",
    description:
      "Solves the complexity of organizing group travel with a platform that supports shared planning, booking, and trip management.",
    icon: "FaUsers",
    image: [],
    responsibilities:
      "Technical Lead & Frontend Lead. Led the cross-functional team; defined product UX for key modules; led frontend architecture and implementation; owned project planning, timeline management, and delivery execution.",
  techStack: [
  // Front-end
  "React TypeScript",
  "Flutter",

  // Back-end
  "ASP.NET Core",
  "PostgreSQL",
  "Apache Kafka",
  "Redis",

  // Networking
  "NGINX",

  // CI/CD & Deployment
  "GitHub Actions",
  "Docker",
  "VPS",

  // Third-party Services
  "Cloudinary",
  "Google Maps API",
  "Firebase",
  "Gemini AI",
  "RayOS",
  "AKaAT"
]
,
    deployLink: "https://grouptrip.site/",
    youtubeLink: "",
    documentLink: "https://docs.google.com/document/d/1mbmp8c83aBNxXRnUAh6a6zMIY6xBYxad/edit?usp=sharing&ouid=110064833507188220910&rtpof=true&sd=true",
    appLink: "https://drive.google.com/file/d/1DpxLKdmI4gco020Y-b7_5L8whDg4lXDx/view?usp=drive_link",
      AccountTest: [
      {
        role: "admin",
        username: "admingt@gmail.com",
        password: "Test@123"
      },
      {
        role: "Traveller",
        username: "nthu18313@gmail.com",
        password: "Test@123"
      },
      {
        role: "Representative",
        username: "xhuyzdev@gmail.com",
        password: "Test@123"
      },
       {
        role: "Staff",
        username: "phonglan920",
        password: "Staff@65622"
      }
    ]
  },
  {
    name: "Selfra",
    slug: "selfra",
    description:
      "Solves the need for holistic self-development through a platform selling coaching courses based on the Body – Mind – Spirit model.",
    icon: "FaUser",
    image: [
      "/screen1.png",
      "/screen2.png",
      "/screen3.png",
      "/screen4.png",
      "/screen5.png",
      "/screen6.png",
      "/screen7.png",
      "/screen8.png",
      "/screen9.png",
      "/screen10.png",
      "/screen11.png",
      "/screen12.png",
      "/screen13.png",
      "/screen14.png",
      "/screen15.png"
    ],
    responsibilities:
      "Product Lead & Mobile Developer. Drove product ideation and roadmap; led development of mobile applications using Flutter; aligned product vision with technical implementation.",
    techStack: [
      "Flutter",
      "ASP.NET Core",
    ],
    deployLink: "https://github.com/thungoc123/Selfra_App",
    youtubeLink: "",
    documentLink: "",
    appLink: "https://drive.google.com/file/d/1s2ue0JRuyaU8NeAFZnduDlLATA4PKnVk/view?usp=sharing",
  },
  {
    name: "HsStudio",
    slug: "hsstudio",
    description:
      "Solves the problem of showcasing and promoting an architecture firm’s capabilities through a WordPress CRM–based website.",
    icon: "FaBuilding",
    image: [],
    responsibilities:
      "Web Consultant & WordPress Developer. Gathered and translated client requirements into website structure and design; built and customized a WordPress website to meet business and branding goals.",
    techStack: [
      "WordPress",
      "PHP",
      "CRM Plugins",
    ],
    deployLink: "https://hstudio.vn/",
    youtubeLink: "",
    documentLink: "",
    appLink: "",
  },
  
];
