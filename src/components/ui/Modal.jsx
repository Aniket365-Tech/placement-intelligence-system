import React from 'react';
import { X } from 'lucide-react';

export const Modal = ({ isOpen, onClose, title, children, className = '' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className={`bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex justify-between items-center p-6 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-800">{title}</h2>
            <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-lg transition-colors">
              <X size={20} className="text-slate-500" />
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};
