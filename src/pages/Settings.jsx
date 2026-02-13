import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Tabs } from '../components/ui/Tabs';
import { User, Lock, Bell, Eye, EyeOff, Save } from 'lucide-react';

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [resumeVisible, setResumeVisible] = useState(true);

  const tabs = [
    {
      id: 'profile',
      label: 'Profile',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">Full Name</label>
              <input 
                type="text" 
                defaultValue="Aniket Gajbhiye"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">Email</label>
              <input 
                type="email" 
                defaultValue="aniket.g@example.edu"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">Phone</label>
              <input 
                type="tel" 
                defaultValue="+91 9876543210"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">College</label>
              <input 
                type="text" 
                defaultValue="VNIT Nagpur"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-sm"
              />
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Save size={18} /> Save Changes
          </button>
        </div>
      )
    },
    {
      id: 'password',
      label: 'Password',
      content: (
        <div className="space-y-6">
          <div>
            <label className="text-sm font-bold text-slate-700 mb-2 block">Current Password</label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 pr-12 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-sm"
              />
              <button 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div>
            <label className="text-sm font-bold text-slate-700 mb-2 block">New Password</label>
            <input 
              type="password"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-slate-700 mb-2 block">Confirm New Password</label>
            <input 
              type="password"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-sm"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Lock size={18} /> Update Password
          </button>
        </div>
      )
    },
    {
      id: 'notifications',
      label: 'Notifications',
      content: (
        <div className="space-y-6">
          {[
            { label: 'Email Notifications', description: 'Receive email updates about job applications', enabled: true },
            { label: 'Push Notifications', description: 'Get real-time alerts on your device', enabled: true },
            { label: 'Job Alerts', description: 'New job opportunities matching your profile', enabled: true },
            { label: 'Assessment Reminders', description: 'Reminders for upcoming assessments', enabled: false },
            { label: 'Interview Updates', description: 'Updates about interview schedules', enabled: true }
          ].map((setting, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div>
                <p className="text-sm font-bold text-slate-800">{setting.label}</p>
                <p className="text-xs text-slate-500">{setting.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={setting.enabled} />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'privacy',
      label: 'Privacy',
      content: (
        <div className="space-y-6">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm font-bold text-slate-800">Resume Visibility</p>
                <p className="text-xs text-slate-500">Allow recruiters to view your resume</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={resumeVisible}
                  onChange={(e) => setResumeVisible(e.target.checked)}
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            {resumeVisible && (
              <Badge variant="success" className="mt-2">Your resume is visible to recruiters</Badge>
            )}
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-sm font-bold text-slate-800 mb-2">Profile Completeness</p>
            <p className="text-xs text-slate-500">Your profile is 88% complete. Complete it to get better job matches.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Settings</h2>
        <p className="text-slate-500">Manage your account settings and preferences.</p>
      </div>

      <Card>
        <Tabs tabs={tabs} defaultTab="profile" />
      </Card>
    </div>
  );
};

export default Settings;
