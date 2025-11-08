import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tabs from './components/Tabs';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white">
      <Navbar />

      <main>
        <Hero />
        <Tabs />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white/60 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name — Full‑stack Developer</p>
          <p>
            Built with React, Tailwind, Framer Motion, and Spline
          </p>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-40 -left-40 h-80 w-80 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 bg-purple-600/20 blur-3xl rounded-full" />
      </div>
    </div>
  );
}

export default App;
