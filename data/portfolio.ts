import type { PortfolioData } from '~/types/portfolio'

export const portfolioData: PortfolioData = {
  name: 'Digvijaysinh Rajput',
  role: 'Full Stack Developer',
  location: 'Bangalore, Karnataka, India',
  email: 'rajputdigvijaysinh45@gmail.com',
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
      value: 'Bangalore, Karnataka, India',
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
