import React from 'react';
import { Clock, Check, AlertTriangle, TrendingUp, Plus, BookOpen, GraduationCap } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { StatCard } from '../components/StatCard';
import { StatusBadge } from '../components/StatusBadge';
import { QuickActionButton } from '../components/QuickActionButton';

export function Dashboard() {
  const { tickets } = useApp();
  const openTickets = tickets.filter(t => t.status !== 'Resolved').length;
  const resolvedTickets = tickets.filter(t => t.status === 'Resolved').length;
  const highPriority = tickets.filter(t => t.severity === 'High' && t.status !== 'Resolved').length;

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-3xl font-bold mb-2">Dashboard</h2>
        <p className="text-slate-400">Overview of your support desk</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          icon={Clock} 
          title="Open Tickets" 
          value={openTickets} 
          color="blue"
          trend="+12% from last week"
        />
        <StatCard 
          icon={Check} 
          title="Resolved" 
          value={resolvedTickets} 
          color="green"
          trend="+8% from last week"
        />
        <StatCard 
          icon={AlertTriangle} 
          title="High Priority" 
          value={highPriority} 
          color="red"
          trend="Needs attention"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="text-blue-400" size={20} />
            Recent Activity
          </h3>
          <div className="space-y-3">
            {tickets.slice(0, 5).map(ticket => (
              <div key={ticket.id} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">{ticket.title}</p>
                  <p className="text-xs text-slate-400">
                    {new Date(ticket.createdAt).toLocaleString()}
                  </p>
                </div>
                <StatusBadge status={ticket.status} />
              </div>
            ))}
            {tickets.length === 0 && (
              <p className="text-slate-400 text-center py-8">No tickets yet</p>
            )}
          </div>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <QuickActionButton 
              icon={Plus} 
              label="Create New Ticket" 
              page="create"
            />
            <QuickActionButton 
              icon={BookOpen} 
              label="Browse Knowledge Base" 
              page="kb"
            />
            <QuickActionButton 
              icon={GraduationCap} 
              label="View Training" 
              page="training"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
