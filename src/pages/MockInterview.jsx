import React, { useEffect, useMemo, useState } from "react";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { ProgressBar } from "../components/ui/ProgressBar";
import {
  Rocket,
  CheckCircle2,
  Circle,
  Mic,
  Video,
  Clock,
  TrendingUp,
} from "lucide-react";

const defaultChecklist = [
  { id: 1, text: "DSA Fundamentals Ready", checked: true },
  { id: 2, text: "Behavioral Intro Needs Polish", checked: false },
  { id: 3, text: "System Design Concepts Reviewed", checked: true },
  { id: 4, text: "Mock Interview Scheduled", checked: false },
  { id: 5, text: "Resume Points Memorized", checked: true },
];

const MockInterview = () => {
  const [checklist, setChecklist] = useState(defaultChecklist);
  const [practiceMode, setPracticeMode] = useState(null);

  // load saved checklist
  useEffect(() => {
    const saved = localStorage.getItem("mock_checklist");
    if (saved) setChecklist(JSON.parse(saved));
  }, []);

  // persist checklist
  useEffect(() => {
    localStorage.setItem("mock_checklist", JSON.stringify(checklist));
  }, [checklist]);

  const toggleChecklist = (id) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const completedCount = useMemo(
    () => checklist.filter((i) => i.checked).length,
    [checklist]
  );

  const progress = useMemo(
    () => Math.round((completedCount / checklist.length) * 100),
    [completedCount, checklist.length]
  );

  const confidenceScore = useMemo(
    () => (progress / 10).toFixed(1),
    [progress]
  );

  const startSession = () => {
    if (!practiceMode) {
      alert("Select Video or Audio mode first");
      return;
    }
    alert(`Starting ${practiceMode} practice session`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Mock Interview Prep
        </h2>
        <p className="text-slate-500">
          Build confidence and prepare for real interviews
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">
          {/* Confidence */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none">
            <div className="flex flex-col items-center py-8">
              <Rocket size={48} className="text-blue-400 mb-4" />
              <p className="text-3xl font-bold">Confidence Score</p>
              <p className="text-5xl font-bold text-blue-400 my-3">
                {confidenceScore}/10
              </p>
              <ProgressBar value={progress} color="bg-blue-500" />
              <div className="flex items-center gap-2 mt-4 text-sm">
                <TrendingUp size={16} />
                Based on preparation progress
              </div>
            </div>
          </Card>

          {/* Checklist */}
          <Card title="Preparation Checklist">
            <div className="space-y-3">
              {checklist.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 cursor-pointer transition-all hover:scale-[1.01]"
                >
                  {item.checked ? (
                    <CheckCircle2 size={20} className="text-emerald-500" />
                  ) : (
                    <Circle size={20} className="text-slate-300" />
                  )}

                  <span
                    className={`text-sm flex-1 ${
                      item.checked
                        ? "line-through text-slate-500"
                        : "font-medium text-slate-800"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <ProgressBar
                value={progress}
                label={`${completedCount}/${checklist.length} Completed`}
                color="bg-emerald-500"
              />
            </div>
          </Card>

          {/* Practice */}
          <Card title="Practice Session">
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => setPracticeMode("Video")}
                className={`p-6 rounded-xl border-2 transition text-center
                ${
                  practiceMode === "Video"
                    ? "bg-blue-200 border-blue-500"
                    : "bg-blue-50 border-blue-200 hover:bg-blue-100"
                }`}
              >
                <Video className="mx-auto mb-2 text-blue-600" size={32} />
                <p className="font-bold text-sm">Video Interview</p>
                <p className="text-xs text-slate-500">
                  Practice with recording
                </p>
              </button>

              <button
                onClick={() => setPracticeMode("Audio")}
                className={`p-6 rounded-xl border-2 transition text-center
                ${
                  practiceMode === "Audio"
                    ? "bg-emerald-200 border-emerald-500"
                    : "bg-emerald-50 border-emerald-200 hover:bg-emerald-100"
                }`}
              >
                <Mic className="mx-auto mb-2 text-emerald-600" size={32} />
                <p className="font-bold text-sm">Audio Only</p>
                <p className="text-xs text-slate-500">
                  Speaking practice
                </p>
              </button>
            </div>

            <button
              onClick={startSession}
              className="w-full mt-5 py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition"
            >
              Start Practice Session
            </button>
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <Card title="Quick Stats">
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border text-center">
                <p className="text-3xl font-bold text-blue-600">12</p>
                <p className="text-xs text-slate-500 mt-1">
                  Mock Interviews
                </p>
              </div>

              <div className="space-y-2 text-sm">
                <StatRow label="Average Score" value="8.2/10" good />
                <StatRow label="Best Score" value="9.5/10" />
                <StatRow label="This Week" value="3 sessions" />
              </div>
            </div>
          </Card>

          <Card title="Upcoming Sessions">
            {[
              { company: "Google", date: "Feb 18, 2:00 PM", type: "Technical" },
              { company: "Microsoft", date: "Feb 20, 10:00 AM", type: "Behavioral" },
            ].map((s, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-slate-50 border mb-3 last:mb-0"
              >
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-sm">{s.company}</span>
                  <Badge variant="primary">{s.type}</Badge>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock size={12} />
                  {s.date}
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
};

const StatRow = ({ label, value, good }) => (
  <div className="flex justify-between">
    <span className="text-slate-600">{label}</span>
    <span className={`font-bold ${good ? "text-emerald-600" : "text-slate-800"}`}>
      {value}
    </span>
  </div>
);

export default MockInterview;
