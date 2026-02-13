import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Tabs } from '../components/ui/Tabs';
import { Bell, Briefcase, FileText, Video, CheckCircle2, X } from 'lucide-react';
import { notifications } from '../data/mockData';

const Notifications = () => {
  const [allNotifications, setAllNotifications] = useState(notifications);

  const markAsRead = (id) => {
    setAllNotifications(prev => 
      prev.map(notif => notif.id === id ? { ...notif, unread: false } : notif)
    );
  };

  const deleteNotification = (id) => {
    setAllNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'job': return <Briefcase size={20} className="text-blue-600" />;
      case 'test': return <FileText size={20} className="text-amber-600" />;
      case 'interview': return <Video size={20} className="text-emerald-600" />;
      default: return <Bell size={20} className="text-slate-600" />;
    }
  };

  const tabs = [
    {
      id: 'all',
      label: 'All',
      content: (
        <div className="space-y-3">
          {allNotifications.map(notif => (
            <div 
              key={notif.id} 
              className={`p-4 rounded-xl border transition-all ${
                notif.unread ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-100'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                  {getNotificationIcon(notif.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-sm font-bold text-slate-800">{notif.title}</h4>
                    {notif.unread && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{notif.message}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-500">{notif.time}</span>
                    <Badge variant={notif.type === 'interview' ? 'success' : notif.type === 'test' ? 'warning' : 'primary'}>
                      {notif.type}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  {notif.unread && (
                    <button 
                      onClick={() => markAsRead(notif.id)}
                      className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <CheckCircle2 size={18} className="text-slate-400" />
                    </button>
                  )}
                  <button 
                    onClick={() => deleteNotification(notif.id)}
                    className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <X size={18} className="text-slate-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'jobs',
      label: 'Jobs',
      content: (
        <div className="space-y-3">
          {allNotifications.filter(n => n.type === 'job').map(notif => (
            <div key={notif.id} className="p-4 rounded-xl border bg-white border-slate-100">
              <div className="flex items-start gap-4">
                <Briefcase size={20} className="text-blue-600 mt-1" />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-800">{notif.title}</h4>
                  <p className="text-sm text-slate-600">{notif.message}</p>
                  <span className="text-xs text-slate-500">{notif.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'tests',
      label: 'Tests',
      content: (
        <div className="space-y-3">
          {allNotifications.filter(n => n.type === 'test').map(notif => (
            <div key={notif.id} className="p-4 rounded-xl border bg-white border-slate-100">
              <div className="flex items-start gap-4">
                <FileText size={20} className="text-amber-600 mt-1" />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-800">{notif.title}</h4>
                  <p className="text-sm text-slate-600">{notif.message}</p>
                  <span className="text-xs text-slate-500">{notif.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'interviews',
      label: 'Interviews',
      content: (
        <div className="space-y-3">
          {allNotifications.filter(n => n.type === 'interview').map(notif => (
            <div key={notif.id} className="p-4 rounded-xl border bg-white border-slate-100">
              <div className="flex items-start gap-4">
                <Video size={20} className="text-emerald-600 mt-1" />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-800">{notif.title}</h4>
                  <p className="text-sm text-slate-600">{notif.message}</p>
                  <span className="text-xs text-slate-500">{notif.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Notifications</h2>
          <p className="text-slate-500">Stay updated with your placement activities.</p>
        </div>
        <Badge variant="primary" className="px-4 py-2">
          {allNotifications.filter(n => n.unread).length} Unread
        </Badge>
      </div>

      <Card>
        <Tabs tabs={tabs} defaultTab="all" />
      </Card>
    </div>
  );
};

export default Notifications;
