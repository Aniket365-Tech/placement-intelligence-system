import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Search, Star, MessageSquare, Filter } from 'lucide-react';
import { interviewExperiences } from '../data/mockData';

const InterviewExperiences = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [roundFilter, setRoundFilter] = useState('All');

  const filteredExperiences = interviewExperiences.filter(exp => {
    const matchesSearch = exp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         exp.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRound = roundFilter === 'All' || exp.rounds.toString() === roundFilter;
    return matchesSearch && matchesRound;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <Star 
        key={idx} 
        size={14} 
        className={idx < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-300'} 
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Interview Experiences</h2>
          <p className="text-slate-500">Learn from real interview experiences shared by peers.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search by company or role..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-sm shadow-sm"
          />
        </div>
        <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200">
          <Filter size={18} className="text-slate-400" />
          {['All', '2', '3', '4', '5+'].map(round => (
            <button
              key={round}
              onClick={() => setRoundFilter(round)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                roundFilter === round ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              {round === 'All' ? 'All Rounds' : `${round} Rounds`}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredExperiences.map(exp => (
          <Card key={exp.id} className="hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{exp.company}</h3>
                <p className="text-sm text-slate-500">{exp.role}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 mb-1">
                  {renderStars(exp.difficulty)}
                </div>
                <p className="text-xs text-slate-500">Difficulty</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <Badge variant="primary">{exp.rounds} Rounds</Badge>
              <Badge variant="secondary">{exp.date}</Badge>
            </div>

            <div className="mb-4">
              <p className="text-xs font-bold text-slate-400 uppercase mb-2">Interview Questions</p>
              <ul className="space-y-2">
                {exp.questions.map((q, idx) => (
                  <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-start gap-2 mb-2">
                <MessageSquare size={18} className="text-blue-600 mt-0.5" />
                <p className="text-xs font-bold text-blue-800 uppercase">Preparation Tips</p>
              </div>
              <p className="text-sm text-blue-900 leading-relaxed">{exp.tips}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InterviewExperiences;
