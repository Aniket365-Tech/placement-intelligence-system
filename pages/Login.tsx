
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, ChevronRight, GraduationCap, ShieldCheck } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Login: React.FC = () => {
  const [role, setRole] = useState<'student' | 'admin'>('student');
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAppContext();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-blue-200">
            <span className="text-white text-3xl font-black">S</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">SPIS <span className="text-blue-600">v2.0</span></h1>
          <p className="text-slate-500 font-medium">Smart Placement Intelligence System</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 overflow-hidden">
          <div className="flex p-1 bg-slate-100 m-4 rounded-xl">
             <button 
               onClick={() => setRole('student')}
               className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${role === 'student' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
               <GraduationCap size={18} /> Student
             </button>
             <button 
               onClick={() => setRole('admin')}
               className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${role === 'admin' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
               <ShieldCheck size={18} /> TPO Admin
             </button>
          </div>

          <form onSubmit={handleLogin} className="p-8 pt-4 space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Academic Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  required
                  placeholder="name@university.edu"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-medium" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs font-bold text-blue-600 hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-medium" 
                />
              </div>
            </div>

            <div className="flex items-center gap-2 ml-1">
               <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" id="remember" />
               <label htmlFor="remember" className="text-xs font-medium text-slate-600">Keep me logged in for 30 days</label>
            </div>

            <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2 group">
              Sign In to Dashboard
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
             <p className="text-sm text-slate-500">
               New to the system? <Link to="/register" className="text-blue-600 font-bold hover:underline">Create Academic Account</Link>
             </p>
          </div>
        </div>
        
        <p className="text-center text-xs text-slate-400 mt-8">
          By signing in, you agree to the SPIS Academic Data Governance Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
