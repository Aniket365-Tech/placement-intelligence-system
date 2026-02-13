import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { CircularScore } from '../components/ui/CircularScore';
import { TrendingUp, TrendingDown, Target, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';
import { readinessData, jobsList } from '../data/mockData';

const ReadinessScore = () => {
  const components = [
    { label: 'CGPA', value: readinessData.cgpa, weight: 20 },
    { label: 'Skills', value: readinessData.skills, weight: 25 },
    { label: 'Resume', value: readinessData.resume, weight: 15 },
    { label: 'Assessments', value: readinessData.assessments, weight: 20 },
    { label: 'Projects', value: readinessData.projects, weight: 10 },
    { label: 'Mock Interviews', value: readinessData.mockInterviews, weight: 10 }
  ];

  const jobReadiness = [
    { company: 'Google', role: 'SDE-1', readiness: 88, match: 92 },
    { company: 'Microsoft', role: 'SWE', readiness: 82, match: 85 },
    { company: 'TCS Digital', role: 'Systems Engineer', readiness: 95, match: 98 },
    { company: 'Amazon', role: 'SDE-1', readiness: 79, match: 78 }
  ];

  const suggestions = [
    { text: 'Improve System Design knowledge by practicing distributed systems', priority: 'High', impact: '+8%' },
    { text: 'Complete 2 more mock interviews to boost confidence', priority: 'Medium', impact: '+5%' },
    { text: 'Add 1 more project showcasing cloud technologies', priority: 'Medium', impact: '+3%' },
    { text: 'Update resume with latest internship experience', priority: 'Low', impact: '+2%' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Readiness Score</h2>
          <p className="text-slate-500">Comprehensive analysis of your placement readiness.</p>
        </div>
        <Badge variant={readinessData.overall >= 80 ? 'success' : readinessData.overall >= 60 ? 'warning' : 'error'} className="px-4 py-2">
          {readinessData.overall >= 80 ? 'Ready to Apply' : readinessData.overall >= 60 ? 'Almost Ready' : 'Needs Improvement'}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex flex-col items-center py-8">
          <CircularScore score={readinessData.overall} size={180} strokeWidth={12} label="Overall Readiness" />
          <div className="mt-6 flex items-center gap-2">
            <TrendingUp className="text-emerald-600" size={20} />
            <span className="text-sm font-bold text-emerald-600">+5% from last month</span>
          </div>
        </Card>

        <Card title="Component Breakdown" className="md:col-span-2">
          <div className="space-y-4">
            {components.map((comp, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-700">{comp.label}</span>
                    <span className="text-xs text-slate-500">({comp.weight}%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-800">{comp.value}%</span>
                    {comp.value >= 80 ? (
                      <CheckCircle2 size={16} className="text-emerald-500" />
                    ) : comp.value >= 60 ? (
                      <AlertCircle size={16} className="text-amber-500" />
                    ) : (
                      <AlertCircle size={16} className="text-rose-500" />
                    )}
                  </div>
                </div>
                <ProgressBar 
                  value={comp.value} 
                  color={comp.value >= 80 ? 'bg-emerald-500' : comp.value >= 60 ? 'bg-amber-500' : 'bg-rose-500'} 
                />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Job-wise Readiness">
            <div className="space-y-4">
              {jobReadiness.map((job, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{job.company}</h4>
                      <p className="text-xs text-slate-500">{job.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">{job.readiness}%</p>
                      <p className="text-xs text-slate-500">Readiness</p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600">Match Score</span>
                      <span className="font-bold text-emerald-600">{job.match}%</span>
                    </div>
                    <ProgressBar value={job.match} color="bg-emerald-500" />
                  </div>
                  <div className="flex gap-2">
                    <Badge variant={job.readiness >= 85 ? 'success' : job.readiness >= 75 ? 'warning' : 'error'}>
                      {job.readiness >= 85 ? 'Ready' : job.readiness >= 75 ? 'Almost Ready' : 'Needs Work'}
                    </Badge>
                    <Badge variant="outline">{job.match}% Match</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Contribution Analysis">
            <div className="space-y-4">
              {readinessData.breakdown.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">{item.label}</span>
                    <span className="text-sm font-bold text-slate-800">{item.value}%</span>
                  </div>
                  <ProgressBar value={item.value} color="bg-blue-600" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Improvement Suggestions">
            <div className="space-y-3">
              {suggestions.map((suggestion, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={suggestion.priority === 'High' ? 'error' : suggestion.priority === 'Medium' ? 'warning' : 'secondary'}>
                      {suggestion.priority}
                    </Badge>
                    <span className="text-xs font-bold text-emerald-600">{suggestion.impact}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{suggestion.text}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Quick Actions">
            <div className="space-y-2">
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Target size={16} /> Take Skill Assessment
              </button>
              <button className="w-full py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                <Lightbulb size={16} /> View Improvement Plan
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReadinessScore;
