import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Rocket, CheckCircle2, Circle, Mic, Video, Clock, TrendingUp } from 'lucide-react';

const MockInterview = () => {
  const [confidenceScore, setConfidenceScore] = useState(8.5);
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'DSA Fundamentals Ready', checked: true },
    { id: 2, text: 'Behavioral Intro Needs Polish', checked: false },
    { id: 3, text: 'System Design Concepts Reviewed', checked: true },
    { id: 4, text: 'Mock Interview Scheduled', checked: false },
    { id: 5, text: 'Resume Points Memorized', checked: true }
  ]);

  const toggleChecklist = (id) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const completedCount = checklist.filter(item => item.checked).length;
  const progress = (completedCount / checklist.length) * 100;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Mock Interview Prep</h2>
          <p className="text-slate-500">Build confidence and prepare for real interviews.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 space-y-6">
          <Card title="Interview Anxiety Prep Mode" className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none">
            <div className="flex flex-col items-center py-6">
              <Rocket className="mb-4 text-blue-400" size={48} />
              <p className="text-3xl font-bold mb-2">Confidence Score</p>
              <p className="text-5xl font-bold text-blue-400 mb-4">{confidenceScore}/10</p>
              <ProgressBar value={(confidenceScore / 10) * 100} color="bg-blue-500" />
              <div className="mt-6 flex items-center gap-2">
                <TrendingUp size={18} />
                <span className="text-sm">+1.2 from last week</span>
              </div>
            </div>
          </Card>

          <Card title="Preparation Checklist">
            <div className="space-y-3">
              {checklist.map(item => (
                <div 
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:bg-blue-50 cursor-pointer transition-colors"
                >
                  {item.checked ? (
                    <CheckCircle2 size={20} className="text-emerald-500" />
                  ) : (
                    <Circle size={20} className="text-slate-300" />
                  )}
                  <span className={`text-sm flex-1 ${item.checked ? 'text-slate-500 line-through' : 'text-slate-800 font-medium'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <ProgressBar value={progress} label={`${completedCount}/${checklist.length} Completed`} color="bg-emerald-500" />
            </div>
          </Card>

          <Card title="Practice Session">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200 hover:bg-blue-100 transition-colors text-center">
                <Video className="mx-auto mb-2 text-blue-600" size={32} />
                <p className="text-sm font-bold text-slate-800">Video Interview</p>
                <p className="text-xs text-slate-500 mt-1">Practice with video recording</p>
              </button>
              <button className="p-6 bg-emerald-50 rounded-xl border-2 border-emerald-200 hover:bg-emerald-100 transition-colors text-center">
                <Mic className="mx-auto mb-2 text-emerald-600" size={32} />
                <p className="text-sm font-bold text-slate-800">Audio Only</p>
                <p className="text-xs text-slate-500 mt-1">Practice speaking skills</p>
              </button>
            </div>
            <button className="w-full mt-4 py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition-colors">
              Start Practice Session
            </button>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Quick Stats">
            <div className="space-y-4">
              <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-3xl font-bold text-blue-600">12</p>
                <p className="text-xs text-slate-500 mt-1">Mock Interviews</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Average Score</span>
                  <span className="font-bold text-emerald-600">8.2/10</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Best Score</span>
                  <span className="font-bold text-blue-600">9.5/10</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">This Week</span>
                  <span className="font-bold text-slate-800">3 sessions</span>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Upcoming Sessions">
            <div className="space-y-3">
              {[
                { company: 'Google', date: 'Feb 18, 2:00 PM', type: 'Technical' },
                { company: 'Microsoft', date: 'Feb 20, 10:00 AM', type: 'Behavioral' }
              ].map((session, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-slate-800">{session.company}</span>
                    <Badge variant="primary">{session.type}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock size={12} />
                    {session.date}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MockInterview;
