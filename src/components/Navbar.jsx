import { useState } from 'react';
import { Menu, X, Rocket, Mail, Github, Linkedin } from 'lucide-react';

export default function Navbar({ current = 'home', onNavigate = () => {} }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'projects', label: 'Projects' },
    { key: 'skills', label: 'Skills' },
    { key: 'contact', label: 'Contact' },
  ];

  const handleNav = (key) => {
    onNavigate(key);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => handleNav('home')} className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight text-white">Dev Portfolio</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const active = current === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNav(item.key)}
                  className={`text-sm transition-colors relative group ${
                    active ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 bg-gradient-to-r from-cyan-400 to-purple-500 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              );
            })}
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                <Linkedin size={18} />
              </a>
              <button onClick={() => handleNav('contact')} className="ml-2 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 transition">
                <Mail size={16} /> Contact
              </button>
            </div>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                className={`block w-full text-left rounded-md px-3 py-2 ${
                  current === item.key ? 'text-white bg-white/10' : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                <Linkedin size={18} />
              </a>
              <button onClick={() => handleNav('contact')} className="ml-auto inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 transition">
                <Mail size={16} /> Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
