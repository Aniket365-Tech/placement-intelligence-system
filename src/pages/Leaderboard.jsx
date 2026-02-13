import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Trophy, TrendingUp, Award, Crown } from 'lucide-react';
import { leaderboardData } from '../data/mockData';

const Leaderboard = () => {
  const [selectedBranch, setSelectedBranch] = useState('All');

  const branches = ['All', 'CSE', 'IT', 'ECE', 'EEE'];
  const filteredData = selectedBranch === 'All' 
    ? leaderboardData 
    : leaderboardData.filter(item => item.branch === selectedBranch);

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown className="text-amber-500" size={24} />;
    if (rank === 2) return <Award className="text-slate-400" size={24} />;
    if (rank === 3) return <Award className="text-amber-600" size={24} />;
    return <span className="text-lg font-bold text-slate-400">#{rank}</span>;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Leaderboard</h2>
          <p className="text-slate-500">See how you rank among your peers.</p>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 w-fit">
        {branches.map(branch => (
          <button
            key={branch}
            onClick={() => setSelectedBranch(branch)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedBranch === branch ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            {branch}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="space-y-4">
              {filteredData.map((item, idx) => (
                <div 
                  key={idx}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                    item.rank <= 3 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200' 
                      : 'bg-slate-50 border-slate-100 hover:bg-white'
                  }`}
                >
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    {getRankIcon(item.rank)}
                  </div>
                  <img 
                    src={item.avatar} 
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-slate-800">{item.name}</h3>
                      {item.rank <= 3 && (
                        <Badge variant={item.rank === 1 ? 'warning' : 'secondary'}>
                          Top {item.rank}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span>{item.branch}</span>
                      <span className="flex items-center gap-1">
                        <TrendingUp size={14} className="text-emerald-600" />
                        {item.growth}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-blue-600">{item.score.toLocaleString()}</p>
                    <p className="text-xs text-slate-500">Points</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Your Ranking" className="text-center">
            <div className="py-6">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="text-blue-600" size={40} />
              </div>
              <p className="text-4xl font-bold text-slate-800 mb-2">#2</p>
              <p className="text-sm text-slate-500 mb-4">in {selectedBranch === 'All' ? 'Overall' : selectedBranch}</p>
              <div className="flex items-center justify-center gap-2 text-emerald-600">
                <TrendingUp size={16} />
                <span className="text-sm font-bold">+5% Weekly Growth</span>
              </div>
            </div>
          </Card>

          <Card title="Peer Velocity Index">
            <div className="space-y-3">
              {[
                { name: 'Sanjana Reddy', velocity: '+12%', trend: 'up' },
                { name: 'You', velocity: '+5%', trend: 'up' },
                { name: 'Rohit Sharma', velocity: '+8%', trend: 'up' }
              ].map((peer, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                  <span className="text-sm font-medium text-slate-700">{peer.name}</span>
                  <div className="flex items-center gap-1">
                    <TrendingUp size={14} className="text-emerald-600" />
                    <span className="text-sm font-bold text-emerald-600">{peer.velocity}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Weekly Growth Indicators">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Your Growth</span>
                <span className="text-sm font-bold text-emerald-600">+5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Average Growth</span>
                <span className="text-sm font-bold text-slate-600">+7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Top Performer</span>
                <span className="text-sm font-bold text-blue-600">+12%</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
