import React, { useState } from 'react';
import { Check, GraduationCap } from 'lucide-react';

export function Training() {
  const [completed, setCompleted] = useState({});

  const toggleComplete = (id) => {
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const checklist = [
    { id: 1, title: 'Create a new ticket', description: 'Learn how to submit support tickets' },
    { id: 2, title: 'Reproduce the issue', description: 'Follow steps to recreate problems' },
    { id: 3, title: 'Check console logs', description: 'Use browser DevTools to find errors' },
    { id: 4, title: 'Search knowledge base', description: 'Find solutions in existing articles' },
    { id: 5, title: 'Resolve tickets', description: 'Mark tickets as resolved when fixed' }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-3xl font-bold mb-2">Training Module</h2>
        <p className="text-slate-400">Complete onboarding steps</p>
      </div>

      <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Onboarding Checklist</h3>
          <div className="text-sm text-slate-400">
            {Object.keys(completed).filter(k => completed[k]).length} / {checklist.length} completed
          </div>
        </div>

        <div className="space-y-3">
          {checklist.map(item => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-800/50 transition-colors cursor-pointer"
              onClick={() => toggleComplete(item.id)}
            >
              <div className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                completed[item.id] 
                  ? 'bg-green-500 border-green-500' 
                  : 'border-slate-600'
              }`}>
                {completed[item.id] && <Check size={14} className="text-white" />}
              </div>
              <div className="flex-1">
                <h4 className={`font-medium ${completed[item.id] ? 'line-through text-slate-500' : ''}`}>
                  {item.title}
                </h4>
                <p className="text-sm text-slate-400 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <GraduationCap className="text-blue-400" size={20} />
          Pro Tip
        </h3>
        <p className="text-slate-300">
          Complete all checklist items to become proficient in using SupportDeskPro. Each step builds on the previous one to help you master the platform.
        </p>
      </div>
    </div>
  );
}
