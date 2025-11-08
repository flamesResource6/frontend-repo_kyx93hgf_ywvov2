import { useState } from 'react';

const tabs = [
  { key: 'frontend', label: 'Frontend', color: 'from-cyan-500 to-blue-600', items: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Three.js'] },
  { key: 'backend', label: 'Backend', color: 'from-purple-500 to-pink-600', items: ['FastAPI', 'Node.js', 'MongoDB', 'Prisma', 'REST & WebSockets'] },
  { key: 'devops', label: 'DevOps', color: 'from-emerald-500 to-teal-600', items: ['Docker', 'CI/CD', 'Vercel', 'AWS', 'Cloudflare'] },
];

export default function Tabs() {
  const [active, setActive] = useState('frontend');

  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium text-white/90 border border-white/10 backdrop-blur-xl transition ${
                active === t.key ? 'bg-white/15' : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {tabs
            .find((t) => t.key === active)
            ?.items.map((tech) => (
              <div
                key={tech}
                className="rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition"
              >
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r mb-3 ${
                  tabs.find((t) => t.key === active)?.color
                }`} />
                <h4 className="font-semibold">{tech}</h4>
                <p className="text-white/70 text-sm mt-1">Hands‑on experience crafting production interfaces with {tech}.</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
