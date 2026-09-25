import type { PortfolioData } from '~/types/portfolio'

export const portfolioData: PortfolioData = {
  name: 'Digvijaysinh Rajput',
  role: '',
  location: 'Bengaluru, Karnataka, India',
  email: 'rajputdigvijaysinh45@gmail.com',
  about: {
    heading: 'Engineering reliable web experiences.',
    statement:
      'I turn real product requirements into responsive interfaces, dependable APIs and production-ready workflows.',
    paragraphs: [
      'Based in Bengaluru, I work full-time as an Associate Full Stack Developer at Brainzym Private Ltd, building Vue.js interfaces, Node.js and Express APIs, and PostgreSQL-backed product flows. I’m a 2026 B.E. Information Technology graduate.',
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
      id: 'brainzym-associate-full-stack-developer',
      role: 'Associate Full Stack Developer (Full-time)',
      company: 'Brainzym Private Ltd',
      logo: '/images/companies/brainzym-logo.png',
      logoAlt: 'Brainzym Private Ltd logo',
      initials: 'BZ',
      location: 'Bengaluru, Karnataka',
      endDate: 'Present',
      period: 'Present',
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
          title: 'Ship production features',
          description:
            'Build and maintain Vue.js interfaces, Express REST APIs and PostgreSQL-backed workflows.',
        },
        {
          id: 'dashboard-ownership',
          label: 'End-to-end ownership',
          title: 'Own an admin dashboard module',
          description:
            'Deliver reusable components, forms, Zod validation, API error handling and release testing end to end.',
        },
        {
          id: 'student-access',
          label: 'Full-stack workflow',
          title: 'Design a student access flow',
          description:
            'Implemented passcode login across API endpoints, PostgreSQL schema changes and bulk CSV imports.',
        },
        {
          id: 'product-reliability',
          label: 'Reliability',
          title: 'Solve product reliability issues',
          description:
            'Troubleshoot frontend and backend modules to resolve critical bugs and improve stability.',
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
        'Event booking requires seats, payments and admin actions to stay consistent across a complete reservation journey.',
      impact:
        'Concurrency-safe seat reservation flow designed to reduce double-booking risk.',
      highlights: [
        // TODO(digvijay): Add tested concurrent booking count if you have it.
        'Built seat selection and temporary reservations designed to prevent double booking.',
        'Implemented 2 wallet flows for booking confirmation and transaction handling.',
        'Added JWT authentication, Zod validation and role-based admin access.',
        'Delivered 6 admin workflows covering events, seats, bookings, transactions, cancellations and refunds.',
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
        'E-waste pickup needs a clear way for users, collection agents and admins to coordinate location-based requests.',
      impact:
        'Mapbox-powered pickup flow connects users and collection agents through location-aware UI.',
      highlights: [
        // TODO(digvijay): Add the number of screens or frontend components built.
        'Developed 3 role-based React and TypeScript experiences for users, collection agents and admins.',
        'Integrated Mapbox into the pickup-location workflow.',
        // TODO(digvijay): Add the number of REST endpoints consumed if you have it.
        'Connected REST APIs through Axios with loading and error states.',
        'Delivered responsive UI for 4 workflows: pickup, rewards, education and community.',
      ],
      technologies: ['React', 'TypeScript', 'React Router', 'Axios', 'Mapbox'],
      image: '/images/projects/digital-dump.webp',
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
