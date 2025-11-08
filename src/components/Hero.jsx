import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-24">
      {/* 3D main object (interactive) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Non-blocking overlays for depth and focus */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />
        <div className="pointer-events-none absolute inset-0" style={{
          background:
            'radial-gradient(40% 30% at 50% 20%, rgba(16,185,129,0.10) 0%, rgba(0,0,0,0) 60%)',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm uppercase tracking-widest text-white/70"
            >
              Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Amit Vishwakarma
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-white/85 max-w-2xl"
            >
              Senior Full‑Stack Engineer crafting scalable, accessible, and high‑performance web applications with React/Next.js and Node.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href="mailto:amit.websitedev@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white"
              >
                <Mail size={16} /> Contact
              </a>
              <a
                href="https://linkedin.com/in/amit-vishwakarma-b46380193/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://github.com/Avte"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white"
              >
                <Github size={16} /> GitHub
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-white/70 text-sm"
            >
              <p>📞 +91 7999715006 · ✉️ amit.websitedev@gmail.com</p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 rounded-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
              <SummaryHighlights />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryHighlights() {
  const items = [
    {
      title: 'Professional Summary',
      desc:
        '4+ years building modular, TypeScript‑based systems across React/Next.js and Node.js with API & headless CMS integrations.',
    },
    {
      title: 'Key Strengths',
      desc:
        'Architecture · Performance · Component Systems · Headless CMS · AI‑assisted workflows',
    },
    {
      title: 'Impact',
      desc: 'Reduced overhead by 35%+ via caching & rendering strategies; improved DX and delivery speed.',
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="flex gap-4 animate-[scroll_20s_linear_infinite] will-change-transform">
        {items.concat(items).map((s, i) => (
          <div key={i} className="min-w-[260px] sm:min-w-[300px] rounded-2xl bg-white/10 border border-white/10 p-5 text-white">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="text-white/80 mt-2 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
