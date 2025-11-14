import type { Profile } from "@/schemas/profile";

export const profile: Profile = {
  version: "2.0.0",
  id: "alex-chen-2024",
  lastUpdated: "2024-11-13",

  person: {
    name: "Victory",
    headline: "Full-Stack Developer & Indie Maker",
    avatar:
      "https://pbs.twimg.com/profile_images/1948344704019595264/eyWo9pq3_400x400.jpg",
    location: "China, Shenzhen",
    availability: {
      hiring: false,
      freelance: true,
      speaking: false,
    },
  },

  contact: [
    {
      network: "Email",
      username: "alex.chen@example.com",
      url: "mailto:alex.chen@example.com",
      type: "primary",
    },
    {
      network: "Phone",
      username: "+1 (555) 123-4567",
      url: "tel:+15551234567",
      type: "primary",
    },
    {
      network: "Website",
      username: "alexchen.dev",
      url: "https://alexchen.dev",
      type: "social",
    },
    {
      icon: "github",
      network: "GitHub",
      username: "alexchen",
      url: "https://github.com/alexchen",
      type: "social",
    },
    {
      icon: "twitter",
      network: "Twitter",
      username: "@alexchen_dev",
      url: "https://twitter.com/alexchen_dev",
      type: "social",
    },
    {
      icon: "linkedin",
      network: "LinkedIn",
      username: "alexchen",
      url: "https://linkedin.com/in/alexchen",
      type: "social",
    },
    {
      icon: "mastodon",
      network: "Mastodon",
      username: "@alex@mastodon.social",
      url: "https://mastodon.social/@alex",
      type: "social",
    },
  ],

  about: {
    bio: "Passionate full-stack developer with 8+ years of experience building scalable web applications. I specialize in React, TypeScript, and Node.js, with a strong focus on developer experience and open-source contributions. When I'm not coding, you'll find me mentoring aspiring developers or speaking at tech conferences.",
    keywords: [
      "Full-Stack Development",
      "TypeScript",
      "React",
      "Node.js",
      "Open Source",
      "Developer Experience",
      "Web Performance",
      "Accessibility",
      "Cloud Architecture",
      "Mentorship",
    ],
  },

  skills: [
    { text: "TypeScript", icon: "typescript" },
    { text: "React", icon: "react" },
    { text: "Next.js", icon: "nextjs" },
    { text: "Node.js", icon: "nodejs" },
    { text: "PostgreSQL", icon: "postgresql" },
    { text: "GraphQL", icon: "graphql" },
    { text: "Docker", icon: "docker" },
    { text: "AWS", icon: "aws" },
    { text: "Tailwind CSS", icon: "tailwindcss" },
    { text: "Git", icon: "git" },
    { text: "REST APIs", icon: "api" },
    { text: "Jest", icon: "jest" },
    { text: "CI/CD", icon: "workflow" },
    { text: "Figma", icon: "figma" },
    { text: "Agile/Scrum", icon: "scrum" },
  ],

  work: [
    {
      id: "techcorp-senior",
      role: "Senior Full-Stack Engineer",
      org: "TechCorp Inc",
      start: "2021-06",
      end: null,
      summary:
        "Leading the development of a next-generation SaaS platform serving 100K+ users. Architected microservices infrastructure and mentored a team of 5 engineers.",
      highlights: [
        "Reduced page load time by 60% through performance optimization and code splitting",
        "Implemented end-to-end CI/CD pipeline reducing deployment time from 2 hours to 15 minutes",
        "Led migration from JavaScript to TypeScript across 50+ repositories",
        "Established testing culture achieving 85% code coverage",
        "Mentored 3 junior developers who were promoted to mid-level roles",
      ],
      tech: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Kubernetes",
        "AWS",
      ],
      url: "https://techcorp.example.com",
    },
    {
      id: "startup-lead",
      role: "Lead Frontend Developer",
      org: "StartupXYZ",
      start: "2019-03",
      end: "2021-05",
      summary:
        "Built the frontend architecture from scratch for a fintech startup. Grew team from 1 to 8 engineers while maintaining code quality and best practices.",
      highlights: [
        "Architected and built responsive web app used by 50K+ daily active users",
        "Implemented design system adopted across 3 product teams",
        "Reduced bundle size by 40% through tree-shaking and lazy loading",
        "Established code review process and engineering standards",
        "Led successful migration to React Hooks and Context API",
      ],
      tech: [
        "React",
        "Redux",
        "TypeScript",
        "Styled Components",
        "Jest",
        "Cypress",
      ],
      url: "https://startupxyz.example.com",
    },
    {
      id: "agency-developer",
      role: "Full-Stack Developer",
      org: "Digital Agency Co",
      start: "2017-01",
      end: "2019-02",
      summary:
        "Developed custom web solutions for 20+ clients across various industries. Specialized in rapid prototyping and MVP development.",
      highlights: [
        "Delivered 15+ client projects on time and within budget",
        "Built reusable component library reducing development time by 30%",
        "Implemented headless CMS solutions for content-heavy websites",
        "Collaborated directly with clients on requirements and technical specifications",
      ],
      tech: [
        "JavaScript",
        "React",
        "Vue.js",
        "Node.js",
        "Express",
        "MongoDB",
        "WordPress",
      ],
      url: "https://digitalagency.example.com",
    },
  ],

  projects: [
    {
      name: "DevTools Pro",
      description:
        "Open-source developer productivity toolkit with 10K+ GitHub stars. Provides CLI tools and VS Code extensions for modern web development workflows.",
      url: "https://devtools.pro",
      role: "Creator & Maintainer",
      status: "active",
      start: "2022-01",
      end: null,
      tech: ["TypeScript", "Node.js", "VS Code API", "CLI", "GitHub Actions"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    },
    {
      name: "React Query Builder",
      description:
        "Intuitive visual query builder component for React applications. Used by 500+ projects with 5K+ weekly npm downloads.",
      url: "https://github.com/alexchen/react-query-builder",
      role: "Lead Developer",
      status: "active",
      start: "2021-08",
      end: null,
      tech: ["React", "TypeScript", "Storybook", "Rollup"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
    {
      name: "Task Flow",
      description:
        "Minimalist task management app built with Next.js and Supabase. Features real-time collaboration and offline support.",
      url: "https://taskflow.app",
      role: "Solo Developer",
      status: "active",
      start: "2023-03",
      end: null,
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "PWA"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    },
    {
      name: "Portfolio Template",
      description:
        "Modern, accessible portfolio template for developers. Fully customizable with dark mode and SEO optimization.",
      url: "https://github.com/alexchen/portfolio-template",
      role: "Creator",
      status: "archived",
      start: "2020-05",
      end: "2021-12",
      tech: ["React", "Gatsby", "MDX", "Styled Components"],
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    },
  ],

  education: [
    {
      school: "University of California, Berkeley",
      degree: "Master of Science in Computer Science",
      start: "2015-09",
      end: "2017-05",
      url: "https://berkeley.edu",
    },
    {
      school: "University of Washington",
      degree: "Bachelor of Science in Computer Science",
      start: "2011-09",
      end: "2015-06",
      url: "https://washington.edu",
    },
    {
      school: "freeCodeCamp",
      degree: "Full-Stack Web Development Certificate",
      start: "2016-01",
      end: "2016-06",
      url: "https://freecodecamp.org",
    },
  ],

  publications: [
    {
      title: "Modern React Patterns: Building Scalable Applications",
      type: "blog",
      date: "2024-09",
      venue: "Dev.to",
      url: "https://dev.to/alexchen/modern-react-patterns",
    },
    {
      title: "TypeScript Best Practices for Large-Scale Applications",
      type: "talk",
      date: "2024-06",
      venue: "ReactConf 2024",
      url: "https://reactconf.com/2024/talks/typescript-best-practices",
    },
    {
      title: "The Future of Web Performance",
      type: "blog",
      date: "2024-03",
      venue: "CSS-Tricks",
      url: "https://css-tricks.com/future-web-performance",
    },
    {
      title: "Building Accessible React Components",
      type: "paper",
      date: "2023-11",
      venue: "ACM Digital Library",
      url: "https://dl.acm.org/doi/10.1145/accessible-react",
    },
    {
      title: "Developer Experience: Why It Matters",
      type: "talk",
      date: "2023-08",
      venue: "JSConf US 2023",
      url: "https://jsconf.com/2023/talks/developer-experience",
    },
    {
      title: "Micro-Frontends: A Practical Guide",
      type: "blog",
      date: "2023-05",
      venue: "Medium",
      url: "https://medium.com/@alexchen/micro-frontends-guide",
    },
  ],

  languages: [
    {
      code: "en",
      label: "English",
      level: "Native",
    },
    {
      code: "zh",
      label: "Mandarin Chinese",
      level: "Native",
    },
    {
      code: "es",
      label: "Spanish",
      level: "Intermediate (B1)",
    },
    {
      code: "ja",
      label: "Japanese",
      level: "Beginner (A2)",
    },
  ],

  interests: [
    { text: "Open Source", icon: "github" },
    { text: "Web Performance", icon: "speed" },
    { text: "Developer Tools", icon: "tools" },
    { text: "Teaching & Mentorship", icon: "teach" },
    { text: "Public Speaking", icon: "mic" },
    { text: "Technical Writing", icon: "write" },
    { text: "UI/UX Design", icon: "design" },
    { text: "Hiking", icon: "mountain" },
    { text: "Photography", icon: "camera" },
    { text: "Coffee Brewing", icon: "coffee" },
    { text: "Mechanical Keyboards", icon: "keyboard" },
    { text: "Sci-Fi Books", icon: "book" },
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
