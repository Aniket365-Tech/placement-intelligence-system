import React from 'react';
import { Card } from '../components/ui/Card';
import { CircularScore } from '../components/ui/CircularScore';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Badge } from '../components/ui/Badge';
import { 
  TrendingUp, 
  Calendar, 
  AlertCircle, 
  BrainCircuit, 
  Rocket, 
  Users, 
  Timer,
  ArrowRight,
  Target,
  FileText,
  Activity,
  TrendingDown,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { readinessData, jobsList, weeklyProgress, placementProbability } from '../data/mockData';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Welcome back, Aniket! 👋</h2>
          <p className="text-slate-500">Your placement journey is at <span className="text-blue-600 font-semibold">82% maturity</span>. Keep pushing!</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="success" className="flex items-center gap-1.5 px-3 py-1">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            Active Placement Season
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Card className="flex items-center justify-center py-8">
          <CircularScore score={readinessData.overall} size={140} strokeWidth={10} />
        </Card>

        <Card title="Skill Gap Summary" className="lg:col-span-2">
          <div className="space-y-4">
            <ProgressBar label="System Design" value={45} showValue color="bg-amber-500" />
            <ProgressBar label="Competitive Programming" value={88} showValue color="bg-blue-600" />
            <ProgressBar label="Technical Communication" value={72} showValue color="bg-emerald-500" />
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Suggested Focus: High-level architectural patterns</span>
              <Link to="/skill-gap" className="text-xs text-blue-600 font-semibold flex items-center gap-1">View Heatmap <ArrowRight size={12} /></Link>
            </div>
          </div>
        </Card>

        <Card title="Placement Probability" subtitle="Company: Google" className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none">
          <div className="flex flex-col items-center py-2">
            <div className="text-4xl font-bold text-blue-400 mb-1">{placementProbability.google.probability}%</div>
            <p className="text-xs text-slate-400 font-medium mb-4 uppercase tracking-widest">Moderate Success Rate</p>
            <div className="w-full h-1.5 bg-slate-700 rounded-full mb-6">
              <div className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{ width: `${placementProbability.google.probability}%` }}></div>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="bg-slate-700/50 p-2 rounded-lg border border-slate-600/50 text-center">
                <p className="text-[10px] text-slate-400">Match</p>
                <p className="text-xs font-bold text-emerald-400">+{placementProbability.google.match}%</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded-lg border border-slate-600/50 text-center">
                <p className="text-[10px] text-slate-400">Comp.</p>
                <p className="text-xs font-bold text-rose-400">{placementProbability.google.competition}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Job Opportunities for You" action={<Link to="/jobs" className="text-blue-600 text-sm font-semibold">View All</Link>}>
            <div className="space-y-3">
              {jobsList.slice(0, 3).map(job => (
                <Link key={job.id} to="/jobs" className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <img src={job.logo} className="w-10 h-10 rounded-lg bg-slate-100" alt={job.company} />
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{job.role}</h4>
                      <p className="text-xs text-slate-500">{job.company} • {job.package}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden md:block text-right">
                      <p className="text-xs font-bold text-emerald-600">{job.matchPercentage}% Match</p>
                      <p className="text-[10px] text-slate-400">Readiness: {job.readinessScore}%</p>
                    </div>
                    <ArrowRight size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Roadmap Progress" subtitle={`Week ${weeklyProgress.week} of ${weeklyProgress.totalWeeks}`}>
              <div className="space-y-4 py-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Target size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-400">Current Milestone</p>
                    <p className="text-sm font-bold text-slate-800">System Design Mastery</p>
                  </div>
                  <Badge variant="primary">70% Done</Badge>
                </div>
                <div className="pt-2">
                  <p className="text-xs font-medium text-slate-500 mb-2">Next Step: Database Indexing</p>
                  <ProgressBar value={70} color="bg-blue-600" />
                </div>
              </div>
            </Card>

            <Card title="Next Best Action AI Panel" className="bg-indigo-50 border-indigo-100">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center shrink-0">
                  <BrainCircuit size={20} />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-indigo-900 font-medium italic">"Based on your 8.92 CGPA and React expertise, you have a 40% higher chance of securing Product-Based roles in Bangalore compared to peers."</p>
                  <button className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider hover:underline">Get Detailed AI Report</button>
                </div>
              </div>
            </Card>
          </div>

          <Card title="Resume ATS Preview">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-4">
                <FileText className="text-blue-600" size={24} />
                <div>
                  <p className="text-sm font-bold text-slate-800">Resume_Aniket_Gajbhiye.pdf</p>
                  <p className="text-xs text-slate-500">Last updated: Feb 10, 2026</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-emerald-600">85%</p>
                <p className="text-xs text-slate-500">ATS Score</p>
              </div>
            </div>
            <Link to="/resume" className="mt-4 inline-block text-sm text-blue-600 font-semibold hover:underline">View Full Analysis →</Link>
          </Card>

          <Card title="Company Pattern Intelligence">
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-slate-800">Google</span>
                  <Badge variant="primary">Mass Recruiter</Badge>
                </div>
                <p className="text-xs text-slate-600">Focus: Algorithms & System Design</p>
                <div className="mt-2 flex items-center gap-2">
                  <Eye size={14} className="text-slate-400" />
                  <span className="text-xs text-slate-500">Your profile viewed 3 times</span>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-slate-800">Microsoft</span>
                  <Badge variant="warning">Skill-Heavy</Badge>
                </div>
                <p className="text-xs text-slate-600">Focus: Problem Solving & Clean Code</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Upcoming Deadlines" action={<Calendar size={18} className="text-slate-400" />}>
            <div className="space-y-4">
              <div className="flex items-start gap-3 border-l-2 border-rose-500 pl-3">
                <div className="flex-1">
                  <h5 className="text-xs font-bold text-slate-800">Microsoft SWE Application</h5>
                  <p className="text-[10px] text-slate-500">Closes in 4 hours • Action Required</p>
                </div>
                <AlertCircle size={14} className="text-rose-500" />
              </div>
              <div className="flex items-start gap-3 border-l-2 border-amber-500 pl-3">
                <div className="flex-1">
                  <h5 className="text-xs font-bold text-slate-800">Amazon Assessment Test</h5>
                  <p className="text-[10px] text-slate-500">Scheduled for Feb 16 • 10:00 AM</p>
                </div>
                <Timer size={14} className="text-amber-500" />
              </div>
              <div className="flex items-start gap-3 border-l-2 border-blue-500 pl-3">
                <div className="flex-1">
                  <h5 className="text-xs font-bold text-slate-800">Google Mock Interview</h5>
                  <p className="text-[10px] text-slate-500">Scheduled for Feb 18 • 02:00 PM</p>
                </div>
                <Users size={14} className="text-blue-500" />
              </div>
            </div>
          </Card>

          <Card title="Interview Prep Mode" className="overflow-hidden">
            <div className="relative p-4 bg-slate-900 -mx-5 -mt-5 mb-4 text-center">
              <Rocket className="mx-auto text-blue-400 mb-2" size={32} />
              <p className="text-sm font-bold text-white">Confidence Score: 8.5/10</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                <span className="text-xs text-slate-600">DSA Fundamentals Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                <span className="text-xs text-slate-600">Behavioral Intro Needs Polish</span>
              </div>
              <Link to="/mock-interview" className="block w-full mt-2 py-2 text-xs font-bold border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-center">Launch Practice Session</Link>
            </div>
          </Card>

          <Card title="Weekly Progress Report">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Consistency</span>
                <span className="text-sm font-bold text-emerald-600">{weeklyProgress.consistency}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Hours Spent</span>
                <span className="text-sm font-bold text-blue-600">{weeklyProgress.hoursSpent}h</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Tasks Completed</span>
                <span className="text-sm font-bold text-slate-800">{weeklyProgress.tasksCompleted}/{weeklyProgress.tasksTotal}</span>
              </div>
              <ProgressBar value={(weeklyProgress.tasksCompleted / weeklyProgress.tasksTotal) * 100} color="bg-blue-600" />
            </div>
          </Card>

          <Card title="Weekly Activity">
            <div className="flex items-end justify-between h-20 gap-1 pt-2">
              {[45, 80, 60, 90, 70, 40, 65].map((h, i) => (
                <div key={i} className="flex-1 bg-blue-100 rounded-t-sm hover:bg-blue-600 transition-colors group relative cursor-pointer" style={{ height: `${h}%` }}>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] px-1.5 py-0.5 rounded pointer-events-none whitespace-nowrap">
                    {h} mins
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </Card>

          <Card title="Competition Insight Preview">
            <div className="space-y-3">
              <div className="p-3 bg-rose-50 rounded-xl border border-rose-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-rose-800">Google SDE</span>
                  <span className="text-xs font-bold text-rose-600">~2,500 applicants</span>
                </div>
                <ProgressBar value={75} color="bg-rose-500" />
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-emerald-800">TCS Digital</span>
                  <span className="text-xs font-bold text-emerald-600">~800 applicants</span>
                </div>
                <ProgressBar value={45} color="bg-emerald-500" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
