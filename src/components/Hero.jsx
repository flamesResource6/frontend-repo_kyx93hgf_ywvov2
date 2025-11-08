import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Building modern experiences for the web
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-white/80 max-w-xl"
            >
              I’m a full‑stack engineer crafting fast, accessible products with React, TypeScript, and cloud‑first APIs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium shadow-lg shadow-cyan-500/20">
                View Projects
              </a>
              <a href="#contact" className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium">
                Get in touch
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 rounded-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Carousel() {
  const slides = [
    {
      title: 'Interfaces that feel alive',
      desc: 'Micro‑interactions and motion that guide users without getting in the way.',
    },
    {
      title: '3D on the web',
      desc: 'Immersive scenes with Spline and Three.js, optimized for performance.',
    },
    {
      title: 'Production‑grade stacks',
      desc: 'TypeScript, React, FastAPI, and serverless to ship reliably and fast.',
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="flex gap-6 animate-[scroll_20s_linear_infinite] will-change-transform">
        {slides.map((s, i) => (
          <div key={i} className="min-w-[260px] sm:min-w-[320px] rounded-2xl bg-white/10 border border-white/10 p-5 text-white">
            <p className="text-sm text-white/70">{String(i + 1).padStart(2, '0')}</p>
            <h3 className="text-xl font-semibold mt-1">{s.title}</h3>
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
