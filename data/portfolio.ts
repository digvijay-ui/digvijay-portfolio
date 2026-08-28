import type { PortfolioData } from '~/types/portfolio'

export const portfolioData: PortfolioData = {
  name: 'Digvijaysinh Rajput',
  role: 'Full Stack Developer',
  location: 'Bengaluru, Karnataka, India',
  email: 'rajputdigvijaysinh45@gmail.com',
  about: {
    heading: 'Building reliable web experiences.',
    paragraphs: [
      'I’m Digvijaysinh Rajput, a Full Stack Developer in Bengaluru and a 2026 B.E. Information Technology graduate. At Brainzym Private Ltd, I build and maintain production web applications using Vue.js, TypeScript, Node.js, Express.js and PostgreSQL.',
      'I enjoy developing responsive Vue.js and React interfaces, REST APIs and reliable full-stack features. I am currently seeking Full Stack Developer or Frontend Developer roles in Bengaluru.',
    ],
  },
  navigation: [
    {
      id: 'home',
      label: 'Home',
      href: '#home',
    },
  ],
  quickFacts: [
    {
      id: 'experience',
      label: 'Experience',
      value: '2 Projects Shipped',
    },
    {
      id: 'location',
      label: 'Location',
      value: 'Bengaluru, India',
    },
    {
      id: 'education',
      label: 'Education',
      value: 'B.E. Information Technology',
    },
    {
      id: 'focus',
      label: 'Focus',
      value: 'Full Stack / Frontend',
    },
  ],
  experiences: [
    {
      id: 'brainzym-full-stack-developer-intern',
      role: 'Full Stack Developer Intern',
      company: 'Brainzym Private Ltd',
      logo: '/images/companies/brainzym-logo.png',
      logoAlt: 'Brainzym Private Ltd logo',
      initials: 'BZ',
      location: 'Bengaluru, Karnataka',
      startDate: '2026-01',
      endDate: 'Present',
      period: 'Jan 2026 – Present',
      linkedinUrl: 'https://linkedin.com/in/rajput-digvijaysinh-7515b4254',
      technologies: [
        'Vue.js',
        'TypeScript',
        'Tailwind CSS',
        'Axios',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'REST APIs',
        'Git',
        'Zod',
      ],
      achievements: [
        // TODO(digvijay): Add the number of production features or modules shipped at Brainzym.
        "Developed and maintained full-stack features for Brainzym's core web platform using Vue.js, TypeScript, Node.js, Express.js and PostgreSQL.",
        // TODO(digvijay): Add the number of reusable admin dashboard components if you have it.
        'Took ownership of the admin dashboard module, building reusable Vue.js components with form handling, Zod validation, API error handling and production-focused testing.',
        // TODO(digvijay): Add the CSV import scale, such as row count or student records processed.
        'Designed and implemented a passcode-based student login flow covering Express.js REST API endpoints, PostgreSQL schema changes and bulk CSV imports.',
        // TODO(digvijay): Add bug count, stability percentage or response-time improvement if tracked.
        'Troubleshot and improved existing frontend and backend modules, resolving bugs and improving application stability.',
        // TODO(digvijay): Add team size or sprint cadence if you want this quantified.
        'Collaborated with the tech lead and product owner in an Agile team, participating in sprint planning, sprint reviews, code reviews and technical discussions.',
      ],
    },
  ],
  projects: [
    {
      id: 'project-ticket-booking',
      number: '01',
      title: 'Ticket Booking Platform',
      subtitle: 'Concurrency-safe full-stack event booking system',
      role: 'Full Stack Development',
      description:
        'A Vue 3 and TypeScript booking platform with Node.js, Express and MongoDB, supporting event discovery, seat reservations, wallet payments and admin workflows.',
      impact:
        'Concurrency-safe seat reservation flow designed to reduce double-booking risk.',
      highlights: [
        // TODO(digvijay): Add tested concurrent booking count if you have it.
        'Built seat selection and temporary reservation flows designed to prevent double booking.',
        'Implemented 2 payment-side flows for wallet-based booking confirmation and transaction handling.',
        'Added 3 protection layers with JWT authentication, Zod request validation and role-based admin functionality.',
        'Built 6 admin workflows for events, seats, bookings, transactions, cancellations and refunds.',
      ],
      technologies: [
        'Vue 3',
        'TypeScript',
        'Pinia',
        'Vue Router',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'JWT',
        'Zod',
      ],
      image: '/images/projects/ticket-booking.png',
      imageAlt:
        'Screenshot of the Ticket Booking Platform showing the event booking and seat reservation interface',
      githubUrl: 'https://github.com/digvijay-ui/Ticket-Booking',
      liveUrl: 'https://frontend-five-bice-35.vercel.app/',
    },
    {
      id: 'project-digital-dump',
      number: '02',
      title: 'Digital Dump',
      subtitle: 'E-Waste Management Platform',
      role: 'Frontend Development',
      description:
        'A React and TypeScript e-waste platform using Axios and Mapbox to help users schedule pickups, track locations and connect with collection agents.',
      impact:
        'Mapbox-powered pickup flow connects users and collection agents through location-aware UI.',
      highlights: [
        // TODO(digvijay): Add the number of screens or frontend components built.
        'Built the frontend using React and TypeScript.',
        'Developed 3 role-based experiences for users, collection agents and admins.',
        'Integrated pickup location functionality using Mapbox.',
        // TODO(digvijay): Add the number of REST endpoints consumed if you have it.
        'Consumed REST APIs through Axios with loading and error handling.',
        'Built responsive interfaces across 4 product workflows: pickup, rewards, education and community.',
      ],
      technologies: ['React', 'TypeScript', 'React Router', 'Axios', 'Mapbox'],
      image: '/images/projects/digital-dump.png',
      imageAlt:
        'Screenshot of the Digital Dump platform showing the e-waste pickup and location-based user interface',
      githubUrl: 'https://github.com/digvijay-ui/Digital-Dump',
      liveUrl: 'https://digital-dump-f.vercel.app/',
    },
  ],
  skillGroups: [
    {
      id: 'languages',
      label: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'SQL', 'Python'],
    },
    {
      id: 'frontend',
      label: 'Frontend',
      skills: [
        'React.js',
        'Vue.js',
        'Next.js',
        'Redux',
        'Pinia',
        'Vue Router',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
        'Vite',
        'Axios',
      ],
    },
    {
      id: 'backend',
      label: 'Backend',
      skills: [
        'Node.js',
        'Express.js',
        'REST API Design',
        'JWT Authentication',
        'Zod',
      ],
    },
    {
      id: 'databases',
      label: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Mongoose'],
    },
    {
      id: 'testing',
      label: 'Testing',
      skills: ['Jest', 'ts-jest', 'Postman'],
    },
    {
      id: 'tools-platforms',
      label: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Linux', 'Vercel'],
    },
    {
      id: 'concepts',
      label: 'Concepts',
      skills: [
        'Role-Based Access Control',
        'Concurrency Handling',
        'AI-Assisted Development',
        'Agile / Scrum',
      ],
    },
  ],
  education: {
    id: 'be-it',
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Information Technology',
    institution: 'LDRP Institute of Technology and Research',
    university: 'KSV University',
    location: 'Gandhinagar, Gujarat',
    period: '2022 – 2026',
    cgpa: '7.51 ',
  },
  contact: {
    heading: "Let's build something.",
    description:
      'Have a Full Stack Developer or Frontend Developer opening in Bengaluru? Send me a message and I’ll get back quickly.',
    email: 'rajputdigvijaysinh45@gmail.com',
    location: 'Bengaluru, Karnataka, India',
  },
  socialLinks: [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/digvijay-ui',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rajput-digvijaysinh-7515b4254',
    },
  ],
}
