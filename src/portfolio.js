/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Set to false to skip splash screen and see content directly
};

// SEO Related settings
const seo = {
  title: "Ahmed Mansour Portfolio",
  description:
    "Results-driven Software Engineer and Computer & Artificial Intelligence graduate focused on scalable apps, modern UI systems, and clean, maintainable code.",
  og: {
    title: "Ahmed Mansour Portfolio",
    type: "website",
    url: "#",
  },
};

// Home Page
const greeting = {
  title: "Ahmed Mansour",
  logo_name: "AhmedMansour",
  nickname: "Software Engineer & FullStack Developer",
  subTitle:
    "Results-driven Software Engineer and Computer & Artificial Intelligence graduate, passionate about problem-solving, software design, and full-stack web development. Experienced in building scalable applications, integrating APIs, and implementing modern design principles with clean, efficient, and maintainable code.",
  resumeLink: "https://github.com/AHMED-SAYED-MANSOUR/AHMED-SAYED-MANSOUR/blob/main/CV.pdf",
  portfolio_repository: "https://github.com/AHMED-SAYED-MANSOUR",
  githubProfile: "https://github.com/AHMED-SAYED-MANSOUR",
};

const socialMediaLinks = [];

const skills = {
  data: [
    {
      title: "Full-Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Crafting responsive frontends with React.js, Next.js, Tailwind CSS, and reusable UI systems",
        "⚡ Building secure REST and GraphQL APIs with Node.js/Express.js and Laravel plus payment and banking integrations",
        "⚡ Launching commerce-ready experiences on Shopify, WordPress, and Salla with custom themes and automation",
      ],
      softwareSkills: [
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#38BDF8",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#8993BE",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
    {
      title: "AI & Data",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Applying AI and ML techniques for intelligent automation and analytics",
        "⚡ Designing SQL/MongoDB schemas, warehousing strategies, and legacy data upgrades",
        "⚡ Building dashboards and visual insights for decision-making",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Machine Learning",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "Excel Dashboards",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
      ],
    },
    {
      title: "Software Design & Tooling",
      fileName: "DesignImg",
      skills: [
        "⚡ Modeling systems with OOP, SOLID, design patterns, and UML",
        "⚡ Automating delivery with Git/GitHub, Docker, Linux, MVC & MVVM best practices",
        "⚡ Creating polished visuals, graphics, and course content with Adobe tools",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#31A8FF",
          },
        },
        {
          skillName: "Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF9A00",
          },
        },
        {
          skillName: "Video Editing",
          fontAwesomeClassname: "simple-icons:adobepremierepro",
          style: {
            color: "#9999FF",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Cairo University",
      subtitle: "B.Sc. in Computer Science & Artificial Intelligence",
      logo_path: "education.svg",
      alt_name: "Cairo University",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Graduated with a 3.10 GPA focusing on modern software engineering practices.",
        "⚡ Completed coursework in Data Structures & Algorithms, OOP, Software Engineering, Databases, AI & ML, and Systems Analysis & Design.",
        "⚡ Led academic projects that blended intelligent automation with robust backend development.",
      ],
      website_link: "https://cu.edu.eg/en",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Leadership",
  description:
    "I thrive in fast-paced environments where I can design full-stack systems, uplift UI experiences, mentor teams, and translate business goals into reliable software.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full-Stack Developer",
          company: "Code Clause",
          company_url: "#",
          logo_path: "codeInLogo.png",
          duration: "July 2023",
          location: "Remote",
          description:
            "Built and deployed full-stack React.js and Laravel applications, optimized APIs, and boosted UI responsiveness—improving user engagement by 30%.",
          color: "#E94A47",
        },
        {
          title: "Software Engineer Intern",
          company: "Roya Company",
          company_url: "#",
          logo_path: "muffito_logo.png",
          duration: "September 2022",
          location: "Cairo, Egypt",
          description:
            "Supported backend performance enhancements, regression testing, and debugging of legacy modules to stabilize enterprise releases.",
          color: "#1C6DD0",
        },
      ],
    },
    {
      title: "Leadership & Teaching",
      experiences: [
        {
          title: "Web Instructor",
          company: "SCCI-CU Student Activity",
          company_url: "#",
          logo_path: "dsc_logo.png",
          duration: "January 2023",
          location: "Cairo, Egypt",
          description:
            "Taught foundational HTML, CSS, and JavaScript to 50+ students with real-world projects and structured course materials that raised completion rates.",
          color: "#0C9D58",
        },
        {
          title: "Mobile App Instructor",
          company: "MSP-CU Student Activity",
          company_url: "#",
          logo_path: "mozilla_logo.png",
          duration: "February 2022",
          location: "Cairo, Egypt",
          description:
            "Delivered Android Studio workshops and mentored beginners through planning, building, and shipping their first mobile apps.",
          color: "#F38B00",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A curated collection of payment gateways, library systems, commerce platforms, and clinic suites that emphasize scalability, clean architecture, and delightful UX.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Currently exploring opportunities to publish technical content.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am always excited to discuss challenging engineering problems, product ideas, or instructional collaborations. Drop a message and I will get back to you quickly.",
  },
  blogSection: {
    title: "Writing & Resources",
    subtitle:
      "I am documenting lessons from full-stack delivery, AI experimentation, and teaching journeys.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Cairo, Egypt",
    locality: "Cairo",
    country: "Egypt",
    region: "Cairo",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Cairo,Egypt",
  },
  phoneSection: {
    title: "Availability",
    subtitle: "Open to full-time, freelance, and remote collaborations.",
  },
};

// Additional sections for components
const openSource = {
  githubConvertedToken: "",
  githubUserName: "",
};

const bigProjects = {
  title: "Featured Projects",
  subtitle: "Major projects and applications",
  projects: [],
};

const blogSection = {
  title: "Blogs",
  subtitle: "Technical articles and insights",
  blogs: [],
};

const achievementSection = {
  title: "Achievements",
  subtitle: "Notable accomplishments",
  achivementsCards: [],
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Get in touch",
  number: "",
  email_address: "",
};

const talkSection = {
  title: "Talks",
  subtitle: "Speaking engagements",
  talks: [],
};

const podcastSection = {
  title: "Podcasts",
  subtitle: "Podcast appearances",
  podcasts: [],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  openSource,
  bigProjects,
  blogSection,
  achievementSection,
  contactInfo,
  talkSection,
  podcastSection,
};
