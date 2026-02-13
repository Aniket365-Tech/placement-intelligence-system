import React from 'react';

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 py-6 px-6 bg-white/50">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">
          &copy; 2026 <span className="font-semibold text-slate-700">Smart Placement Intelligence System</span>. 
          Designed & Developed by <span className="font-semibold text-slate-700">Aniket Gajbhiye</span>
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs font-medium text-slate-600 hover:text-blue-600">Help Center</a>
          <a href="#" className="text-xs font-medium text-slate-600 hover:text-blue-600">FAQ</a>
          <a href="#" className="text-xs font-medium text-slate-600 hover:text-blue-600">Contact Support</a>
        </div>
      </div>
    </footer>
  );
};
