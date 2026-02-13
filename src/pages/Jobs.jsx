import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Search, Filter, Briefcase, MapPin, DollarSign, Calendar, Flame, Target, Users, Bookmark, BookmarkCheck } from 'lucide-react';
import { jobsList } from '../data/mockData';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const [filter, setFilter] = useState('All');
  const [savedJobs, setSavedJobs] = useState(['1', '3']);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobsList.filter(job => {
    const matchesFilter = filter === 'All' || job.type === filter;
    const matchesSearch = job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.requiredSkills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const toggleSave = (jobId) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Job Opportunities</h2>
          <p className="text-slate-500">Curated roles based on your verified skill profile.</p>
        </div>
        <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200">
          {['All', 'Product', 'Service', 'Mass'].map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === cat ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card title="Quick Filters">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase mb-3">Min. Package (LPA)</p>
                <input type="range" className="w-full accent-blue-600" min="3" max="50" defaultValue="10" />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>3 LPA</span>
                  <span>50 LPA</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase mb-3">Location</p>
                {['Bangalore', 'Pune', 'Hyderabad', 'Remote'].map(loc => (
                  <label key={loc} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                    {loc}
                  </label>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase mb-3">Branch</p>
                {['CSE', 'IT', 'ECE', 'EEE'].map(branch => (
                  <label key={branch} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                    {branch}
                  </label>
                ))}
              </div>
              <button className="w-full py-2 bg-slate-100 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-200">Reset Filters</button>
            </div>
          </Card>

          <Card title="Deadline Radar" className="bg-rose-50 border-rose-100">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="bg-rose-500 text-white p-2 rounded-lg shrink-0">
                  <Flame size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-rose-800">Amazon SDE-1</p>
                  <p className="text-[10px] text-rose-600">Expires in 12 hours</p>
                </div>
              </div>
              <button className="w-full py-2 bg-rose-600 text-white text-xs font-bold rounded-lg hover:bg-rose-700">Apply Now</button>
            </div>
          </Card>
        </div>

        <div className="md:col-span-3 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by company name, technology or role..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-sm shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map(job => (
              <Card key={job.id} className="group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100" />
                    <div>
                      <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{job.role}</h4>
                      <p className="text-sm text-slate-500 font-medium">{job.company}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleSave(job.id)}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    {savedJobs.includes(job.id) ? (
                      <BookmarkCheck size={18} className="text-blue-600" />
                    ) : (
                      <Bookmark size={18} className="text-slate-400" />
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <DollarSign size={14} className="text-slate-400" /> <span>{job.package}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin size={14} className="text-slate-400" /> <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Briefcase size={14} className="text-slate-400" /> <span>{job.type} Based</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar size={14} className="text-slate-400" /> <span>Due: {job.deadline}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-bold text-slate-400 mb-2">Required Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {job.requiredSkills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                  <div className="flex justify-between items-end mb-2">
                    <div className="flex items-center gap-1.5">
                      <Target size={14} className="text-blue-600" />
                      <span className="text-xs font-bold text-slate-800">Your Fit Score</span>
                    </div>
                    <span className="text-sm font-bold text-blue-600">{job.matchPercentage}%</span>
                  </div>
                  <ProgressBar value={job.matchPercentage} color="bg-blue-600" />
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Readiness: {job.readinessScore}%</span>
                    <Badge variant={job.competitionLevel === 'High' ? 'error' : job.competitionLevel === 'Medium' ? 'warning' : 'success'} className="flex items-center gap-1">
                      <Users size={10} /> {job.competitionLevel} Comp.
                    </Badge>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                    Apply Now
                  </button>
                  <button className="px-4 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                    <Target size={18} className="text-slate-400" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
