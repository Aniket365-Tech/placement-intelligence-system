import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Table } from '../components/ui/Table';
import { Clock, Target, TrendingUp, BookOpen, Play, CheckCircle2 } from 'lucide-react';
import { assessments } from '../data/mockData';

const SkillAssessment = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    { id: 'sde', name: 'Software Development Engineer', difficulty: 'Medium', questions: 30, duration: 60 },
    { id: 'frontend', name: 'Frontend Developer', difficulty: 'Easy', questions: 25, duration: 45 },
    { id: 'backend', name: 'Backend Developer', difficulty: 'Hard', questions: 35, duration: 90 },
    { id: 'fullstack', name: 'Full Stack Developer', difficulty: 'Hard', questions: 40, duration: 120 }
  ];

  const scoreHistory = [
    { date: '2026-02-10', assessment: 'DSA Fundamentals', score: 85, role: 'SDE' },
    { date: '2026-01-20', assessment: 'Frontend Development', score: 92, role: 'Frontend' },
    { date: '2026-01-15', assessment: 'System Design Basics', score: 78, role: 'SDE-2' },
    { date: '2025-12-20', assessment: 'Backend Development', score: 88, role: 'Backend' }
  ];

  const radarData = [
    { skill: 'Algorithms', score: 85 },
    { skill: 'Data Structures', score: 90 },
    { skill: 'System Design', score: 65 },
    { skill: 'Database', score: 80 },
    { skill: 'Networking', score: 70 },
    { skill: 'OOP', score: 88 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Skill Assessment</h2>
          <p className="text-slate-500">Test your technical skills and identify areas for improvement.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roles.map(role => (
          <Card key={role.id} className="cursor-pointer hover:shadow-lg transition-all" onClick={() => setSelectedRole(role)}>
            <div className="flex items-center justify-between mb-4">
              <Badge variant={role.difficulty === 'Hard' ? 'error' : role.difficulty === 'Medium' ? 'warning' : 'success'}>
                {role.difficulty}
              </Badge>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">{role.name}</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Target size={14} /> {role.questions} Questions
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} /> {role.duration} Minutes
              </div>
            </div>
            <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Play size={16} /> Start Assessment
            </button>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Upcoming Assessments">
            <div className="space-y-4">
              {assessments.filter(a => !a.completed).map(assessment => (
                <div key={assessment.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{assessment.title}</h4>
                      <p className="text-xs text-slate-500">{assessment.role}</p>
                    </div>
                    <Badge variant={assessment.difficulty === 'Hard' ? 'error' : assessment.difficulty === 'Medium' ? 'warning' : 'success'}>
                      {assessment.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock size={14} /> {assessment.duration} min
                    </div>
                    <div className="flex items-center gap-1">
                      <Target size={14} /> {assessment.questions} questions
                    </div>
                  </div>
                  <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors">
                    Start Now
                  </button>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Skill Radar Chart">
            <div className="space-y-4">
              {radarData.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">{item.skill}</span>
                    <span className="text-sm font-bold text-blue-600">{item.score}%</span>
                  </div>
                  <ProgressBar value={item.score} color="bg-blue-600" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Score History">
            <div className="space-y-3">
              {scoreHistory.map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-800">{item.assessment}</span>
                    <span className="text-sm font-bold text-emerald-600">{item.score}%</span>
                  </div>
                  <p className="text-[10px] text-slate-500">{item.date} • {item.role}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Learning Resources">
            <div className="space-y-3">
              {[
                { title: 'LeetCode Premium', type: 'Practice', icon: '📚' },
                { title: 'System Design Primer', type: 'Course', icon: '🎓' },
                { title: 'Grokking Algorithms', type: 'Book', icon: '📖' },
                { title: 'Frontend Masters', type: 'Course', icon: '🎥' }
              ].map((resource, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:bg-blue-50 transition-colors cursor-pointer">
                  <span className="text-2xl">{resource.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">{resource.title}</p>
                    <p className="text-xs text-slate-500">{resource.type}</p>
                  </div>
                  <BookOpen size={16} className="text-slate-400" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillAssessment;
