import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Edit2, Save, MapPin, Mail, Phone, ExternalLink, ShieldCheck, Eye } from 'lucide-react';
import { userProfile } from '../data/mockData';

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(userProfile);
  const [previewMode, setPreviewMode] = useState(false);

  const handleInputChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">My Placement Profile</h2>
          <p className="text-slate-500">Manage your data visible to recruitment officers.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setPreviewMode(!previewMode)}
            className={`flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors ${previewMode ? 'bg-blue-50 border-blue-200 text-blue-700' : ''}`}
          >
            <Eye size={18} /> Recruiter Preview
          </button>
          <button 
            onClick={() => {
              setIsEditing(!isEditing);
              if (isEditing) {
                // Save logic here
              }
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isEditing ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-800 text-white hover:bg-slate-900'}`}
          >
            {isEditing ? <><Save size={18} /> Save Changes</> : <><Edit2 size={18} /> Edit Profile</>}
          </button>
        </div>
      </div>

      {previewMode && (
        <Card className="bg-blue-50 border-blue-200">
          <div className="flex items-center gap-2 text-blue-800">
            <Eye size={18} />
            <p className="text-sm font-semibold">Recruiter Preview Mode - This is how recruiters see your profile</p>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-6">
          <Card className="text-center pt-8">
            <div className="relative inline-block">
              <img src={profileData.avatar} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-slate-50 shadow-sm mx-auto mb-4" />
              <div className="absolute bottom-4 right-0 bg-emerald-500 p-1.5 rounded-full border-2 border-white text-white">
                <ShieldCheck size={12} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-800">{profileData.name}</h3>
            <p className="text-blue-600 font-medium text-sm mb-4">{profileData.branch}</p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="primary">{profileData.year}</Badge>
              <Badge variant="success">{profileData.cgpa} CGPA</Badge>
              <Badge variant="outline">Placed @ TCS</Badge>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-100 text-left">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Mail size={16} className="text-slate-400" /> 
                {isEditing ? (
                  <input 
                    type="email" 
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-sm"
                  />
                ) : (
                  <span>{profileData.email}</span>
                )}
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Phone size={16} className="text-slate-400" /> 
                {isEditing ? (
                  <input 
                    type="tel" 
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-sm"
                  />
                ) : (
                  <span>{profileData.phone}</span>
                )}
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin size={16} className="text-slate-400" /> 
                <span>{profileData.location}</span>
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
                {isEditing ? (
                  <>
                    <input type="text" defaultValue={profileData.college} className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1 text-sm mb-2" />
                    <input type="text" defaultValue={`B.Tech ${profileData.branch} (2022-2026)`} className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1 text-sm mb-3" />
                  </>
                ) : (
                  <>
                    <p className="text-sm font-bold text-slate-800">{profileData.college}</p>
                    <p className="text-xs text-slate-500">B.Tech {profileData.branch} (2022-2026)</p>
                  </>
                )}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600">Current CGPA: {profileData.cgpa}</span>
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
                  {profileData.skills.map(skill => (
                    <div key={skill} className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 shadow-sm flex items-center gap-2">
                      {skill} <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    </div>
                  ))}
                  {isEditing && (
                    <button className="px-3 py-1.5 bg-slate-100 text-slate-500 rounded-lg text-sm font-medium border border-dashed border-slate-300 hover:bg-slate-200">
                      + Add Skill
                    </button>
                  )}
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

          <Card title="Projects" action={isEditing && <button className="text-blue-600 text-sm font-bold">+ Add Project</button>}>
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

          <Card title="Documents">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <ExternalLink size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Resume_Aniket_Gajbhiye.pdf</p>
                    <p className="text-xs text-slate-500">Updated: Feb 10, 2026</p>
                  </div>
                </div>
                <button className="text-blue-600 text-sm font-semibold hover:underline">View</button>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                    <ExternalLink size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Transcript_Semester_7.pdf</p>
                    <p className="text-xs text-slate-500">Verified</p>
                  </div>
                </div>
                <button className="text-blue-600 text-sm font-semibold hover:underline">View</button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
