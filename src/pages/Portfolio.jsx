import React from "react";
import { Ticket, Github, ExternalLink } from "lucide-react";

export function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <section className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="flex-1 space-y-3">
          <p className="text-sm uppercase tracking-wide text-blue-400 font-semibold">
            Portfolio • Demo Project
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            SupportDeskPro — Modern Technical Support Dashboard
          </h2>
          <p className="text-slate-300">
            A React + Tailwind application that simulates how I would handle
            client tickets, document solutions, onboard users, and debug issues
            in a real-world support environment.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
              React + Vite
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-200 border border-purple-500/30">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-200 border border-emerald-500/30">
              Technical Support
            </span>
          </div>
        </div>
        <div className="shrink-0 w-full md:w-48">
          <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white shadow-xl shadow-blue-500/30">
            <Ticket size={36} />
            <p className="mt-2 text-sm">SupportDeskPro</p>
            <p className="text-xs text-slate-100/80">Modern Edition</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5">
          <h3 className="font-semibold mb-2 text-slate-50">What it showcases</h3>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>• Ticket lifecycle & prioritization</li>
            <li>• Knowledge base & documentation</li>
            <li>• Training & onboarding flow</li>
            <li>• Error reproduction & console logs</li>
          </ul>
        </div>
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5">
          <h3 className="font-semibold mb-2 text-slate-50">Tech skills</h3>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>• React components & hooks</li>
            <li>• Context for global state</li>
            <li>• Tailwind utility styling</li>
            <li>• Vite build setup</li>
          </ul>
        </div>
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5">
          <h3 className="font-semibold mb-2 text-slate-50">Soft skills</h3>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>• Clear communication</li>
            <li>• Structured debugging</li>
            <li>• Client-centric thinking</li>
            <li>• Documentation & training</li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-slate-50 mb-1">
            See the project in action
          </h3>
          <p className="text-sm text-slate-300">
            Use the sidebar to explore the Dashboard, Tickets, Knowledge Base,
            Training, and Error Simulator sections.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
          >
            <ExternalLink size={16} />
            Open App Sections
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 text-slate-200 text-sm hover:bg-slate-800/70 transition-colors"
          >
            <Github size={16} />
            View on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
