import React from 'react';

export function StatCard({ icon: Icon, title, value, color, trend }) {
  const colorClasses = {
    blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
    green: 'from-green-500/20 to-green-600/10 border-green-500/30',
    red: 'from-red-500/20 to-red-600/10 border-red-500/30'
  };

  const iconColors = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    red: 'text-red-400'
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-transform duration-200`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-slate-900/50 ${iconColors[color]}`}>
          <Icon size={24} />
        </div>
      </div>
      <h3 className="text-4xl font-bold mb-1">{value}</h3>
      <p className="text-slate-400 font-medium">{title}</p>
      <p className="text-xs text-slate-500 mt-2">{trend}</p>
    </div>
  );
}
