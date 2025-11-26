import React, { useState } from 'react';
import { Menu, Home, Ticket, Plus, BookOpen, GraduationCap, AlertTriangle, Sun, Moon } from 'lucide-react';
import { AppContext } from './context/AppContext';
import { Portfolio } from './pages/Portfolio';
import { About } from './pages/About';
import { AnimatePresence, motion } from 'framer-motion';
import { useTickets } from './hooks/useTickets';
import { NavItem } from './components/NavItem';
import { Dashboard } from './pages/Dashboard';
import { TicketsPage } from './pages/TicketsPage';
import { CreateTicket } from './pages/CreateTicket';
import { KnowledgeBase } from './pages/KnowledgeBase';
import { Training } from './pages/Training';
import { ErrorSimulator } from './pages/ErrorSimulator';

export default function App() {
  const [currentPage, setCurrentPage] = useState('portfolio');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState('dark');
  const ticketsManager = useTickets();

  return (
    <AppContext.Provider value={{ ...ticketsManager, currentPage, setCurrentPage, theme, setTheme }}>
      <div className={theme === 'dark' ? "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100" : "min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 text-slate-900"}>
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-slate-800/50">
          <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <Menu size={24} />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Ticket className="text-white" size={20} />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  SupportDeskPro
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/70 hover:bg-slate-700/80 border border-slate-700 text-xs sm:text-sm transition-colors"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun size={16} className="text-amber-300" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={16} className="text-blue-300" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
              <div className="hidden sm:block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs sm:text-sm text-blue-400">
                Modern Edition
              </div>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-slate-900/50 backdrop-blur-xl border-r border-slate-800/50 transition-transform duration-300 z-40`}>
            <nav className="p-4 space-y-2">
              <NavItem icon={Home} label="Portfolio" page="portfolio" />
              <NavItem icon={Home} label="Dashboard" page="dashboard" />
              <NavItem icon={Ticket} label="Tickets" page="tickets" />
              <NavItem icon={Plus} label="Create Ticket" page="create" />
              <NavItem icon={BookOpen} label="Knowledge Base" page="kb" />
              <NavItem icon={GraduationCap} label="Training" page="training" />
              <NavItem icon={AlertTriangle} label="Error Simulator" page="simulator" />
              <NavItem icon={GraduationCap} label="About Me" page="about" />
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <PageRouter />
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
}

function PageRouter() {
  const { currentPage } = React.useContext(AppContext);

  const renderPage = () => {
    switch (currentPage) {
      case 'portfolio':
        return <Portfolio />;
      case 'dashboard':
        return <Dashboard />;
      case 'tickets':
        return <TicketsPage />;
      case 'create':
        return <CreateTicket />;
      case 'kb':
        return <KnowledgeBase />;
      case 'training':
        return <Training />;
      case 'simulator':
        return <ErrorSimulator />;
      case 'about':
        return <About />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25 }}
      >
        {renderPage()}
      </motion.div>
    </AnimatePresence>
  );
}
