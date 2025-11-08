import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Home, FolderGit2, PanelsTopLeft, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tabs from './components/Tabs';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [view, setView] = useState('home');

  const views = useMemo(
    () => [
      { key: 'home', label: 'Home', icon: Home, component: <Hero /> },
      { key: 'projects', label: 'Projects', icon: FolderGit2, component: <Projects /> },
      { key: 'skills', label: 'Skills', icon: PanelsTopLeft, component: <Tabs /> },
      { key: 'contact', label: 'Contact', icon: Mail, component: <Contact /> },
    ],
    []
  );

  const current = views.find((v) => v.key === view) ?? views[0];

  const pageVariants = {
    initial: { opacity: 0, y: 16, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -16, scale: 0.98 },
  };

  return (
    <div className="min-h-screen bg-[#0b0b12] text-white">
      <Navbar current={view} onNavigate={setView} />

      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {current.component}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white/60 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name — Full‑stack Developer</p>
          <p>Built with React, Tailwind, Framer Motion, and Spline</p>
        </div>
      </footer>

      {/* Floating dock navigation for quick exploration */}
      <nav aria-label="Section navigation" className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden sm:flex">
        <ul className="flex flex-col gap-3">
          {views.map((v) => {
            const Icon = v.icon;
            const active = v.key === view;
            return (
              <li key={v.key}>
                <button
                  onClick={() => setView(v.key)}
                  className={`group relative inline-flex items-center justify-center h-11 w-11 rounded-xl border transition 
                    ${active ? 'border-cyan-400/50 bg-white/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                  aria-current={active ? 'page' : undefined}
                  aria-label={v.label}
                >
                  <Icon size={18} className={active ? 'text-white' : 'text-white/80 group-hover:text-white'} />
                  <span className="pointer-events-none absolute left-0 -translate-x-full mr-2 hidden whitespace-nowrap rounded-md bg-white/10 px-2 py-1 text-xs text-white/90 backdrop-blur-md md:group-hover:block">
                    {v.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Ambient glow blobs that don't block interaction */}
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-40 -left-40 h-80 w-80 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 bg-purple-600/20 blur-3xl rounded-full" />
      </div>
    </div>
  );
}

export default App;
