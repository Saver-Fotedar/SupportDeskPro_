import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export function ErrorSimulator() {
  const [lastError, setLastError] = useState(null);

  const simulateError = (type) => {
    const timestamp = new Date().toLocaleTimeString();

    if (type === 'login') {
      console.error('SIM_ERROR_LOGIN: Authentication failed at', timestamp);
      setLastError({ type: 'Login Failure', time: timestamp, code: 'AUTH_001' });
    } else if (type === 'api') {
      console.error('SIM_ERROR_API: API timeout at', timestamp);
      setLastError({ type: 'API Timeout', time: timestamp, code: 'NET_504' });
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-3xl font-bold mb-2">Error Simulator</h2>
        <p className="text-slate-400">Test error handling and logging</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-red-500/30 transition-colors">
          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
            <X className="text-red-400" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Login Failure</h3>
          <p className="text-slate-400 mb-4">Simulate authentication error</p>
          <button
            onClick={() => simulateError('login')}
            className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-colors"
          >
            Trigger Error
          </button>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/30 transition-colors">
          <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
            <AlertTriangle className="text-amber-400" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">API Timeout</h3>
          <p className="text-slate-400 mb-4">Simulate network timeout (504)</p>
          <button
            onClick={() => simulateError('api')}
            className="w-full px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-xl transition-colors"
          >
            Trigger Error
          </button>
        </div>
      </div>

      {lastError && (
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="text-amber-400" size={20} />
            Last Simulated Error
          </h3>
          <div className="bg-slate-900/50 rounded-xl p-4 font-mono text-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-red-400">{lastError.type}</span>
              <span className="text-slate-500">{lastError.time}</span>
            </div>
            <div className="text-slate-400">
              Error Code: <span className="text-amber-400">{lastError.code}</span>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              Check browser console for detailed logs
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-2">How to Use</h3>
        <ul className="space-y-2 text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-1">•</span>
            <span>Click any error button to simulate that specific error type</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-1">•</span>
            <span>Open browser DevTools (F12) and check the Console tab</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-1">•</span>
            <span>Review error messages and practice debugging techniques</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
