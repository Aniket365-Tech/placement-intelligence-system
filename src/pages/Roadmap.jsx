import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Target, CheckCircle2, Clock, Map, ChevronRight, GraduationCap, Briefcase, Download } from 'lucide-react';
import { roadmapData, alumniPathways } from '../data/mockData';

const Roadmap = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">My Placement Roadmap</h2>
          <p className="text-slate-500">Your personalized path from campus to corporate.</p>
        </div>
        <button className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-900 flex items-center gap-2">
          <Download size={18} /> Download PDF Roadmap
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Map size={200} />
            </div>
            <div className="relative z-10 space-y-8">
              {roadmapData.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-md z-10 transition-transform group-hover:scale-110 ${
                      item.status === 'Completed' ? 'bg-emerald-500 text-white' : 
                      item.status === 'In Progress' ? 'bg-blue-600 text-white animate-pulse' : 
                      'bg-slate-200 text-slate-500'
                    }`}>
                      {item.status === 'Completed' ? <CheckCircle2 size={24} /> : <Target size={24} />}
                    </div>
                    {idx !== roadmapData.length - 1 && (
                      <div className={`w-1 h-full -mt-1 -mb-6 ${
                        item.status === 'Completed' ? 'bg-emerald-200' : 'bg-slate-100 border-dashed border-l-2'
                      }`}></div>
                    )}
                  </div>
                  <div className="flex-1 pb-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Week {item.week}</span>
                      <Badge variant={
                        item.status === 'Completed' ? 'success' : 
                        item.status === 'In Progress' ? 'primary' : 
                        'outline'
                      }>
                        {item.status}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">{item.task}</h4>
                    <div className="flex gap-4 mb-3">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <Clock size={14} /> Est. 12 Hours
                      </div>
                      <Badge variant="secondary">{item.type}</Badge>
                    </div>
                    {item.status === 'In Progress' && (
                      <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                        <p className="text-sm font-bold text-blue-800 mb-2">Current Daily Micro-tasks:</p>
                        <ul className="space-y-2">
                          {['Revise Object Oriented Analysis', 'Update LinkedIn Summary', 'Apply to 2 Summer Internships'].map((t, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-blue-700">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> {t}
                            </li>
                          ))}
                        </ul>
                        <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700">Continue Learning</button>
                      </div>
                    )}
                    {item.progress > 0 && item.status !== 'Completed' && (
                      <div className="mt-3">
                        <ProgressBar value={item.progress} color="bg-blue-600" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Alumni Pathway Visualizer">
            <div className="space-y-6">
              {alumniPathways.map((alumni, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 relative">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={alumni.avatar} className="w-8 h-8 rounded-full" alt={alumni.name} />
                    <div>
                      <p className="text-xs font-bold text-slate-800">{alumni.name}</p>
                      <p className="text-[10px] text-slate-500">{alumni.current}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-1 mb-3">
                    <div className="bg-white p-2 rounded-lg border border-slate-200 text-center flex-1">
                      <p className="text-[9px] text-slate-400 uppercase">Start</p>
                      <Badge variant="outline" className="text-[9px]">{alumni.start}</Badge>
                    </div>
                    <ChevronRight size={14} className="text-slate-300" />
                    <div className="bg-white p-2 rounded-lg border border-slate-200 text-center flex-1">
                      <p className="text-[9px] text-slate-400 uppercase">Goal</p>
                      <Badge variant="primary" className="text-[9px]">FAANG</Badge>
                    </div>
                  </div>
                  <div className="space-y-1 mb-3">
                    {alumni.path.map((step, i) => (
                      <div key={i} className="text-[10px] text-slate-600 flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        {step}
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 py-2 text-[10px] font-bold text-blue-600 uppercase tracking-wider hover:underline border border-blue-200 rounded-lg hover:bg-blue-50">
                    Copy This Pathway
                  </button>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Quick Stats">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-xs text-slate-500">Total Milestones</span>
                <span className="text-xs font-bold text-slate-800">12</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-xs text-slate-500">Completed</span>
                <span className="text-xs font-bold text-emerald-600">4</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-xs text-slate-500">In Progress</span>
                <span className="text-xs font-bold text-blue-600">1</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-xs text-slate-500">Weekly Consistency</span>
                <span className="text-xs font-bold text-blue-600">92%</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
