import type { PortfolioData } from '~/types/portfolio'

export const portfolioData: PortfolioData = {
  name: 'Digvijaysinh Rajput',
  role: 'Full Stack Developer',
  location: 'Bengaluru, Karnataka, India',
  email: 'rajputdigvijaysinh45@gmail.com',
  about: {
    heading: 'Engineering reliable web experiences.',
    statement:
      'I turn real product requirements into responsive interfaces, dependable APIs and production-ready workflows.',
    paragraphs: [
      'I’m Digvijaysinh Rajput, a Full Stack Developer based in Bengaluru and a 2026 B.E. Information Technology graduate.',
      'At Brainzym Private Ltd, I work across Vue.js interfaces, Node.js and Express APIs, and PostgreSQL-backed product flows. I’m currently seeking Full Stack or Frontend Developer roles in Bengaluru.',
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
      id: 'specialization',
      label: 'Specialization',
      value: 'Full Stack / Frontend',
    },
    {
      id: 'project-experience',
      label: 'Project experience',
      value: '2 Projects Shipped',
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
      technologyGroups: [
        {
          label: 'Interface',
          technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Axios'],
        },
        {
          label: 'Server',
          technologies: ['Node.js', 'Express.js', 'REST APIs'],
        },
        {
          label: 'Data & quality',
          technologies: ['PostgreSQL', 'Zod', 'Git'],
        },
      ],
      responsibilities: [
        {
          id: 'production-delivery',
          label: 'Production delivery',
          title: 'Core platform features',
          description:
            'Build and maintain production features across Vue.js interfaces, Express REST APIs and PostgreSQL-backed workflows.',
        },
        {
          id: 'dashboard-ownership',
          label: 'End-to-end ownership',
          title: 'Admin dashboard module',
          description:
            'Own reusable components, forms, Zod validation, API error handling and release-focused testing.',
        },
        {
          id: 'student-access',
          label: 'Full-stack workflow',
          title: 'Student access flow',
          description:
            'Designed the passcode login journey across API endpoints, PostgreSQL schema changes and bulk CSV imports.',
        },
        {
          id: 'product-reliability',
          label: 'Reliability',
          title: 'Existing product systems',
          description:
            'Troubleshoot frontend and backend modules to resolve critical bugs and improve stability and performance.',
        },
        {
          id: 'team-delivery',
          label: 'Collaboration',
          title: 'Product delivery loop',
          description:
            'Translate requirements with the tech lead and product owner through planning, reviews, demos and code review.',
        },
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
