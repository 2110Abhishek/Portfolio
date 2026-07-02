export const portfolioData = {
  name: "Abhishek .G. Choudhari",
  role: "Full Stack Developer",
  location: "Nagpur, Maharashtra, India",
  email: "agchoudhari2110@gmail.com",
  phone: "+91 9370165188",
  github: "https://github.com/2110Abhishek",
  linkedin: "https://linkedin.com/in/abhishek-choudhari-330211246",
  about: "Full Stack Developer with hands-on experience building and deploying production-ready web applications using React, Next.js, Node.js, Spring Boot, Django, MongoDB, and MySQL. Skilled in REST API integration, authentication, and responsive UI development. Proven ability to translate Figma designs into scalable frontend architectures and solve real-world issues such as CORS handling, token-based security, and performance optimization. Strong problem-solving mindset with experience working on fintech platforms and automation systems.",
  education: [
    {
      degree: "B.Tech in Artificial Intelligence",
      institution: "Priyadarshini J. L. College Of Engineering",
      period: "2020 - 2024 | CGPA: 7.96",
      description: "Bachelor of Technology degree specialising in Artificial Intelligence, building strong foundation in computer science and AI technologies."
    },
    {
      degree: "Java Full Stack Development Program",
      institution: "AcademiXedu",
      period: "July 2024 - January 2025",
      description: "Intensive hands-on training in Java Full Stack Development with project-based learning approach."
    }
  ],
  skills: {
    programming: ["Java", "JavaScript", "Python"],
    frontend: ["React.js", "Angular.js", "Redux", "Material-UI", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "Spring Boot", "Flask", "Django", "RESTful APIs", "Xano"],
    databases: ["MongoDB", "MySQL", "PostgreSQL"],
    tools: ["Git", "GitHub", "Postman", "Axios", "Maven", "Vercel", "Render"]
  },
  experience: [
    {
      title: "Full Stack Developer",
      company: "Levitation Infotech",
      period: "Aug 2025 – April 2026",
      project: "Moneeflo (Currency Transfer Platform)",
      description: [
        "Developed and maintained a production-grade fintech frontend for a multi-currency transfer platform (INR ↔ USD) using Next.js, React, and Tailwind CSS.",
        "Converted Figma UI/UX designs into pixel-perfect, responsive, and accessible web interfaces.",
        "Implemented authentication flows, customer onboarding, contact management, and transaction workflows.",
        "Integrated RESTful APIs with secure JWT/token-based authentication and robust error handling.",
        "Resolved CORS and API routing issues using Next.js route handlers and proxy configurations.",
        "Built reusable UI components optimized for performance and scalability.",
        "Collaborated with backend teams to ensure secure frontend–backend communication."
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Digitron Software & Solution",
      period: "Nov 2024 – May 2025",
      project: "Commission-free stock App",
      description: [
        "Built a commission-free stock trading and investment application using React, Spring Boot, REST APIs, and MySQL.",
        "Integrated real-time stock and crypto market data via Finnhub API.",
        "Implemented portfolio tracking, transaction history, and charting features.",
        "Developed scalable, production-ready modules and collaborated with cross-functional teams."
      ]
    }
  ],
  projects: [
    {
      title: "Bliss Bloomly",
      subtitle: "AI-Powered Multi-Vendor E-commerce Marketplace",
      link: "https://bliss-bloomly-5xgd.vercel.app/",
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Firebase Auth", "Razorpay API", "Framer Motion", "PWA"],
      description: [
        "Architected a production-ready Multi-Vendor E-commerce marketplace featuring three distinct user portals (Customer, Seller, Admin) with granular role-based access control.",
        "Engineered an Automated Order Lifecycle Scheduler in Node.js that simulates a real-world supply chain, automatically progressing orders.",
        "Developed an Intelligent Recommendation Engine using rule-based logic and MongoDB aggregations to suggests complementary products.",
        "Managed Complex Inventory Systems with SKU-level tracking for multi-variant products, ensuring 100% data consistency.",
        "Integrated Secure Payment Infrastructure using Razorpay, handling secure checkout flows and real-time transaction reconciliation.",
        "Built an AI-Driven Chatbot Assistant to enhance customer engagement, resolving 80%+ of common queries.",
        "Optimized User Engagement by implementing Web-Push notifications for marketing broadcasts and categorical promotion management.",
        "Enhanced Performance & Accessibility by architecting the application as a Progressive Web App (PWA)."
      ]
    },
    {
      title: "Student Job Tracker",
      subtitle: "Fullstack MERN Application",
      link: "https://job-tracker-frontend-flax.vercel.app/",
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Vercel", "Render"],
      description: [
        "Built a fullstack 'Student Job Tracker' app using the MERN stack.",
        "Implemented full CRUD functionality, allowing users to add, view, update, and delete job applications with advanced filtering.",
        "Hosted the frontend on Vercel, the backend API on Render, and utilized MongoDB Atlas for the database.",
        "Focused on clean UI, modular code architecture, and smooth deployment."
      ]
    },
    {
      title: "Email Automation Tool",
      subtitle: "HR Outreach & Cold Email Platform",
      link: "https://ai-mail-autofron-8m8cbinor-2110abhisheks-projects.vercel.app/",
      techStack: ["React.js", "Flask", "Gmail SMTP", "Vercel", "Render"],
      description: [
        "Built a one-click email automation tool to streamline HR outreach, eliminating repetitive manual job application emails.",
        "Developed functionality to upload HR contacts (PDF), attach resumes, and send personalized emails with dynamic placeholders (e.g., {{ position }}).",
        "Integrated secure Gmail SMTP with pause/resume functionality for reliable and controlled email delivery.",
        "Deployed frontend on Vercel and backend on Render for seamless access and performance."
      ]
    },
    {
      title: "Brand Reputation Tracker",
      subtitle: "AI-Powered Marketing Analytics",
      link: "https://lnkd.in/g5AwA_e5",
      techStack: ["React.js", "Node.js", "MongoDB", "Socket.io", "Chart.js", "Natural.js"],
      description: [
        "Built a comprehensive Brand Mention & Reputation Tracker to monitor conversations across social media, news, blogs, and forums in real-time.",
        "Implemented automated sentiment analysis (Positive/Negative/Neutral) and topic clustering for deep marketing insights.",
        "Engineered real-time spike detection with instant alerts and multi-brand management capabilities.",
        "Developed a responsive dashboard with live updates via WebSockets and interactive data visualizations using Chart.js."
      ]
    }
  ]
};
