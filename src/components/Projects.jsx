import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';

const projects = [
  {
    title: 'Realtime Dashboard',
    desc: 'Streaming analytics with websockets, live charts, and role‑based access.',
    tags: ['React', 'FastAPI', 'WebSockets'],
    colors: ['#22d3ee', '#a78bfa'],
  },
  {
    title: '3D Product Configurator',
    desc: 'Interactive 3D viewer with materials, lighting, and AR‑ready exports.',
    tags: ['Three.js', 'Spline', 'GLTF'],
    colors: ['#34d399', '#60a5fa'],
  },
  {
    title: 'E‑commerce Platform',
    desc: 'Headless storefront with payments, search, and serverless functions.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    colors: ['#fb7185', '#f59e0b'],
  },
  {
    title: 'AI Writing Assistant',
    desc: 'Prompt tooling, embeddings search, and collaborative editing.',
    tags: ['React', 'Python', 'LLM'],
    colors: ['#f472b6', '#22d3ee'],
  },
  {
    title: 'DevOps Toolkit',
    desc: 'Pipelines, previews, and observability with infra as code.',
    tags: ['Docker', 'K8s', 'Grafana'],
    colors: ['#60a5fa', '#a78bfa'],
  },
];

function useAutoplay(active, cb, delay = 4500) {
  useEffect(() => {
    if (!active) return;
    const id = setInterval(cb, delay);
    return () => clearInterval(id);
  }, [active, cb, delay]);
}

export default function Projects() {
  const [index, setIndex] = useState(0);
  const total = projects.length;
  const [hover, setHover] = useState(false);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  useAutoplay(!hover, next, 5200);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const visible = useMemo(() => [-2, -1, 0, 1, 2], []);

  return (
    <section id="projects" className="relative py-24">
      {/* Ambient wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-cyan-500/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Featured Projects</h2>
            <p className="text-white/70 mt-2 max-w-2xl">A curated selection of work spanning realtime systems, 3D, commerce, and AI tooling.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-1 text-white/80 hover:text-white">
            Work together <ArrowRight size={16} />
          </a>
        </div>

        {/* Cinematic carousel */}
        <div
          ref={containerRef}
          className="relative select-none"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="relative h-[460px] sm:h-[520px] md:h-[560px]">
            {/* Stage lighting */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="absolute inset-0 [perspective:1400px]">
              {visible.map((offset) => {
                const i = (index + offset + total) % total;
                const item = projects[i];
                const isCenter = offset === 0;
                const depth = isCenter ? 160 : 40 * (2 - Math.abs(offset));
                const rotateY = offset * 10; // subtle fan
                const translateX = offset * 220; // spacing between cards
                const scale = isCenter ? 1 : 0.86 - Math.abs(offset) * 0.03;
                const zIndex = 50 - Math.abs(offset);

                return (
                  <AnimatePresence key={`${i}-${offset}`}>
                    <motion.article
                      initial={{ opacity: 0, y: 24, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: [0.22, 0.8, 0.2, 1] }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: `translateX(${translateX}px) translateZ(${depth}px) rotateY(${rotateY}deg)`,
                        zIndex,
                        width: isCenter ? '62%' : '48%',
                      }}
                    >
                      <Card item={item} highlight={isCenter} />
                    </motion.article>
                  </AnimatePresence>
                );
              })}
            </div>

            {/* Drag layer */}
            <motion.div
              className="absolute inset-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 80) prev();
                if (info.offset.x < -80) next();
              }}
            />
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              aria-label="Previous project"
              onClick={prev}
              className="h-11 w-11 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 active:scale-95 transition"
            >
              <ChevronLeft size={18} className="mx-auto" />
            </button>
            <div className="flex items-center gap-2">
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
              className="h-11 w-11 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 active:scale-95 transition"
            >
              <ChevronRight size={18} className="mx-auto" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-1 w-full rounded-full bg-white/10 overflow-hidden">
            <motion.div
              key={index}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5.2, ease: 'linear' }}
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ item, highlight }) {
  const [c1, c2] = item.colors;
  return (
    <div
      className={`group rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_10px_50px_-12px_rgba(0,0,0,0.6)] ${
        highlight ? 'ring-1 ring-cyan-400/20' : 'opacity-90'
      }`}
    >
      {/* Media mock with layered gradients and noise */}
      <div
        className="relative aspect-[16/9] border-b border-white/10"
        style={{
          background:
            `radial-gradient(120% 100% at 20% 0%, ${c1}33 0%, transparent 60%),` +
            `radial-gradient(120% 100% at 80% 100%, ${c2}33 0%, transparent 60%),` +
            'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.06) 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\" viewBox=\"0 0 40 40\"><path fill=\"white\" fill-opacity=\"0.6\" d=\"M0 39h40v1H0zM39 0v40h1V0z\"/></svg>")',
            backgroundSize: '140px 140px',
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
        <p className="text-white/80 mt-1 text-sm leading-relaxed">{item.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
