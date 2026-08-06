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

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  links: ProjectLink[]
}

export interface SkillGroup {
  id: string
  label: string
  skills: string[]
}

export interface Education {
  id: string
  title: string
  institution: string
  university: string
  period: string
  location: string
  description: string
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
  navigation: NavigationItem[]
  quickFacts: QuickFact[]
  experience: Experience[]
  projects: Project[]
  skillGroups: SkillGroup[]
  education: Education[]
  socialLinks: SocialLink[]
}
