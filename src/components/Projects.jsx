import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    desc: 'Streaming analytics with websockets, charts, and role‑based access.',
    tags: ['React', 'FastAPI', 'WebSockets'],
  },
  {
    title: '3D Product Configurator',
    desc: 'Interactive 3D viewer with materials, lighting, and AR‑ready exports.',
    tags: ['Three.js', 'Spline', 'GLTF'],
  },
  {
    title: 'E‑commerce Platform',
    desc: 'Headless storefront with payments, search, and serverless functions.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
  },
  {
    title: 'AI Writing Assistant',
    desc: 'Prompt tooling, embeddings search, and rich editor collaboration.',
    tags: ['React', 'Python', 'LLM'],
  },
];

export default function Projects() {
  const containerRef = useRef(null);

  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Projects</h2>
          <a href="#contact" className="text-sm text-white/80 hover:text-white inline-flex items-center gap-1">
            Work together <ArrowRight size={16} />
          </a>
        </div>

        <div ref={containerRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-white hover:bg-white/10 transition">
              <div className="h-36 rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-600/30 border border-white/10 mb-4" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-white/70 text-sm mt-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
