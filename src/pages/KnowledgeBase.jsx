import React from 'react';

export function KnowledgeBase() {
  const articles = [
    {
      title: 'Tasks not showing',
      body: 'This issue typically occurs when LocalStorage is blocked or full. Clear your browser cache or check browser storage settings.',
      category: 'Common Issues'
    },
    {
      title: 'Login failed',
      body: 'If you see a simulated error, check the browser console for detailed error messages. This is part of the error simulator feature.',
      category: 'Troubleshooting'
    },
    {
      title: 'API timeout',
      body: 'Simulated 504 errors can be found in the network tab. Check your network connection and API endpoint configuration.',
      category: 'Network Issues'
    },
    {
      title: 'Best Practices',
      body: 'Always include detailed steps to reproduce issues in your tickets. This helps the support team resolve problems faster.',
      category: 'Tips'
    }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-3xl font-bold mb-2">Knowledge Base</h2>
        <p className="text-slate-400">Browse helpful articles and guides</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, idx) => (
          <div key={idx} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg text-xs font-medium">
                {article.category}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">{article.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
