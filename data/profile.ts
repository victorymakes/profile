import type { Profile } from "@/schemas/profile";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const profile: Profile = {
  version: "2.0.0",
  id: "alex-chen-2024",
  lastUpdated: "2024-11-13",

  person: {
    name: "Victory",
    headline: "Full-Stack Developer & Product Maker",
    avatar: `${BASE_URL}/avatar.png`,
    location: "China, Shenzhen",
    status: "🚀 Building launchsaas.org",
  },

  contact: [
    {
      network: "Email",
      username: "victorylaunch@gmail.com",
      type: "primary",
    },
    {
      icon: "GitHub",
      network: "GitHub",
      username: "victorymakes",
      url: "https://github.com/victorymakes",
      type: "social",
    },
    {
      icon: "twitter",
      network: "Twitter",
      username: "@victorymakes",
      url: "https://x.com/victorymakes",
      type: "social",
    },
    {
      icon: "Rednote",
      network: "Rednote",
      username: "Victory Makes",
      url: "https://www.xiaohongshu.com/user/profile/605834f00000000001002dfc",
      type: "social",
    },
  ],

  about: {
    bio: "Full-stack engineer with 10+ years of experience across Java, Python, and TypeScript, focused on system architecture and data-intensive workloads. I turn ideas into working products—spanning apps, websites, and mini-programs—while caring deeply about code quality, performance, and user experience. Always building, shipping, and iterating.",
    keywords: [
      "Full-Stack",
      "Architecture",
      "Mentorship",
      "Scrum",
      "Product Maker",
    ],
  },

  skills: [
    { text: "Java", icon: "Java" },
    { text: "Python", icon: "Python" },
    { text: "TypeScript", icon: "TypeScript" },
    { text: "Spark", icon: "Spark" },
    { text: "PostgreSQL", icon: "postgresql" },
    { text: "MySQL", icon: "MySQL" },
    { text: "Redis", icon: "Redis" },
    { text: "Docker", icon: "docker" },
    { text: "Spring", icon: "Spring" },
    { text: "Next.js", icon: "nextjs" },
  ],

  projects: [
    {
      name: "VictoryHub",
      description:
        "All-in-one powerful utilities website for developers, designers, and professionals. Features blog, multi-language support, dark mode, SEO optimized.",
      url: "https://victoryhub.cc",
      role: "Creator & Maintainer",
      status: "active",
      start: "2025-08",
      end: null,
      tech: ["NextJs", "i18n", "MDX", "Vercel"],
      image: "https://i.postimg.cc/6pcJXQR4/victoryhub.png?w=800",
    },
    {
      name: "LanuchSaas",
      description:
        "Production-ready SaaS starter makes you ship fast. Features marketing pages, authentication, billing, blog, docs, user dashboard and admin dashboard.",
      url: "https://lanuchsaas.org",
      role: "Creator & Maintainer",
      status: "active",
      start: "2025-10",
      end: null,
      tech: ["NextJs", "Stripe", "Drizzle", "Fumadocs", "Better Auth"],
      image: "https://i.postimg.cc/6qxDCp0M/launchsaas.png?w=800",
    },
  ],

  // work: [
  //   {
  //     id: "techcorp-senior",
  //     role: "Senior Full-Stack Engineer",
  //     org: "TechCorp Inc",
  //     start: "2021-06",
  //     end: null,
  //     summary:
  //       "Leading the development of a next-generation SaaS platform serving 100K+ users. Architected microservices infrastructure and mentored a team of 5 engineers.",
  //     highlights: [
  //       "Reduced page load time by 60% through performance optimization and code splitting",
  //       "Implemented end-to-end CI/CD pipeline reducing deployment time from 2 hours to 15 minutes",
  //       "Led migration from JavaScript to TypeScript across 50+ repositories",
  //       "Established testing culture achieving 85% code coverage",
  //       "Mentored 3 junior developers who were promoted to mid-level roles",
  //     ],
  //     tech: [
  //       "TypeScript",
  //       "React",
  //       "Next.js",
  //       "Node.js",
  //       "PostgreSQL",
  //       "Redis",
  //       "Docker",
  //       "Kubernetes",
  //       "AWS",
  //     ],
  //     url: "https://techcorp.example.com",
  //   },
  //   {
  //     id: "startup-lead",
  //     role: "Lead Frontend Developer",
  //     org: "StartupXYZ",
  //     start: "2019-03",
  //     end: "2021-05",
  //     summary:
  //       "Built the frontend architecture from scratch for a fintech startup. Grew team from 1 to 8 engineers while maintaining code quality and best practices.",
  //     highlights: [
  //       "Architected and built responsive web app used by 50K+ daily active users",
  //       "Implemented design system adopted across 3 product teams",
  //       "Reduced bundle size by 40% through tree-shaking and lazy loading",
  //       "Established code review process and engineering standards",
  //       "Led successful migration to React Hooks and Context API",
  //     ],
  //     tech: [
  //       "React",
  //       "Redux",
  //       "TypeScript",
  //       "Styled Components",
  //       "Jest",
  //       "Cypress",
  //     ],
  //     url: "https://startupxyz.example.com",
  //   },
  //   {
  //     id: "agency-developer",
  //     role: "Full-Stack Developer",
  //     org: "Digital Agency Co",
  //     start: "2017-01",
  //     end: "2019-02",
  //     summary:
  //       "Developed custom web solutions for 20+ clients across various industries. Specialized in rapid prototyping and MVP development.",
  //     highlights: [
  //       "Delivered 15+ client projects on time and within budget",
  //       "Built reusable component library reducing development time by 30%",
  //       "Implemented headless CMS solutions for content-heavy websites",
  //       "Collaborated directly with clients on requirements and technical specifications",
  //     ],
  //     tech: [
  //       "JavaScript",
  //       "React",
  //       "Vue.js",
  //       "Node.js",
  //       "Express",
  //       "MongoDB",
  //       "WordPress",
  //     ],
  //     url: "https://digitalagency.example.com",
  //   },
  // ],

  // education: [
  //   {
  //     school: "University of California, Berkeley",
  //     degree: "Master of Science in Computer Science",
  //     start: "2015-09",
  //     end: "2017-05",
  //     url: "https://berkeley.edu",
  //   },
  //   {
  //     school: "University of Washington",
  //     degree: "Bachelor of Science in Computer Science",
  //     start: "2011-09",
  //     end: "2015-06",
  //     url: "https://washington.edu",
  //   },
  //   {
  //     school: "freeCodeCamp",
  //     degree: "Full-Stack Web Development Certificate",
  //     start: "2016-01",
  //     end: "2016-06",
  //     url: "https://freecodecamp.org",
  //   },
  // ],

  // publications: [
  //   {
  //     title: "Modern React Patterns: Building Scalable Applications",
  //     type: "blog",
  //     date: "2024-09",
  //     venue: "Dev.to",
  //     url: "https://dev.to/alexchen/modern-react-patterns",
  //   },
  //   {
  //     title: "TypeScript Best Practices for Large-Scale Applications",
  //     type: "talk",
  //     date: "2024-06",
  //     venue: "ReactConf 2024",
  //     url: "https://reactconf.com/2024/talks/typescript-best-practices",
  //   },
  //   {
  //     title: "The Future of Web Performance",
  //     type: "blog",
  //     date: "2024-03",
  //     venue: "CSS-Tricks",
  //     url: "https://css-tricks.com/future-web-performance",
  //   },
  //   {
  //     title: "Building Accessible React Components",
  //     type: "paper",
  //     date: "2023-11",
  //     venue: "ACM Digital Library",
  //     url: "https://dl.acm.org/doi/10.1145/accessible-react",
  //   },
  //   {
  //     title: "Developer Experience: Why It Matters",
  //     type: "talk",
  //     date: "2023-08",
  //     venue: "JSConf US 2023",
  //     url: "https://jsconf.com/2023/talks/developer-experience",
  //   },
  //   {
  //     title: "Micro-Frontends: A Practical Guide",
  //     type: "blog",
  //     date: "2023-05",
  //     venue: "Medium",
  //     url: "https://medium.com/@alexchen/micro-frontends-guide",
  //   },
  // ],

  languages: [
    {
      code: "zh",
      label: "Mandarin Chinese",
      level: "Native",
    },
    {
      code: "en",
      label: "English",
      level: "Professional Working",
    },
  ],

  interests: [
    { text: "Open Source", icon: "Github" },
    { text: "Coding", icon: "Code" },
    { text: "Teaching & Mentorship", icon: "Teach" },
    { text: "Technical Writing", icon: "Write" },
    { text: "Hiking", icon: "Mountain" },
    { text: "Movie", icon: "Movie" },
  ],

  cta: [
    {
      label: "View My Projects",
      url: "#projects",
      style: "primary",
    },
    {
      label: "Get In Touch",
      url: "#contact",
      style: "secondary",
    },
  ],
};
