
export enum AppStatus {
  APPLIED = 'Applied',
  SHORTLISTED = 'Shortlisted',
  INTERVIEW = 'Interview',
  REJECTED = 'Rejected',
  SELECTED = 'Selected'
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  college: string;
  branch: string;
  year: string;
  cgpa: number;
  skills: string[];
  avatar?: string;
}

export interface Job {
  id: string;
  company: string;
  logo: string;
  role: string;
  package: string;
  requiredSkills: string[];
  deadline: string;
  readinessScore: number;
  matchPercentage: number;
  competitionLevel: 'Low' | 'Medium' | 'High';
  location: string;
  type: string;
}

export interface Application {
  id: string;
  jobId: string;
  status: AppStatus;
  dateApplied: string;
  nextStep?: string;
  company: string;
  role: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'job' | 'test' | 'interview' | 'system';
  unread: boolean;
}
