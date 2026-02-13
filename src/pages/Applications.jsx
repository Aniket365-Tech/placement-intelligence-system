import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Table } from '../components/ui/Table';
import { CheckCircle2, Clock, XCircle, AlertCircle, TrendingUp, Calendar } from 'lucide-react';
import { applications } from '../data/mockData';

const Applications = () => {
  const getStatusBadge = (status) => {
    const variants = {
      'Applied': { variant: 'secondary', icon: Clock },
      'Shortlisted': { variant: 'primary', icon: CheckCircle2 },
      'Interview': { variant: 'warning', icon: AlertCircle },
      'Selected': { variant: 'success', icon: CheckCircle2 },
      'Rejected': { variant: 'error', icon: XCircle }
    };
    const config = variants[status] || variants['Applied'];
    const Icon = config.icon;
    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon size={12} /> {status}
      </Badge>
    );
  };

  const tableHeaders = ['Company', 'Role', 'Status', 'Applied Date', 'Next Step', 'Actions'];
  const tableRows = applications.map(app => [
    app.company,
    app.role,
    getStatusBadge(app.status),
    app.dateApplied,
    app.nextStep,
    <button key={app.id} className="text-blue-600 text-sm font-semibold hover:underline">View Details</button>
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">My Applications</h2>
          <p className="text-slate-500">Track your application status and recruitment timeline.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <Card title="Application Status">
            <Table headers={tableHeaders} rows={tableRows} />
          </Card>

          {applications.map(app => (
            <Card key={app.id} title={`${app.company} - ${app.role}`}>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Status</p>
                    <div className="mt-1">{getStatusBadge(app.status)}</div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Applied On</p>
                    <p className="text-sm font-bold text-slate-800">{app.dateApplied}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-800 mb-4">Recruitment Timeline</p>
                  <div className="space-y-4">
                    {app.timeline.map((stage, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-sm ${
                            stage.completed ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'
                          }`}>
                            {stage.completed ? <CheckCircle2 size={16} /> : <Clock size={16} />}
                          </div>
                          {idx !== app.timeline.length - 1 && (
                            <div className={`w-0.5 h-8 ${stage.completed ? 'bg-emerald-200' : 'bg-slate-100'}`}></div>
                          )}
                        </div>
                        <div className="flex-1 pb-4">
                          <div className="flex items-center justify-between mb-1">
                            <p className={`text-sm font-medium ${stage.completed ? 'text-slate-800' : 'text-slate-500'}`}>
                              {stage.stage}
                            </p>
                            {stage.date && (
                              <span className="text-xs text-slate-500">{stage.date}</span>
                            )}
                          </div>
                          {stage.completed && (
                            <p className="text-xs text-emerald-600">Completed</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-blue-600" size={18} />
                    <p className="text-sm font-bold text-blue-800">Next Step Predictor</p>
                  </div>
                  <p className="text-sm text-blue-700">{app.nextStep}</p>
                  <p className="text-xs text-blue-600 mt-2">Based on your application timeline and company hiring patterns</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card title="Application Stats">
            <div className="space-y-4">
              <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-3xl font-bold text-blue-600">{applications.length}</p>
                <p className="text-xs text-slate-500 mt-1">Total Applications</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">In Progress</span>
                  <span className="font-bold text-blue-600">2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Selected</span>
                  <span className="font-bold text-emerald-600">1</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Rejected</span>
                  <span className="font-bold text-rose-600">0</span>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Quick Actions">
            <div className="space-y-2">
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
                Apply to New Job
              </button>
              <button className="w-full py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors">
                View All Jobs
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Applications;
