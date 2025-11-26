import React from "react";
import { Mail, Linkedin, FileText } from "lucide-react";

export function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <p className="text-slate-400">
          Learn more about the person behind SupportDeskPro
        </p>
      </div>

      <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-blue-500/40 shadow-xl">
            <img
              src="/pp.jpg"
              alt="Saver Fotedar"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Saver Fotedar</h3>
            <p className="text-sm text-slate-400 mt-1">
              Frontend Developer & Technical Support Engineer
            </p>
          </div>
        </div>

        <p className="text-slate-300 leading-relaxed">
          I enjoy building clean, user-friendly interfaces and helping users
          solve real-world technical problems. My focus is on combining{" "}
          <span className="text-blue-300 font-medium">frontend skills</span>{" "}
          with{" "}
          <span className="text-blue-300 font-medium">
            strong support practices
          </span>
          : clear communication, structured debugging, and patient customer
          handling.
        </p>

        <p className="text-slate-400">
          SupportDeskPro is a demo project I created to showcase how I would
          manage tickets, reproduce bugs, document solutions, and train clients
          on a product.
        </p>

        <div className="pt-2 space-y-3">
          <h4 className="text-lg font-semibold text-slate-200">
            Connect with me
          </h4>

          <div className="flex items-center gap-3">
            <Mail size={18} className="text-blue-400" />
            <a
              href="mailto:saverfotedar123@gmail.com"
              className="text-blue-400 hover:underline text-sm"
            >
              saverfotedar123@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Linkedin size={18} className="text-blue-400" />
            <a
              href="https://linkedin.com/in/saver-fotedar-sf18/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm"
            >
              Linkedin
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <FileText size={18} className="text-blue-400" />
            <a
              href="/Resume_SAVER-FOTEDAR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 rounded-lg border border-blue-500/40 bg-blue-500/10 text-blue-300 text-sm hover:bg-blue-500/20 transition-colors"
            >
              Download Resume (PDF)
            </a>
          </div>
          <p className="text-xs text-slate-500">
            Tip: place your actual resume file as <code>public/resume.pdf</code>{" "}
            in the project.
          </p>
        </div>
      </div>
    </div>
  );
}
