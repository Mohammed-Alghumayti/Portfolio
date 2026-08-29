/**
 * All site content lives here. Edit this file to update the portfolio —
 * the components read from it and lay everything out automatically.
 */

export const profile = {
  name: 'Mohammed Alghumayti',
  role: 'Cyber Defense Engineer',
  headline:
    'DevOps Engineer · Cybersecurity Specialist · Software Engineer · Database Development',
  location: 'Jeddah, Saudi Arabia',
  email: 'm7md3id.10@gmail.com',
  phone: '+966 53 023 5130',
  linkedin: 'https://www.linkedin.com/in/mohammedalghumayti/',
  github: 'https://github.com/Mohammed-Alghumayti',
  cv: 'Mohammed-Alghumayti-CV.pdf',
  portrait: 'img/portrait',
  summary:
    'Cyber Defense Engineer with a background spanning security operations, software engineering and product. I monitor and defend critical systems using SIEM and EDR tooling, and I have shipped production software across .NET Core, Java, React and Next.js. I hold a degree in Information Technology (Networks & Databases) from King Abdulaziz University and am accredited by the Saudi Council of Engineers.',
  languages: ['Arabic — Native', 'English — Professional'],
} as const

export const stats = [
  { value: '3+', label: 'Years of experience' },
  { value: '6', label: 'Professional roles' },
  { value: '17', label: 'Certifications' },
] as const

export type Experience = {
  role: string
  company: string
  period: string
  location?: string
  description: string
  skills?: string[]
  current?: boolean
}

export const experience: Experience[] = [
  {
    role: 'Cyber Defense Engineer',
    company: 'Confidential Government Entity',
    period: 'Sep 2025 — Present',
    location: 'On-site',
    description:
      'Cyber Defense Center specialist. Continuously monitor systems and networks using specialized tooling such as SIEM and EDR to analyze event logs, detect suspicious activity and identify potential threats.',
    skills: ['SIEM', 'EDR', 'Threat Detection', 'Security Monitoring'],
    current: true,
  },
  {
    role: 'Cybersecurity Trainee',
    company: 'Confidential Government Entity',
    period: 'Jun 2025 — Sep 2025',
    location: 'On-site',
    description:
      'Trained across security operations, incident response and cyber defense workflows ahead of moving into the Cyber Defense Engineer role.',
    skills: ['Incident Response', 'Security Operations'],
  },
  {
    role: 'Assistant Manager — Development',
    company: 'Bupa Arabia',
    period: 'Jul 2024 — Oct 2024',
    location: 'Jeddah, Saudi Arabia · Hybrid',
    description:
      'Worked as a full-stack developer and maintained system architecture across Next.js, .NET Core and Java.',
    skills: ['Next.js', '.NET Core', 'Java', 'Database Administration', 'Microsoft Azure'],
  },
  {
    role: 'IT System Analyst',
    company: 'Leonardo',
    period: 'Apr 2024 — Aug 2024',
    location: 'Riyadh, Saudi Arabia · Hybrid',
    description:
      'Coordinated with development teams to implement and integrate new systems into the existing technology estate.',
    skills: ['Systems Integration', 'Requirements Analysis'],
  },
  {
    role: 'Tech Product Manager',
    company: 'Lyrae Digital',
    period: 'Sep 2023 — Apr 2024',
    location: 'Saudi Arabia · On-site',
    description:
      'Defined and prioritized product features and enhancements in collaboration with the product team, working on a low-code platform and the Babakom B2B marketplace.',
    skills: ['Product Management', 'Roadmapping', 'Stakeholder Management'],
  },
  {
    role: 'Software Engineer',
    company: 'Lyrae Digital',
    period: 'Feb 2023 — Sep 2023',
    location: 'Jeddah, Saudi Arabia · On-site',
    description:
      'Provided support, troubleshooting and solutions to complex problems, including complaint resolution, sensitive customer handling and mission-critical support.',
    skills: ['Cloud Development', 'SDLC', 'Troubleshooting'],
  },
  {
    role: 'Trainee Software Engineer',
    company: 'PureCode.sa',
    period: 'Jan 2022 — Mar 2022',
    location: 'Jeddah, Saudi Arabia',
    description:
      'Identified, analyzed and documented design, logical and linguistic errors across the product codebase.',
    skills: ['React.js', 'IT Projects'],
  },
]

export type Project = {
  name: string
  description: string
  image: string
  link?: string
  linkLabel?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    name: 'Babakom',
    description:
      'B2B marketplace platform built at Lyrae Digital on the first low-code platform in Saudi Arabia.',
    image: 'img/babakom.png',
    link: 'https://babakom-develop.babakom.sa/Babakom/HomePage',
    linkLabel: 'Visit site',
    tags: ['Product', 'B2B', 'Low-code'],
  },
  {
    name: 'AimesPlus',
    description:
      'Web application project covering end-to-end feature development and data management.',
    image: 'img/aimes.png',
    link: 'https://github.com/MohammedPass/AimesPlus',
    linkLabel: 'View on GitHub',
    tags: ['Web App', 'Full-stack'],
  },
  {
    name: 'PureCode',
    description:
      'Code-quality project from the PureCode.sa traineeship, analyzing design and logic errors.',
    image: 'img/Purecode.png',
    link: 'https://github.com/MohammedPass/purecode',
    linkLabel: 'View on GitHub',
    tags: ['React.js', 'Code Quality'],
  },
  {
    name: 'Cipher',
    description: 'Cryptography-themed application concept and interface design.',
    image: 'img/Cipher.png',
    tags: ['Security', 'Design'],
  },
  {
    name: 'Smart Parking',
    description: 'Smart parking system concept covering IoT sensing and a management interface.',
    image: 'img/SmartParking.png',
    tags: ['IoT', 'Systems'],
  },
  {
    name: 'CodeIt',
    description: 'Interface design for a developer-focused learning and practice platform.',
    image: 'img/codeIt.png',
    tags: ['UI Design'],
  },
  {
    name: 'Nedaa',
    description: 'Application interface design exploring service request and dispatch flows.',
    image: 'img/nedaa.png',
    tags: ['UI Design'],
  },
]

