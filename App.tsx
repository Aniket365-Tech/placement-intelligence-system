
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext';
import { AppLayout } from './components/layout/AppLayout';

// Lazy load pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const MyProfile = lazy(() => import('./pages/MyProfile'));
const ResumeAnalyzer = lazy(() => import('./pages/ResumeAnalyzer'));
const Jobs = lazy(() => import('./pages/Jobs'));
const Roadmap = lazy(() => import('./pages/Roadmap'));
const Login = lazy(() => import('./pages/Login'));

// Basic Page Components for the remaining routes
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="p-6">
    <h2 className="text-2xl font-bold text-slate-800 mb-4">{title}</h2>
    <div className="bg-white p-12 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl">⚡</span>
      </div>
      <p className="text-center max-w-sm">This module is currently processing live placement data. Check back in a few moments.</p>
    </div>
  </div>
);

const AppContent: React.FC = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <Router>
      <Suspense fallback={
        <div className="h-screen w-screen flex items-center justify-center bg-slate-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="text-sm font-bold text-slate-500 animate-pulse uppercase tracking-widest">Compiling Intelligence...</p>
          </div>
        </div>
      }>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<PlaceholderPage title="Register Student" />} />
          
          <Route element={isLoggedIn ? <AppLayout /> : <Navigate to="/login" />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="resume" element={<ResumeAnalyzer />} />
            <Route path="assessment" element={<PlaceholderPage title="Skill Assessment" />} />
            <Route path="readiness" element={<PlaceholderPage title="Readiness Score" />} />
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="applications" element={<PlaceholderPage title="My Applications" />} />
            <Route path="discussion" element={<PlaceholderPage title="Discussion Hub" />} />
            <Route path="interview-experiences" element={<PlaceholderPage title="Interview Experiences" />} />
            <Route path="leaderboard" element={<PlaceholderPage title="Leaderboard" />} />
            <Route path="notifications" element={<PlaceholderPage title="Notifications" />} />
            <Route path="settings" element={<PlaceholderPage title="Settings" />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
