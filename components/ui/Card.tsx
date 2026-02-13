
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  action?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, title, subtitle, className = '', action }) => {
  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-5 ${className}`}>
      {(title || action) && (
        <div className="flex justify-between items-center mb-4">
          <div>
            {title && <h3 className="text-lg font-semibold text-slate-800 leading-tight">{title}</h3>}
            {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};
