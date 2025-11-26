import React from 'react';
import { useApp } from '../context/AppContext';

export function NavItem({ icon: Icon, label, page }) {
  const { currentPage, setCurrentPage } = useApp();
  const isActive = currentPage === page;

  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
        isActive 
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
          : 'hover:bg-slate-800/50 text-slate-400 hover:text-slate-200'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );
}
