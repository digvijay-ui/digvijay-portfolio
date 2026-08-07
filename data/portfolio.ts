import type { PortfolioData } from '~/types/portfolio'

export const portfolioData: PortfolioData = {
  name: 'Digvijaysinh Rajput',
  role: 'Full Stack Developer',
  location: 'Bangalore, Karnataka, India',
  email: 'rajputdigvijaysinh45@gmail.com',
  about: {
    heading: 'Building reliable web experiences.',
    paragraphs: [
      'I’m Digvijaysinh Rajput, a Full Stack Developer and 2026 B.E. Information Technology graduate. I currently work as a Full Stack Developer Intern at Brainzym Private Ltd, where I build and maintain production web applications using Vue.js, TypeScript, Node.js, Express and PostgreSQL.',
      'I enjoy developing responsive interfaces, REST APIs and reliable full-stack features. I am currently seeking Full Stack or Frontend Developer opportunities in Bangalore or remote.',
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
      value: '6+ months',
    },
    {
      id: 'location',
      label: 'Location',
      value: 'Bangalore, India',
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
      location: 'Bangalore, Karnataka',
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
        "Developed and maintained full-stack features for Brainzym's core web platform using Vue.js, TypeScript, Node.js, Express and PostgreSQL.",
        'Took ownership of the admin dashboard module, building reusable Vue components with form handling, Zod validation, API error handling and production-focused testing.',
        'Designed and implemented a passcode-based student login flow covering Express API endpoints, PostgreSQL schema changes and bulk CSV imports.',
        'Troubleshot and improved existing frontend and backend modules, resolving bugs and improving application stability.',
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
        'A full-stack event booking platform with authentication, event browsing, seat reservation, wallet-based payments, booking history and a role-based admin panel.',
      highlights: [
        'Built seat selection and temporary reservation flows designed to prevent double booking.',
        'Implemented wallet-based booking confirmation and transaction handling.',
        'Added JWT authentication, Zod request validation and role-based admin functionality.',
        'Built admin workflows for events, seats, bookings, transactions, cancellations and refunds.',
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
        'Ticket Booking Platform application interface showing the deployed booking experience',
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
        'A responsive e-waste management platform connecting users with collection agents while supporting pickup scheduling, education, rewards and administrative workflows.',
      highlights: [
        'Built the frontend using React and TypeScript.',
        'Developed user, collection-agent and admin experiences.',
        'Integrated pickup location functionality using Mapbox.',
        'Consumed REST APIs through Axios with loading and error handling.',
        'Built responsive interfaces for pickup, rewards, education and community workflows.',
      ],
      technologies: ['React', 'TypeScript', 'React Router', 'Axios', 'Mapbox'],
      image: '/images/projects/digital-dump.png',
      imageAlt:
        'Digital Dump e-waste management platform deployed application interface',
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
    cpi: '7.51 / 10',
  },
  contact: {
    heading: "Let's build something.",
    description:
      "I'm currently open to Full Stack and Frontend Developer opportunities in Bangalore or remote.",
    email: 'rajputdigvijaysinh45@gmail.com',
    location: 'Bangalore, Karnataka, India',
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
