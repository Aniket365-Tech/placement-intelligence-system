import React from 'react';

export const ProgressBar = ({ 
  value, 
  label, 
  className = '', 
  color = 'bg-blue-600',
  showValue = false 
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));
  
  return (
    <div className={`w-full ${className}`}>
      {(label || showValue) && (
        <div className="flex justify-between text-sm mb-1.5 font-medium text-slate-700">
          <span>{label}</span>
          {showValue && <span>{clampedValue}%</span>}
        </div>
      )}
      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-500 ease-out ${color}`} 
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
};
