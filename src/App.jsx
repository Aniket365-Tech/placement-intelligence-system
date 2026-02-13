import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext';
import { AppLayout } from './components/layout/AppLayout';

const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const MyProfile = lazy(() => import('./pages/MyProfile'));
const ResumeAnalyzer = lazy(() => import('./pages/ResumeAnalyzer'));
const SkillAssessment = lazy(() => import('./pages/SkillAssessment'));
const ReadinessScore = lazy(() => import('./pages/ReadinessScore'));
const Roadmap = lazy(() => import('./pages/Roadmap'));
const Jobs = lazy(() => import('./pages/Jobs'));
const Applications = lazy(() => import('./pages/Applications'));
const DiscussionHub = lazy(() => import('./pages/DiscussionHub'));
const InterviewExperiences = lazy(() => import('./pages/InterviewExperiences'));
const Leaderboard = lazy(() => import('./pages/Leaderboard'));
const Notifications = lazy(() => import('./pages/Notifications'));
const Settings = lazy(() => import('./pages/Settings'));
const MockInterview = lazy(() => import('./pages/MockInterview'));
const SkillGap = lazy(() => import('./pages/SkillGap'));
const Calendar = lazy(() => import('./pages/Calendar'));

const AppContent = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <Router>
      <Suspense fallback={
        <div className="h-screen w-screen flex items-center justify-center bg-slate-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="text-sm font-bold text-slate-500 animate-pulse uppercase tracking-widest">Loading...</p>
          </div>
        </div>
      }>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route element={isLoggedIn ? <AppLayout /> : <Navigate to="/login" />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="resume" element={<ResumeAnalyzer />} />
            <Route path="assessment" element={<SkillAssessment />} />
            <Route path="readiness" element={<ReadinessScore />} />
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="applications" element={<Applications />} />
            <Route path="discussion" element={<DiscussionHub />} />
            <Route path="interview-experiences" element={<InterviewExperiences />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="settings" element={<Settings />} />
            <Route path="mock-interview" element={<MockInterview />} />
            <Route path="skill-gap" element={<SkillGap />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
