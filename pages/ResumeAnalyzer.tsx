
import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { CircularScore } from '../components/ui/CircularScore';
import { Upload, FileText, CheckCircle2, AlertCircle, RefreshCw, BarChart3, Fingerprint } from 'lucide-react';

const ResumeAnalyzer: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalyzed(true);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Resume AI Analyzer</h2>
          <p className="text-slate-500">Check your resume against top recruiter ATS standards.</p>
        </div>
        <Badge variant="primary" className="py-1 px-3">Powered by Gemini Pro</Badge>
      </div>

      {!analyzed ? (
        <Card className="py-20 flex flex-col items-center justify-center border-dashed border-2 bg-slate-50/50">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
            <Upload size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Upload your current Resume</h3>
          <p className="text-slate-500 mb-8 max-w-sm text-center">Drag and drop your PDF or DOCX file here. AI will scan for ATS compatibility and keywords.</p>
          <div className="flex gap-4">
            <label className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold cursor-pointer hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
               Select File
               <input type="file" className="hidden" onChange={handleAnalyze} />
            </label>
            <button className="px-8 py-3 border border-slate-200 rounded-xl font-bold bg-white hover:bg-slate-50 transition-all">Import from LinkedIn</button>
          </div>
          {isAnalyzing && (
            <div className="mt-8 flex items-center gap-3 text-blue-600 font-bold">
               <RefreshCw className="animate-spin" size={20} />
               <span>AI is dissecting your career history...</span>
            </div>
          )}
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <Card className="flex flex-col items-center py-10">
              <CircularScore score={85} size={160} strokeWidth={12} label="ATS Score" />
              <div className="mt-8 w-full space-y-4">
                 <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <div className="flex items-center gap-2 mb-1">
                       <CheckCircle2 size={16} className="text-emerald-600" />
                       <span className="text-sm font-bold text-emerald-800">Excellent Format</span>
                    </div>
                    <p className="text-xs text-emerald-700">Your resume structure is highly readable by machines.</p>
                 </div>
                 <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                    <div className="flex items-center gap-2 mb-1">
                       <AlertCircle size={16} className="text-amber-600" />
                       <span className="text-sm font-bold text-amber-800">Missing Key Sections</span>
                    </div>
                    <p className="text-xs text-amber-700">Add a 'Volunteer Experience' section to boost impact.</p>
                 </div>
              </div>
           </Card>

           <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Card title="Resume Truth Score" action={<Fingerprint size={18} className="text-blue-500" />}>
                    <div className="py-2">
                       <div className="flex justify-between items-end mb-2">
                          <span className="text-xs font-bold text-slate-400 uppercase">Authenticity Indicator</span>
                          <span className="text-2xl font-bold text-slate-800">98%</span>
                       </div>
                       <div className="h-2 w-full bg-slate-100 rounded-full">
                          <div className="h-full bg-blue-500 rounded-full w-[98%] shadow-sm"></div>
                       </div>
                       <p className="text-[10px] text-slate-500 mt-4 leading-relaxed">Cross-referenced with verified university transcripts and project repositories. Highly trustworthy for recruiters.</p>
                    </div>
                 </Card>
                 <Card title="Keyword Match Index" action={<BarChart3 size={18} className="text-indigo-500" />}>
                    <div className="space-y-3">
                       <div className="flex flex-wrap gap-2">
                          <Badge variant="success">React</Badge>
                          <Badge variant="success">Python</Badge>
                          <Badge variant="success">SQL</Badge>
                          <Badge variant="warning">Cloud</Badge>
                          <Badge variant="error">Docker</Badge>
                       </div>
                       <p className="text-xs text-slate-500">Highlighted terms found in top SDE job descriptions but missing or weak in your resume.</p>
                    </div>
                 </Card>
              </div>

              <Card title="Improvement Checklist">
                 <div className="space-y-4">
                    {[
                      { text: "Quantify achievements using metrics (e.g. 'Improved speed by 20%')", done: false },
                      { text: "Update skills section with 'Next.js' for current roles", done: true },
                      { text: "Remove high school details to save space for internships", done: false },
                      { text: "Ensure consistent font usage across all sections", done: true }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                         {item.done ? <CheckCircle2 size={18} className="text-emerald-500 shrink-0" /> : <div className="w-[18px] h-[18px] rounded-full border-2 border-slate-300 shrink-0"></div>}
                         <span className={`text-sm ${item.done ? 'text-slate-400 line-through' : 'text-slate-700 font-medium'}`}>{item.text}</span>
                      </div>
                    ))}
                 </div>
                 <button className="w-full mt-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
                    <FileText size={18} /> Generate PDF with Improvements
                 </button>
              </Card>
           </div>
        </div>
      )}
    </div>
  );
};

export default ResumeAnalyzer;
