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
      'I enjoy developing responsive interfaces, REST APIs and reliable full-stack features. I am currently seeking Full Stack or Frontend Developer opportunities in Bengaluru or remote.',
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
  experience: [
    {
      id: 'brainzym-full-stack-developer-intern',
      title: 'Full Stack Developer Intern',
      company: 'Brainzym Private Ltd',
      period: 'January 2026 - Present',
      location: 'Bangalore, Karnataka',
      description:
        'Contributing to full stack product development with a focus on maintainable user interfaces and backend integration.',
      achievements: [
        'Building production-oriented features across frontend and backend workflows.',
      ],
      technologies: ['Vue', 'React', 'TypeScript', 'Node.js'],
    },
  ],
  projects: [
    {
      id: 'ticket-booking-platform',
      title: 'Ticket Booking Platform',
      description:
        'A concise placeholder for a ticket booking platform project to be expanded in a later phase.',
      technologies: ['TypeScript', 'Vue', 'Node.js'],
      links: [],
    },
    {
      id: 'digital-dump-e-waste-management-platform',
      title: 'Digital Dump - E-Waste Management Platform',
      description:
        'A concise placeholder for an e-waste management platform project to be expanded in a later phase.',
      technologies: ['TypeScript', 'React', 'Node.js'],
      links: [],
    },
  ],
  skillGroups: [
    {
      id: 'core',
      label: 'Core',
      skills: ['Vue', 'React', 'TypeScript', 'Node.js'],
    },
  ],
  education: [
    {
      id: 'be-information-technology-ldrp',
      title: 'Bachelor of Engineering in Information Technology',
      institution: 'LDRP Institute of Technology and Research',
      university: 'KSV University',
      period: '2022-2026',
      location: 'Gandhinagar, Gujarat',
      description: 'CPI: 7.51/10',
    },
  ],
  socialLinks: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rajput-digvijaysinh-7515b4254',
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/digvijay-ui',
    },
  ],
}
