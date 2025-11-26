import React from 'react';
import { useApp } from '../context/AppContext';
import { StatusBadge } from '../components/StatusBadge';
import { SeverityBadge } from '../components/SeverityBadge';

export function TicketsPage() {
  const { tickets, resolveTicket } = useApp();

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Tickets</h2>
          <p className="text-slate-400">Manage support tickets</p>
        </div>
        <div className="text-sm text-slate-400">
          Total: <span className="text-white font-semibold">{tickets.length}</span>
        </div>
      </div>

      <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-900/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Title</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Severity</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {tickets.map(ticket => (
                <tr key={ticket.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium">{ticket.title}</div>
                    {ticket.steps && (
                      <div className="text-sm text-slate-400 mt-1">{ticket.steps}</div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <SeverityBadge severity={ticket.severity} />
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={ticket.status} />
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">
                    {new Date(ticket.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {ticket.status !== 'Resolved' && (
                      <button
                        onClick={() => resolveTicket(ticket.id)}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        Resolve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {tickets.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              No tickets found. Create your first ticket to get started.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
