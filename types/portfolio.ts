export interface NavigationItem {
  id: string
  label: string
  href: string
}

export interface QuickFact {
  id: string
  label: string
  value: string
}

export interface AboutContent {
  heading: string
  paragraphs: string[]
}

export interface Experience {
  id: string
  role: string
  company: string
  companyUrl?: string
  logo?: string
  logoAlt?: string
  initials: string
  period: string
  location: string
  startDate: string
  endDate: string
  achievements: string[]
  technologies: string[]
  linkedinUrl?: string
}

export interface Project {
  id: string
  number: string
  title: string
  subtitle?: string
  role?: string
  description: string
  highlights: string[]
  technologies: string[]
  image: string
  imageAlt: string
  githubUrl: string
  liveUrl: string
}

export interface SkillGroup {
  id: string
  label: string
  skills: string[]
}

export interface Education {
  id: string
  degree: string
  field: string
  institution: string
  university: string
  location: string
  period: string
  cpi: string
}

export interface ContactInfo {
  heading: string
  description: string
  email: string
  phone: string
  phoneHref: string
  location: string
}

export interface SocialLink {
  id: string
  label: string
  href: string
}

export interface PortfolioData {
  name: string
  role: string
  location: string
  email: string
  about: AboutContent
  navigation: NavigationItem[]
  quickFacts: QuickFact[]
  experiences: Experience[]
  projects: Project[]
  skillGroups: SkillGroup[]
  education: Education
  contact: ContactInfo
  socialLinks: SocialLink[]
}
