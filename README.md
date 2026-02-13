# Smart Placement Intelligence System

A modern SaaS-style student placement lifecycle intelligence dashboard designed for Indian engineering students.

## Features

- **Dashboard**: Comprehensive overview with readiness score, skill gaps, job opportunities, and AI insights
- **Profile Management**: Complete student profile with academic details, skills, and projects
- **Resume Analyzer**: AI-powered ATS compatibility checker with improvement suggestions
- **Skill Assessment**: Role-based technical assessments with score tracking
- **Readiness Score**: Multi-component readiness analysis with job-specific scores
- **Placement Roadmap**: Personalized timeline with milestones and daily tasks
- **Job Opportunities**: Curated job listings with match scores and competition levels
- **Applications Tracking**: Complete recruitment timeline and status tracking
- **Discussion Hub**: Peer-to-peer Q&A and experience sharing
- **Interview Experiences**: Real interview experiences with tips and questions
- **Leaderboard**: Peer rankings with branch-wise filters
- **Notifications**: Categorized notifications for jobs, tests, and interviews
- **Settings**: Profile, password, notification, and privacy settings
- **Mock Interview**: Interview prep mode with confidence tracking
- **Skill Gap Analysis**: Visual heatmap showing skill strengths and gaps
- **Calendar**: Placement deadline and event calendar

## Tech Stack

- **React.js** (Functional Components)
- **React Router v6+**
- **Tailwind CSS**
- **Lucide React** (Icons)
- **Vite** (Build Tool)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Sidebar, Footer, AppLayout
│   └── ui/              # Reusable UI components (Card, Badge, etc.)
├── pages/               # All page components
├── context/             # React Context for global state
├── data/                # Mock data
├── App.jsx              # Main app component with routing
└── main.jsx             # Entry point
```

## Key Features

### Unique Differentiators

- **Placement Probability Engine**: AI-powered probability calculations
- **Company Pattern Intelligence**: Hiring pattern analysis
- **Real-Time Competition Meter**: Applicant estimates
- **Skill Gap Heatmap**: Visual skill analysis
- **Next Best Action AI Panel**: Smart improvement suggestions
- **Alumni Pathway Visualizer**: Career path examples
- **Resume Truth Score**: Authenticity indicator
- **Interview Anxiety Prep Mode**: Confidence tracker
- **Placement Deadline Radar**: Priority alerts
- **Recruiter Interest Indicator**: Profile view tracking

## Notes

- This is a **STATIC UI ONLY** application
- Uses mock data (no backend integration)
- All handlers are placeholders
- Architecture is scalable for future backend integration

## License

© 2026 Smart Placement Intelligence System
Designed & Developed by Aniket Gajbhiye
