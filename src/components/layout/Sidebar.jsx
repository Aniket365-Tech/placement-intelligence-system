import React from 'react';
import { 
  LayoutDashboard, 
  UserCircle, 
  FileSearch, 
  GraduationCap, 
  Target, 
  Map, 
  Briefcase, 
  ClipboardList, 
  MessageSquare, 
  History, 
  Trophy, 
  Bell, 
  Settings, 
  X,
  Zap,
  ChevronRight
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

export const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useAppContext();

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'My Profile', icon: UserCircle, path: '/profile' },
    { name: 'Resume Analyzer', icon: FileSearch, path: '/resume' },
    { name: 'Skill Assessment', icon: GraduationCap, path: '/assessment' },
    { name: 'Readiness Score', icon: Target, path: '/readiness' },
    { name: 'My Placement Roadmap', icon: Map, path: '/roadmap' },
    { name: 'Job Opportunities', icon: Briefcase, path: '/jobs' },
    { name: 'My Applications', icon: ClipboardList, path: '/applications' },
    { name: 'Discussion Hub', icon: MessageSquare, path: '/discussion' },
    { name: 'Interview Experiences', icon: History, path: '/interview-experiences' },
    { name: 'Leaderboard', icon: Trophy, path: '/leaderboard' },
    { name: 'Notifications', icon: Bell, path: '/notifications' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  const activeStyles = "bg-blue-600 text-white shadow-md shadow-blue-200";
  const inactiveStyles = "text-slate-600 hover:bg-slate-100 hover:text-slate-900";

  return (
    <>
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-6 border-b border-slate-100">
            <span className="font-bold text-slate-800 text-xl tracking-tight">SPIS <span className="text-blue-600">v2.0</span></span>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-500 p-1">
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-hide">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => window.innerWidth < 1024 && setSidebarOpen(false)}
                className={({ isActive }) => `
                  flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all group
                  ${isActive ? activeStyles : inactiveStyles}
                `}
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <item.icon 
                        size={20} 
                        className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'} 
                      />
                      <span>{item.name}</span>
                    </div>
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-100">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
                  <Zap size={16} />
                </div>
                <span className="text-xs font-bold text-slate-800">PRO FEATURE</span>
              </div>
              <p className="text-[10px] text-slate-500 mb-3 leading-relaxed">Unlock detailed company pattern intelligence and alumni networks.</p>
              <button className="w-full py-2 bg-slate-800 text-white rounded-lg text-xs font-semibold hover:bg-slate-900 transition-colors">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
