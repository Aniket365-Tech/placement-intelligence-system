
import { AppStatus, Job, Application, Notification, UserProfile } from '../types';

export const userProfile: UserProfile = {
  name: 'Aniket Gajbhiye',
  email: 'aniket.g@example.edu',
  phone: '+91 9876543210',
  college: 'GHRCEM Nagpur',
  branch: 'Computer Science & Engineering',
  year: 'Final Year',
  cgpa: 7.83,
  skills: ['React', 'TypeScript', 'Tailwind', 'Python', 'Node.js', 'AWS'],
  avatar: 'https://picsum.photos/200/200?random=1'
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

export const jobsList: Job[] = [
  {
    id: '1',
    company: 'Google',
    logo: 'https://picsum.photos/40/40?random=2',
    role: 'Software Engineer - L3',
    package: '35 LPA',
    requiredSkills: ['Algorithms', 'Java', 'Cloud Systems'],
    deadline: '2026-03-15',
    readinessScore: 88,
    matchPercentage: 92,
    competitionLevel: 'High',
    location: 'Bangalore',
    type: 'Product'
  },
  {
    id: '2',
    company: 'Adobe',
    logo: 'https://picsum.photos/40/40?random=3',
    role: 'Product Developer',
    package: '28 LPA',
    requiredSkills: ['C++', 'Graphics', 'UI/UX'],
    deadline: '2026-03-20',
    readinessScore: 76,
    matchPercentage: 80,
    competitionLevel: 'Medium',
    location: 'Noida',
    type: 'Product'
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
    type: 'Mass'
  }
];

export const applications: Application[] = [
  {
    id: 'app-1',
    jobId: '1',
    status: AppStatus.INTERVIEW,
    dateApplied: '2026-02-01',
    nextStep: 'Technical Round 2 - Feb 15',
    company: 'Google',
    role: 'Software Engineer'
  },
  {
    id: 'app-2',
    jobId: '2',
    status: AppStatus.SHORTLISTED,
    dateApplied: '2026-01-28',
    nextStep: 'Awaiting Schedule',
    company: 'Adobe',
    role: 'Product Developer'
  }
];

export const notifications: Notification[] = [
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
  }
];

export const leaderboardData = [
  { rank: 1, name: 'Mohit Lakhe', score: 2840, branch: 'CSE', growth: '+12%' },
  { rank: 2, name: 'Aniket Gajbhiye', score: 2750, branch: 'CSE', growth: '+5%' },
  { rank: 3, name: 'Rohit Sharma', score: 2620, branch: 'IT', growth: '+8%' },
  { rank: 4, name: 'Priya Verma', score: 2590, branch: 'ECE', growth: '+2%' }
];

export const roadmapData = [
  { week: 1, task: 'DSA Fundamentals & Array Mastery', status: 'Completed', type: 'Technical' },
  { week: 2, task: 'Resume Crafting & ATS Optimization', status: 'In Progress', type: 'Career' },
  { week: 3, task: 'Core CS Subjects Revision (OS/DBMS)', status: 'Upcoming', type: 'Technical' },
  { week: 4, task: 'Company Specific Mock Tests', status: 'Upcoming', type: 'Assessment' }
];

export const interviewExperiences = [
  {
    id: 'ie1',
    company: 'Amazon',
    role: 'SDE-1',
    rounds: 4,
    difficulty: 4.5,
    tips: 'Focus heavily on Leadership Principles and Code Quality.',
    date: 'Jan 2026'
  },
  {
    id: 'ie2',
    company: 'Infosys',
    role: 'Power Programmer',
    rounds: 2,
    difficulty: 3,
    tips: 'Brush up on basic competitive programming and OOPs concepts.',
    date: 'Dec 2025'
  }
];
