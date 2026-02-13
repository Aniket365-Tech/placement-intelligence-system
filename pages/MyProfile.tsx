
import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Edit2, Save, MapPin, Mail, Phone, ExternalLink, ShieldCheck, Eye } from 'lucide-react';
import { userProfile } from '../data/mockData';

const MyProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">My Placement Profile</h2>
          <p className="text-slate-500">Manage your data visible to recruitment officers.</p>
        </div>
        <div className="flex gap-2">
           <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
              <Eye size={18} /> Recruiter Preview
           </button>
           <button 
             onClick={() => setIsEditing(!isEditing)}
             className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isEditing ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-800 text-white hover:bg-slate-900'}`}
           >
              {isEditing ? <><Save size={18} /> Save Changes</> : <><Edit2 size={18} /> Edit Profile</>}
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-6">
          <Card className="text-center pt-8">
             <div className="relative inline-block">
                <img src={userProfile.avatar} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-slate-50 shadow-sm mx-auto mb-4" />
                <div className="absolute bottom-4 right-0 bg-emerald-500 p-1.5 rounded-full border-2 border-white text-white">
                   <ShieldCheck size={12} />
                </div>
             </div>
             <h3 className="text-xl font-bold text-slate-800">{userProfile.name}</h3>
             <p className="text-blue-600 font-medium text-sm mb-4">M.Tech Computer Science</p>
             
             <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge variant="primary">Final Year</Badge>
                <Badge variant="success">8.92 CGPA</Badge>
                <Badge variant="outline">Placed @ TCS</Badge>
             </div>

             <div className="space-y-3 pt-6 border-t border-slate-100 text-left">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                   <Mail size={16} className="text-slate-400" /> <span>{userProfile.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                   <Phone size={16} className="text-slate-400" /> <span>{userProfile.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                   <MapPin size={16} className="text-slate-400" /> <span>Nagpur, Maharashtra</span>
                </div>
             </div>
          </Card>

          <Card title="Profile Completeness">
             <div className="space-y-4">
                <ProgressBar value={88} showValue color="bg-emerald-500" />
                <p className="text-xs text-slate-500 italic">"Complete your internship details to reach 100% and get noticed by premium recruiters."</p>
                <button className="w-full py-2 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg border border-slate-200 hover:bg-slate-100">Add Internship Details</button>
             </div>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
           <Card title="Academic Excellence">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Undergraduate</p>
                    <p className="text-sm font-bold text-slate-800">VNIT Nagpur</p>
                    <p className="text-xs text-slate-500">B.Tech CSE (2022-2026)</p>
                    <div className="mt-3 flex items-center justify-between">
                       <span className="text-xs font-bold text-blue-600">Current CGPA: 8.92</span>
                       <Badge variant="outline">Verified</Badge>
                    </div>
                 </div>
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 opacity-70">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Intermediate (XII)</p>
                    <p className="text-sm font-bold text-slate-800">Delhi Public School</p>
                    <p className="text-xs text-slate-500">Science Cluster (94.2%)</p>
                    <div className="mt-3 flex items-center justify-between">
                       <span className="text-xs font-bold text-slate-600">YOP: 2022</span>
                       <Badge variant="outline">Verified</Badge>
                    </div>
                 </div>
              </div>
           </Card>

           <Card title="Skills & Competencies">
              <div className="space-y-6">
                 <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-3">Core Technical</p>
                    <div className="flex flex-wrap gap-2">
                       {userProfile.skills.map(skill => (
                          <div key={skill} className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 shadow-sm flex items-center gap-2">
                             {skill} <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          </div>
                       ))}
                       <button className="px-3 py-1.5 bg-slate-100 text-slate-500 rounded-lg text-sm font-medium border border-dashed border-slate-300 hover:bg-slate-200">
                          + Add Skill
                       </button>
                    </div>
                 </div>
                 <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-3">Professional Tools</p>
                    <div className="flex flex-wrap gap-2">
                       {['Git', 'Docker', 'Postman', 'Figma', 'VS Code'].map(tool => (
                          <Badge key={tool} variant="secondary" className="px-3 py-1.5">{tool}</Badge>
                       ))}
                    </div>
                 </div>
              </div>
           </Card>

           <Card title="Projects" action={<button className="text-blue-600 text-sm font-bold">+ Add Project</button>}>
              <div className="space-y-4">
                 <div className="group p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/20 transition-all">
                    <div className="flex justify-between mb-2">
                       <h4 className="font-bold text-slate-800 group-hover:text-blue-700">Placement Dashboard v1</h4>
                       <ExternalLink size={16} className="text-slate-400 cursor-pointer hover:text-blue-600" />
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">React-based analytical system for student monitoring. Implemented using Context API and Tailwind CSS.</p>
                    <div className="flex gap-2">
                       <Badge variant="outline">React</Badge>
                       <Badge variant="outline">Firebase</Badge>
                    </div>
                 </div>
                 <div className="group p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/20 transition-all">
                    <div className="flex justify-between mb-2">
                       <h4 className="font-bold text-slate-800 group-hover:text-blue-700">Autonomous Drone Nav</h4>
                       <ExternalLink size={16} className="text-slate-400 cursor-pointer hover:text-blue-600" />
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">Python-based computer vision project for obstacle avoidance in semi-arid terrains.</p>
                    <div className="flex gap-2">
                       <Badge variant="outline">Python</Badge>
                       <Badge variant="outline">OpenCV</Badge>
                    </div>
                 </div>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
