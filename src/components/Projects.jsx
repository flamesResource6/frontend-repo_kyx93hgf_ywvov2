import { useRef, useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const total = projects.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    if (isHovering) return; // pause on hover for control
    const id = setInterval(next, 4200);
    return () => clearInterval(id);
  }, [isHovering]);

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Projects</h2>
          <a href="#contact" className="text-sm text-white/80 hover:text-white inline-flex items-center gap-1">
            Work together <ArrowRight size={16} />
          </a>
        </div>

        {/* Theater-style carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative h-[380px] sm:h-[420px] md:h-[460px] flex items-center justify-center perspective-[1200px]">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Stage slots: center + sides with depth */}
            <div className="relative w-full h-full">
              {[-1, 0, 1].map((offset) => {
                const i = (index + offset + total) % total;
                const p = projects[i];
                const isCenter = offset === 0;
                const rotate = offset * 10; // subtle theater fan
                const translateZ = isCenter ? 120 : 0;
                const translateX = offset * 140;
                const scale = isCenter ? 1 : 0.86;

                return (
                  <motion.article
                    key={`${i}-${offset}`}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                      isCenter ? 'z-20' : offset === -1 ? 'z-10' : 'z-10'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotate}deg)`,
                      width: isCenter ? '64%' : '48%',
                      filter: isCenter ? 'none' : 'blur(0.2px) saturate(0.9)',
                    }}
                  >
                    <div className={`group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl ${
                      isCenter ? 'ring-1 ring-cyan-400/20' : 'opacity-80'
                    }`}>
                      <div className="h-56 sm:h-64 md:h-72 bg-gradient-to-br from-cyan-500/30 to-purple-600/30 border-b border-white/10" />
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                        <p className="text-white/80 mt-1 text-sm leading-relaxed">{p.desc}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/80">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              aria-label="Previous project"
              onClick={prev}
              className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
            >
              <ChevronLeft size={18} className="mx-auto" />
            </button>
            <div className="flex gap-1">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next project"
              onClick={next}
              className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
            >
              <ChevronRight size={18} className="mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
