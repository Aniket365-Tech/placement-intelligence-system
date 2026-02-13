import React from 'react';

export const Table = ({ headers, rows, className = '' }) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200">
            {headers.map((header, idx) => (
              <th key={idx} className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="py-3 px-4 text-sm text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
