import React from 'react';

export function StatusBadge({ status }) {
  const styles = status === 'Resolved' 
    ? 'bg-green-500/20 text-green-400 border-green-500/30' 
    : 'bg-amber-500/20 text-amber-400 border-amber-500/30';

  return (
    <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${styles}`}>
      {status}
    </span>
  );
}
