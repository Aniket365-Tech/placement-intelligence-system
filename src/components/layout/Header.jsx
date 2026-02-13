import React from 'react';
import { Search, Bell, Menu, User, LogOut, Settings as SettingsIcon } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { setSidebarOpen, notificationsCount } = useAppContext();

  return (
    <header className="sticky top-0 z-40 w-full glass border-b border-slate-200">
      <div className="flex items-center justify-between px-4 md:px-6 h-16">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 text-slate-500 hover:text-slate-800 md:hidden"
          >
            <Menu size={20} />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 hidden sm:block">
              Smart Placement Intelligence
            </h1>
          </Link>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="relative hidden md:block w-64 xl:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search companies, skills, roadmaps..." 
              className="w-full bg-slate-100/50 border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-blue-500/20 text-sm"
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="relative p-2 text-slate-500 hover:text-blue-600 transition-colors">
              <Bell size={20} />
              {notificationsCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">
                  {notificationsCount}
                </span>
              )}
            </button>
            
            <div className="group relative">
              <button className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <img 
                  src="https://picsum.photos/32/32?random=1" 
                  alt="User" 
                  className="w-8 h-8 rounded-full border border-slate-200" 
                />
                <div className="hidden lg:block text-left">
                  <p className="text-xs font-semibold text-slate-800">Aniket G.</p>
                  <p className="text-[10px] text-slate-500 font-medium">CSE | Final Year</p>
                </div>
              </button>
              
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-1">
                <Link to="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  <User size={16} /> My Profile
                </Link>
                <Link to="/settings" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  <SettingsIcon size={16} /> Settings
                </Link>
                <hr className="my-1 border-slate-100" />
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 w-full text-left">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
