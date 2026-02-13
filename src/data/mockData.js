export const userProfile = {
  name: 'Aniket Gajbhiye',
  email: 'aniket.g@example.edu',
  phone: '+91 9876543210',
  college: 'GHRCEM Nagpur',
  branch: 'Computer Science & Engineering',
  year: 'Final Year',
  cgpa: 7.83,
  skills: ['React', 'TypeScript', 'Tailwind', 'Python', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
  avatar: 'https://picsum.photos/200/200?random=1',
  location: 'Nagpur, Maharashtra'
};

export const readinessData = {
  overall: 82,
  cgpa: 90,
  skills: 75,
  resume: 85,
  assessments: 80,
  projects: 70,
  mockInterviews: 88,
  breakdown: [
    { label: 'Technical Skills', value: 78 },
    { label: 'Soft Skills', value: 85 },
    { label: 'Problem Solving', value: 92 },
    { label: 'Communication', value: 80 }
  ]
};

export const jobsList = [
  {
    id: '1',
    company: 'Google',
    logo: 'https://picsum.photos/40/40?random=2',
    role: 'Software Engineer - L3',
    package: '35 LPA',
    requiredSkills: ['Algorithms', 'Java', 'Cloud Systems', 'System Design'],
    deadline: '2026-03-15',
    readinessScore: 88,
    matchPercentage: 92,
    competitionLevel: 'High',
    location: 'Bangalore',
    type: 'Product',
    eligibility: true
  },
  {
    id: '2',
    company: 'Adobe',
    logo: 'https://picsum.photos/40/40?random=3',
    role: 'Product Developer',
    package: '28 LPA',
    requiredSkills: ['C++', 'Graphics', 'UI/UX', 'React'],
    deadline: '2026-03-20',
    readinessScore: 76,
    matchPercentage: 80,
    competitionLevel: 'Medium',
    location: 'Noida',
    type: 'Product',
    eligibility: true
  },
  {
    id: '3',
    company: 'TCS Digital',
    logo: 'https://picsum.photos/40/40?random=4',
    role: 'Systems Engineer',
    package: '7.5 LPA',
    requiredSkills: ['Python', 'SQL', 'Aptitude'],
    deadline: '2026-02-28',
    readinessScore: 95,
    matchPercentage: 98,
    competitionLevel: 'Low',
    location: 'Pune',
    type: 'Mass',
    eligibility: true
  },
  {
    id: '4',
    company: 'Microsoft',
    logo: 'https://picsum.photos/40/40?random=5',
    role: 'Software Engineer',
    package: '32 LPA',
    requiredSkills: ['C#', '.NET', 'Azure', 'Algorithms'],
    deadline: '2026-03-10',
    readinessScore: 82,
    matchPercentage: 85,
    competitionLevel: 'High',
    location: 'Hyderabad',
    type: 'Product',
    eligibility: true
  },
  {
    id: '5',
    company: 'Amazon',
    logo: 'https://picsum.photos/40/40?random=6',
    role: 'SDE-1',
    package: '30 LPA',
    requiredSkills: ['Java', 'System Design', 'Algorithms', 'AWS'],
    deadline: '2026-02-25',
    readinessScore: 79,
    matchPercentage: 78,
    competitionLevel: 'High',
    location: 'Bangalore',
    type: 'Product',
    eligibility: true
  }
];

export const applications = [
  {
    id: 'app-1',
    jobId: '1',
    status: 'Interview',
    dateApplied: '2026-02-01',
    nextStep: 'Technical Round 2 - Feb 15',
    company: 'Google',
    role: 'Software Engineer',
    timeline: [
      { stage: 'Applied', date: '2026-02-01', completed: true },
      { stage: 'Resume Screening', date: '2026-02-05', completed: true },
      { stage: 'Online Assessment', date: '2026-02-10', completed: true },
      { stage: 'Technical Round 1', date: '2026-02-12', completed: true },
      { stage: 'Technical Round 2', date: '2026-02-15', completed: false },
      { stage: 'HR Round', date: null, completed: false }
    ]
  },
  {
    id: 'app-2',
    jobId: '2',
    status: 'Shortlisted',
    dateApplied: '2026-01-28',
    nextStep: 'Awaiting Schedule',
    company: 'Adobe',
    role: 'Product Developer',
    timeline: [
      { stage: 'Applied', date: '2026-01-28', completed: true },
      { stage: 'Resume Screening', date: '2026-02-02', completed: true },
      { stage: 'Online Assessment', date: '2026-02-08', completed: true },
      { stage: 'Technical Round', date: null, completed: false }
    ]
  },
  {
    id: 'app-3',
    jobId: '3',
    status: 'Selected',
    dateApplied: '2026-01-15',
    nextStep: 'Offer Letter Received',
    company: 'TCS Digital',
    role: 'Systems Engineer',
    timeline: [
      { stage: 'Applied', date: '2026-01-15', completed: true },
      { stage: 'Resume Screening', date: '2026-01-20', completed: true },
      { stage: 'Online Assessment', date: '2026-01-25', completed: true },
      { stage: 'Technical Round', date: '2026-01-30', completed: true },
      { stage: 'HR Round', date: '2026-02-05', completed: true },
      { stage: 'Selected', date: '2026-02-10', completed: true }
    ]
  }
];

export const notifications = [
  {
    id: 'n1',
    title: 'New Interview Scheduled',
    message: 'Google Tech Round 2 scheduled for Feb 15th at 11:00 AM',
    time: '2 hours ago',
    type: 'interview',
    unread: true
  },
  {
    id: 'n2',
    title: 'Deadline Approaching',
    message: 'Microsoft SWE role application closes in 24 hours',
    time: '5 hours ago',
    type: 'job',
    unread: false
  },
  {
    id: 'n3',
    title: 'Assessment Reminder',
    message: 'Amazon Online Assessment scheduled for Feb 16th at 10:00 AM',
    time: '1 day ago',
    type: 'test',
    unread: true
  },
  {
    id: 'n4',
    title: 'Profile Viewed',
    message: 'Your profile was viewed by Adobe recruiters',
    time: '2 days ago',
    type: 'job',
    unread: false
  }
];

export const leaderboardData = [
  { rank: 1, name: 'Sanjana Reddy', score: 2840, branch: 'CSE', growth: '+12%', avatar: 'https://picsum.photos/32/32?random=10' },
  { rank: 2, name: 'Aniket Gajbhiye', score: 2750, branch: 'CSE', growth: '+5%', avatar: 'https://picsum.photos/32/32?random=1' },
  { rank: 3, name: 'Rohit Sharma', score: 2620, branch: 'IT', growth: '+8%', avatar: 'https://picsum.photos/32/32?random=11' },
  { rank: 4, name: 'Priya Verma', score: 2590, branch: 'ECE', growth: '+2%', avatar: 'https://picsum.photos/32/32?random=12' },
  { rank: 5, name: 'Arjun Patel', score: 2550, branch: 'CSE', growth: '+15%', avatar: 'https://picsum.photos/32/32?random=13' }
];

export const roadmapData = [
  { week: 1, task: 'DSA Fundamentals & Array Mastery', status: 'Completed', type: 'Technical', progress: 100 },
  { week: 2, task: 'Resume Crafting & ATS Optimization', status: 'In Progress', type: 'Career', progress: 70 },
  { week: 3, task: 'Core CS Subjects Revision (OS/DBMS)', status: 'Upcoming', type: 'Technical', progress: 0 },
  { week: 4, task: 'Company Specific Mock Tests', status: 'Upcoming', type: 'Assessment', progress: 0 },
  { week: 5, task: 'System Design Basics', status: 'Upcoming', type: 'Technical', progress: 0 }
];

export const discussionPosts = [
  {
    id: 'd1',
    title: 'How to prepare for Google Technical Rounds?',
    author: 'Rahul Mehta',
    tags: ['Google', 'Interview', 'Technical'],
    upvotes: 45,
    answers: 12,
    time: '2 hours ago'
  },
  {
    id: 'd2',
    title: 'Best resources for System Design preparation?',
    author: 'Priya Singh',
    tags: ['System Design', 'Resources'],
    upvotes: 32,
    answers: 8,
    time: '5 hours ago'
  },
  {
    id: 'd3',
    title: 'TCS Digital vs Infosys Power Programmer - Which is better?',
    author: 'Amit Kumar',
    tags: ['TCS', 'Infosys', 'Career'],
    upvotes: 28,
    answers: 15,
    time: '1 day ago'
  }
];

export const interviewExperiences = [
  {
    id: 'ie1',
    company: 'Amazon',
    role: 'SDE-1',
    rounds: 4,
    difficulty: 4.5,
    tips: 'Focus heavily on Leadership Principles and Code Quality. Practice system design questions.',
    date: 'Jan 2026',
    questions: [
      'Design a distributed cache system',
      'Find the longest palindromic substring',
      'Explain CAP theorem with examples'
    ]
  },
  {
    id: 'ie2',
    company: 'Infosys',
    role: 'Power Programmer',
    rounds: 2,
    difficulty: 3,
    tips: 'Brush up on basic competitive programming and OOPs concepts.',
    date: 'Dec 2025',
    questions: [
      'Reverse a linked list',
      'Explain polymorphism with example',
      'SQL query for finding second highest salary'
    ]
  },
  {
    id: 'ie3',
    company: 'Microsoft',
    role: 'Software Engineer',
    rounds: 3,
    difficulty: 4,
    tips: 'Strong focus on problem-solving and clean code. Be ready for behavioral questions.',
    date: 'Jan 2026',
    questions: [
      'Design a URL shortener',
      'Implement LRU Cache',
      'Tell me about a time you handled conflict'
    ]
  }
];

export const assessments = [
  {
    id: 'a1',
    title: 'DSA Fundamentals',
    role: 'Software Engineer',
    difficulty: 'Medium',
    duration: 60,
    questions: 30,
    completed: true,
    score: 85,
    date: '2026-01-15'
  },
  {
    id: 'a2',
    title: 'System Design Basics',
    role: 'SDE-2',
    difficulty: 'Hard',
    duration: 90,
    questions: 20,
    completed: false,
    score: null,
    date: null
  },
  {
    id: 'a3',
    title: 'Frontend Development',
    role: 'Frontend Developer',
    difficulty: 'Easy',
    duration: 45,
    questions: 25,
    completed: true,
    score: 92,
    date: '2026-01-20'
  }
];

export const skillGapData = {
  strong: ['React', 'JavaScript', 'Python', 'Problem Solving'],
  moderate: ['Node.js', 'MongoDB', 'Git'],
  weak: ['System Design', 'Docker', 'Kubernetes', 'AWS Advanced'],
  missing: ['GraphQL', 'Redis', 'Microservices']
};

export const placementProbability = {
  google: { probability: 64, match: 92, competition: 'High', factors: ['Strong DSA', 'Good Projects', 'High Competition'] },
  microsoft: { probability: 72, match: 85, competition: 'High', factors: ['Strong Resume', 'Good CGPA', 'Relevant Skills'] },
  tcs: { probability: 95, match: 98, competition: 'Low', factors: ['Excellent Match', 'Good Performance', 'Low Competition'] }
};

export const companyPatterns = [
  { company: 'Google', pattern: 'Product', focus: 'Algorithms & System Design', hiringTrend: 'Mass Recruiter' },
  { company: 'Microsoft', pattern: 'Product', focus: 'Problem Solving & Clean Code', hiringTrend: 'Skill-Heavy' },
  { company: 'TCS', pattern: 'Service', focus: 'Aptitude & Basic Programming', hiringTrend: 'Mass Recruiter' },
  { company: 'Amazon', pattern: 'Product', focus: 'Leadership Principles & System Design', hiringTrend: 'Skill-Heavy' }
];

export const alumniPathways = [
  {
    name: 'Rahul Mehta',
    start: 'CSE\'22',
    current: 'SDE-II @ Microsoft',
    path: ['DSA Mastery', 'System Design', 'Mock Interviews', 'Microsoft Specific Prep'],
    avatar: 'https://picsum.photos/40/40?random=20'
  },
  {
    name: 'Sneha Patel',
    start: 'IT\'21',
    current: 'Software Engineer @ Google',
    path: ['Competitive Programming', 'Open Source', 'Internships', 'Google Prep'],
    avatar: 'https://picsum.photos/40/40?random=21'
  }
];

export const weeklyProgress = {
  week: 12,
  totalWeeks: 24,
  consistency: 92,
  hoursSpent: 28,
  tasksCompleted: 8,
  tasksTotal: 10
};
