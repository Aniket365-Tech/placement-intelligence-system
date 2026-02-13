import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { TrendingUp, TrendingDown, Target, AlertCircle } from 'lucide-react';
import { skillGapData } from '../data/mockData';

const SkillGap = () => {
  const getHeatmapColor = (category) => {
    const colors = {
      strong: 'bg-emerald-500',
      moderate: 'bg-amber-500',
      weak: 'bg-orange-500',
      missing: 'bg-rose-500'
    };
    return colors[category] || 'bg-slate-300';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Skill Gap Analysis</h2>
          <p className="text-slate-500">Identify skills you need to strengthen for better placement opportunities.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Skill Gap Heatmap">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skillGapData.strong.map((skill, idx) => (
                <div key={idx} className="aspect-square bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-sm p-2 text-center shadow-lg">
                  {skill}
                </div>
              ))}
              {skillGapData.moderate.map((skill, idx) => (
                <div key={idx} className="aspect-square bg-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-sm p-2 text-center shadow-lg">
                  {skill}
                </div>
              ))}
              {skillGapData.weak.map((skill, idx) => (
                <div key={idx} className="aspect-square bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-sm p-2 text-center shadow-lg">
                  {skill}
                </div>
              ))}
              {skillGapData.missing.map((skill, idx) => (
                <div key={idx} className="aspect-square bg-rose-500 rounded-xl flex items-center justify-center text-white font-bold text-sm p-2 text-center shadow-lg">
                  {skill}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                <span className="text-xs text-slate-600">Strong</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-amber-500 rounded"></div>
                <span className="text-xs text-slate-600">Moderate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-xs text-slate-600">Weak</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-rose-500 rounded"></div>
                <span className="text-xs text-slate-600">Missing</span>
              </div>
            </div>
          </Card>

          <Card title="Detailed Skill Analysis">
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <TrendingUp className="text-emerald-600" size={16} />
                    Strong Skills
                  </h4>
                  <Badge variant="success">{skillGapData.strong.length} skills</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGapData.strong.map((skill, idx) => (
                    <Badge key={idx} variant="success" className="px-3 py-1.5">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <AlertCircle className="text-amber-600" size={16} />
                    Moderate Skills
                  </h4>
                  <Badge variant="warning">{skillGapData.moderate.length} skills</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGapData.moderate.map((skill, idx) => (
                    <Badge key={idx} variant="warning" className="px-3 py-1.5">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <TrendingDown className="text-orange-600" size={16} />
                    Weak Skills
                  </h4>
                  <Badge variant="error">{skillGapData.weak.length} skills</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGapData.weak.map((skill, idx) => (
                    <Badge key={idx} variant="error" className="px-3 py-1.5">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <AlertCircle className="text-rose-600" size={16} />
                    Missing Skills
                  </h4>
                  <Badge variant="error">{skillGapData.missing.length} skills</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGapData.missing.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="px-3 py-1.5 border-rose-300 text-rose-700">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card title="Improvement Recommendations">
            <div className="space-y-4">
              {[
                { skill: 'System Design', priority: 'High', action: 'Complete System Design Primer course', impact: '+15% readiness' },
                { skill: 'Docker', priority: 'High', action: 'Build 2 projects using Docker', impact: '+8% readiness' },
                { skill: 'AWS Advanced', priority: 'Medium', action: 'Get AWS Certified Solutions Architect', impact: '+12% readiness' },
                { skill: 'Kubernetes', priority: 'Medium', action: 'Complete Kubernetes basics tutorial', impact: '+6% readiness' }
              ].map((rec, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{rec.skill}</h4>
                      <p className="text-xs text-slate-600">{rec.action}</p>
                    </div>
                    <Badge variant={rec.priority === 'High' ? 'error' : 'warning'}>{rec.priority}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium">
                    <Target size={12} />
                    {rec.impact}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Skill Summary">
            <div className="space-y-4">
              <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <p className="text-3xl font-bold text-emerald-600">{skillGapData.strong.length}</p>
                <p className="text-xs text-slate-600 mt-1">Strong Skills</p>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-xl border border-amber-100">
                <p className="text-3xl font-bold text-amber-600">{skillGapData.moderate.length}</p>
                <p className="text-xs text-slate-600 mt-1">Moderate Skills</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-100">
                <p className="text-3xl font-bold text-orange-600">{skillGapData.weak.length}</p>
                <p className="text-xs text-slate-600 mt-1">Weak Skills</p>
              </div>
              <div className="text-center p-4 bg-rose-50 rounded-xl border border-rose-100">
                <p className="text-3xl font-bold text-rose-600">{skillGapData.missing.length}</p>
                <p className="text-xs text-slate-600 mt-1">Missing Skills</p>
              </div>
            </div>
          </Card>

          <Card title="Quick Actions">
            <div className="space-y-2">
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
                Take Skill Assessment
              </button>
              <button className="w-full py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors">
                View Learning Resources
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillGap;
