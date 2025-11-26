import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export function CreateTicket() {
  const [title, setTitle] = useState('');
  const [steps, setSteps] = useState('');
  const [severity, setSeverity] = useState('Medium');
  const { addTicket, setCurrentPage } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Please enter a ticket title');
      return;
    }

    addTicket({ title, steps, severity });
    setTitle('');
    setSteps('');
    setSeverity('Medium');
    setCurrentPage('tickets');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-3xl font-bold mb-2">Create Ticket</h2>
        <p className="text-slate-400">Submit a new support ticket</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Title *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Brief description of the issue"
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Steps to Reproduce</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Describe the steps to reproduce this issue..."
            rows={5}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Severity</label>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-blue-500/25"
          >
            Submit Ticket
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage('tickets')}
            className="px-6 py-3 bg-slate-700/50 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
