export type Job = { title: string; company: string; location: string; type: string; level: string; salary: string; skills: string[]; description: string }

export const jobs: Job[] = [
  { title: 'AI Engineer', company: 'Vertex Labs', location: 'Bangkok', type: 'Full-time', level: 'Mid-level', salary: '$55k–72k', skills: ['Python', 'PyTorch', 'MLOps'], description: 'Build intelligent products that help teams make better decisions.' },
  { title: 'Machine Learning Engineer', company: 'Northstar Digital', location: 'Remote', type: 'Full-time', level: 'Senior', salary: '$80k–105k', skills: ['TensorFlow', 'AWS', 'NLP'], description: 'Ship production ML systems for millions of users.' },
  { title: 'Data Analyst', company: 'Lumen Commerce', location: 'Bangkok', type: 'Full-time', level: 'Entry-level', salary: '$32k–44k', skills: ['SQL', 'Tableau', 'Python'], description: 'Turn customer data into the next great business insight.' },
  { title: 'Data Scientist', company: 'Cloudline', location: 'Singapore', type: 'Full-time', level: 'Mid-level', salary: '$60k–85k', skills: ['Python', 'Statistics', 'SQL'], description: 'Model the future of digital commerce with applied science.' },
  { title: 'Generative AI Developer', company: 'Morrow Studio', location: 'Remote', type: 'Contract', level: 'Mid-level', salary: '$50k–78k', skills: ['LLMs', 'TypeScript', 'RAG'], description: 'Create useful AI experiences from prototype to launch.' },
  { title: 'AI Product Specialist', company: 'Orbit Systems', location: 'Bangkok', type: 'Full-time', level: 'Senior', salary: '$68k–92k', skills: ['Product', 'AI Strategy', 'Research'], description: 'Bridge product strategy and emerging technology.' },
]

export const courses = [
  { name: 'Generative AI Fundamentals', instructor: 'Mina Park', level: 'Beginner', duration: '6 weeks', format: 'Live online', price: '$149' },
  { name: 'Prompt Engineering', instructor: 'Jai Chantarangsu', level: 'Intermediate', duration: '4 weeks', format: 'Self-paced', price: '$89' },
  { name: 'Python for AI', instructor: 'Noah Williams', level: 'Beginner', duration: '8 weeks', format: 'Live online', price: '$199' },
  { name: 'Machine Learning', instructor: 'Dr. Priya Shah', level: 'Advanced', duration: '10 weeks', format: 'Hybrid', price: '$299' },
  { name: 'Data Analytics', instructor: 'Lena Ortiz', level: 'Beginner', duration: '5 weeks', format: 'Self-paced', price: '$129' },
  { name: 'AI Application Development', instructor: 'Evan Cho', level: 'Intermediate', duration: '8 weeks', format: 'Live online', price: '$249' },
]

export const events = [
  { name: 'AI Technology Seminar', date: '18 October 2024', time: '10:00 AM', location: 'Innovation Hub', speaker: 'Dr. Ana Lee' },
  { name: 'Generative AI Workshop', date: '26 October 2024', time: '1:30 PM', location: 'Online event', speaker: 'Mina Park' },
  { name: 'AI Career Day', date: '08 November 2024', time: '9:00 AM', location: 'Bangkok Tech Hall', speaker: 'Industry leaders' },
  { name: 'Digital Transformation Conference', date: '22 November 2024', time: '9:30 AM', location: 'Online event', speaker: 'Multiple speakers' },
]

export const certifications = [
  { name: 'Generative AI Professional', organization: 'AI Institute', difficulty: 'Advanced', duration: '90 minutes', fee: '$120' },
  { name: 'AI Fundamentals', organization: 'Digital Academy', difficulty: 'Beginner', duration: '60 minutes', fee: '$65' },
  { name: 'Data Analytics Professional', organization: 'Data Guild', difficulty: 'Intermediate', duration: '120 minutes', fee: '$95' },
  { name: 'Cloud Practitioner', organization: 'Cloudline', difficulty: 'Beginner', duration: '90 minutes', fee: '$80' },
]

export const articles = [
  { title: 'AI at the edge: What comes next', category: 'AI News', date: '02 October 2024', text: 'How smaller, faster models are changing everyday products.' },
  { title: 'The practical reskilling guide', category: 'Career', date: '28 September 2024', text: 'A simple way to build your next digital skill.' },
  { title: 'Why responsible AI is a team sport', category: 'Digital Technology', date: '19 September 2024', text: 'The habits that make innovation useful and trustworthy.' },
]
