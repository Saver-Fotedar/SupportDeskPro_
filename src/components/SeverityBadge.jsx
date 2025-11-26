import React from 'react';

export function SeverityBadge({ severity }) {
  const styles = {
    Low: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    Medium: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    High: 'bg-red-500/20 text-red-400 border-red-500/30'
  };

  return (
    <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${styles[severity]}`}>
      {severity}
    </span>
  );
}
