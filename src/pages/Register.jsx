import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, GraduationCap, BookOpen, Calendar, Award, Lock, Upload, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    branch: '',
    year: '',
    cgpa: '',
    skills: [],
    password: '',
    confirmPassword: ''
  });
  const [skillInput, setSkillInput] = useState('');
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAppContext();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData({ ...formData, skills: [...formData.skills, skillInput.trim()] });
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skill) => {
    setFormData({ ...formData, skills: formData.skills.filter(s => s !== skill) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 py-10">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-blue-200">
            <span className="text-white text-3xl font-black">S</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Create Account</h1>
          <p className="text-slate-500 font-medium">Join Smart Placement Intelligence System</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                <User size={14} /> Name
              </label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                <Mail size={14} /> Email
              </label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@university.edu"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                <Phone size={14} /> Phone
              </label>
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 9876543210"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                <GraduationCap size={14} /> College
              </label>
              <input 
                type="text" 
                name="college"
                required
                value={formData.college}
                onChange={handleInputChange}
                placeholder="College Name"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                <BookOpen size={14} /> Branch
              </label>
              <select 
                name="branch"
                required
                value={formData.branch}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
              >
                <option value="">Select Branch</option>
                <option value="CSE">Computer Science & Engineering</option>
                <option value="IT">Information Technology</option>
                <option value="ECE">Electronics & Communication</option>
                <option value="EEE">Electrical & Electronics</option>
                <option value="ME">Mechanical Engineering</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                <Calendar size={14} /> Year
              </label>
              <select 
                name="year"
                required
                value={formData.year}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
              >
                <option value="">Select Year</option>
                <option value="First Year">First Year</option>
                <option value="Second Year">Second Year</option>
                <option value="Third Year">Third Year</option>
                <option value="Final Year">Final Year</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                <Award size={14} /> CGPA
              </label>
              <input 
                type="number" 
                name="cgpa"
                required
                step="0.01"
                min="0"
                max="10"
                value={formData.cgpa}
                onChange={handleInputChange}
                placeholder="8.5"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Skills</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                  placeholder="Add skill and press Enter"
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
                />
                <button type="button" onClick={handleAddSkill} className="px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium flex items-center gap-2">
                    {skill}
                    <button type="button" onClick={() => handleRemoveSkill(skill)} className="hover:text-blue-900">×</button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
              <Upload size={14} /> Resume Upload
            </label>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center">
              <Upload className="mx-auto text-slate-400 mb-2" size={24} />
              <p className="text-sm text-slate-500 mb-2">Upload your resume (PDF/DOCX)</p>
              <input type="file" accept=".pdf,.doc,.docx" className="hidden" id="resume" />
              <label htmlFor="resume" className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium cursor-pointer hover:bg-slate-200">
                Choose File
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                <Lock size={14} /> Password
              </label>
              <input 
                type="password" 
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                <Lock size={14} /> Confirm Password
              </label>
              <input 
                type="password" 
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
              />
            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2 group">
            Create Account
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="text-center pt-4 border-t border-slate-100">
            <p className="text-sm text-slate-500">
              Already have an account? <Link to="/login" className="text-blue-600 font-bold hover:underline">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