export type Certification = {
  name: string
  issuer: string
  issued: string
  image?: string
  credential?: string
  link?: string
}

export const certifications: Certification[] = [
  {
    name: 'Saudi Council of Engineers Accreditation',
    issuer: 'Saudi Council of Engineers',
    issued: 'Information Technology Specialist',
    image: 'img/SCE (1).png',
    credential: 'Membership No. 978906',
    link: 'https://eservices.saudieng.sa/ar/accreditation/pages/validation.aspx?Membershipid=978906',
  },
  {
    name: 'Web Traffic Protection Associate',
    issuer: 'OPSWAT Academy',
    issued: 'Issued Aug 2026',
    credential: 'Credential ID Ky1nDBPoBg',
  },
  {
    name: 'Cybersecurity Fundamentals Associate',
    issuer: 'OPSWAT Academy',
    issued: 'Issued Aug 2026',
    credential: 'Credential ID 01AbnEikjg',
  },
  {
    name: 'Principles of Artificial Intelligence',
    issuer: 'SDAIA — سدايا',
    issued: 'Issued Sep 2025',
  },
  {
    name: 'Building Websites Using React JS',
    issuer: 'Tuwaiq Academy',
    issued: 'Issued Apr 2024',
  },
  {
    name: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    issued: 'Issued Oct 2023',
  },
  {
    name: 'Developing Websites Using PHP Laravel',
    issuer: 'Tuwaiq Academy',
    issued: 'Issued Dec 2023',
  },
  {
    name: 'Cloud Infrastructure Foundations Associate',
    issuer: 'Oracle',
    issued: 'Oracle Cloud Infrastructure',
    image: 'img/Oracle Cloud Infrastructure.png',
  },
  {
    name: 'Cybersecurity Incident Response Analysis',
    issuer: 'stc Academy',
    issued: 'Cyber incident reporting and response procedures',
    image: 'img/stc.png',
  },
  {
    name: 'IBM Cybersecurity Fundamentals',
    issuer: 'IBM · Coursera',
    issued: 'CIA Triad, access management, incident response',
    image: 'img/cybersecurity-it-fundamentals-specialization.png',
  },
  {
    name: 'DevOps Foundation',
    issuer: 'DevOps University',
    issued: 'CI/CD, Docker, Kubernetes, Ansible, AWS',
    image: 'img/foundation badge 1.png',
  },
  {
    name: 'Google IT Support',
    issuer: 'Google · Coursera',
    issued: 'End-to-end IT support and troubleshooting',
    image: 'img/google-it-support-certificate.png',
  },
  {
    name: 'Introduction to Data Science',
    issuer: 'IBM · Coursera',
    issued: 'Big data pipelines, AI and machine learning',
    image: 'img/introduction-to-data-science.png',
  },
  {
    name: 'Networking Essentials',
    issuer: 'Cisco Networking Academy',
    issued: 'Network design, troubleshooting and security',
    image: 'img/networking-essentials.png',
  },
  {
    name: 'IT Essentials',
    issuer: 'Cisco Networking Academy',
    issued: 'Hardware, mobile devices and security threats',
    image: 'img/it-essentials.png',
  },
  {
    name: 'SAFOLA Hackathon',
    issuer: 'Savola Group',
    issued: 'Built a system to automate shift handover',
    image: 'img/safolaHakathon.png',
  },
  {
    name: 'E-commerce Hackathon',
    issuer: 'Saudi Electronic University',
    issued: 'Developed an application for engineering use',
    image: 'img/E-commerce Hackathon.png',
  },
]

export type Education = {
  qualification: string
  institution: string
  period: string
  detail: string
}

export const education: Education[] = [
  {
    qualification: 'BSc Information Technology (Networks & Databases)',
    institution: 'King Abdulaziz University — FCIT',
    period: 'Graduated Dec 2022',
    detail: 'Faculty of Computing and Information Technology. GPA 4.39.',
  },
  {
    qualification: 'DevOps Engineering Program',
    institution: 'Coding Dojo — Saudi Digital Academy',
    period: 'May 2022 — Sep 2022',
    detail: 'Graduate of the Digital Hemma Camps DevOps track.',
  },
  {
    qualification: 'High School Diploma',
    institution: 'Al-Faisaliah High School',
    period: 'Graduated 2017',
    detail: 'Graduated with a GPA of 98.57 out of 100.',
  },
]

export const skillGroups = [
  {
    title: 'Security',
    items: ['SIEM', 'EDR', 'Threat Detection', 'Incident Response', 'Network Security'],
  },
  {
    title: 'Development',
    items: ['Java', 'C# / .NET Core', 'Python', 'React.js', 'Next.js', 'PHP Laravel'],
  },
  {
    title: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'AWS', 'Microsoft Azure', 'Oracle Cloud'],
  },
  {
    title: 'Data',
    items: ['SQL', 'Database Administration', 'Database Design', 'Data Fundamentals'],
  },
] as const
