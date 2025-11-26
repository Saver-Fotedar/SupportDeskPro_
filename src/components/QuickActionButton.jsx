import React from 'react';
import { useApp } from '../context/AppContext';

export function QuickActionButton({ icon: Icon, label, page }) {
  const { setCurrentPage } = useApp();

  return (
    <button
      onClick={() => setCurrentPage(page)}
      className="w-full flex items-center gap-3 p-4 bg-slate-900/50 hover:bg-slate-800/50 border border-slate-700/50 rounded-xl transition-colors group"
    >
      <Icon size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
      <span className="font-medium">{label}</span>
    </button>
  );
}
