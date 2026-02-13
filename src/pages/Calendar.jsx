import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin, AlertCircle } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 13)); // Feb 13, 2026

  const events = [
    { id: 1, title: 'Microsoft SWE Application Deadline', date: new Date(2026, 1, 13), time: '11:59 PM', type: 'deadline', priority: 'high' },
    { id: 2, title: 'Amazon Assessment Test', date: new Date(2026, 1, 16), time: '10:00 AM', type: 'test', priority: 'medium' },
    { id: 3, title: 'Google Mock Interview', date: new Date(2026, 1, 18), time: '02:00 PM', type: 'interview', priority: 'high' },
    { id: 4, title: 'TCS Digital Interview', date: new Date(2026, 1, 20), time: '11:00 AM', type: 'interview', priority: 'high' },
    { id: 5, title: 'Skill Assessment - System Design', date: new Date(2026, 1, 22), time: '03:00 PM', type: 'test', priority: 'low' }
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    return days;
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const days = getDaysInMonth(currentDate);

  const getEventsForDate = (date) => {
    if (!date) return [];
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-rose-500';
      case 'medium': return 'bg-amber-500';
      case 'low': return 'bg-blue-500';
      default: return 'bg-slate-500';
    }
  };

  const getTypeBadge = (type) => {
    const variants = {
      deadline: { variant: 'error', label: 'Deadline' },
      test: { variant: 'warning', label: 'Test' },
      interview: { variant: 'primary', label: 'Interview' }
    };
    return variants[type] || { variant: 'secondary', label: type };
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Placement Calendar</h2>
          <p className="text-slate-500">Track important deadlines and events.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="flex items-center justify-between mb-6">
              <button onClick={() => navigateMonth(-1)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <ChevronLeft size={20} className="text-slate-600" />
              </button>
              <h3 className="text-xl font-bold text-slate-800">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <button onClick={() => navigateMonth(1)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <ChevronRight size={20} className="text-slate-600" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {dayNames.map(day => (
                <div key={day} className="text-center text-xs font-bold text-slate-500 py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {days.map((date, idx) => {
                const dayEvents = getEventsForDate(date);
                return (
                  <div
                    key={idx}
                    className={`min-h-[80px] p-2 border rounded-lg transition-all ${
                      isToday(date) 
                        ? 'bg-blue-50 border-blue-300 shadow-md' 
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {date && (
                      <>
                        <div className={`text-sm font-bold mb-1 ${
                          isToday(date) ? 'text-blue-600' : 'text-slate-800'
                        }`}>
                          {date.getDate()}
                        </div>
                        <div className="space-y-1">
                          {dayEvents.slice(0, 2).map(event => (
                            <div
                              key={event.id}
                              className={`text-[10px] px-1 py-0.5 rounded ${getPriorityColor(event.priority)} text-white truncate`}
                              title={event.title}
                            >
                              {event.title}
                            </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="text-[10px] text-slate-500">
                              +{dayEvents.length - 2} more
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Upcoming Events">
            <div className="space-y-4">
              {events.slice(0, 5).map(event => {
                const badge = getTypeBadge(event.type);
                return (
                  <div key={event.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-slate-800 mb-1">{event.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <div className="flex items-center gap-1">
                            <CalendarIcon size={12} />
                            {event.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} />
                            {event.time}
                          </div>
                        </div>
                      </div>
                      <Badge variant={badge.variant} className="text-xs">{badge.label}</Badge>
                    </div>
                    {event.priority === 'high' && (
                      <div className="flex items-center gap-1 text-xs text-rose-600 mt-2">
                        <AlertCircle size={12} />
                        High Priority
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>

          <Card title="Deadline Radar" className="bg-rose-50 border-rose-100">
            <div className="space-y-3">
              {events.filter(e => e.type === 'deadline').map(event => (
                <div key={event.id} className="p-3 bg-white rounded-lg border border-rose-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-rose-800">{event.title}</span>
                    <AlertCircle size={16} className="text-rose-600" />
                  </div>
                  <p className="text-xs text-rose-600">{event.date.toLocaleDateString()} • {event.time}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
