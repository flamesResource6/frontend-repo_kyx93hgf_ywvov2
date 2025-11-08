import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => setStatus('Thanks! I will get back to you shortly.'), 800);
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/50" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white">
          <div className="flex items-center gap-2 mb-4">
            <Mail size={18} />
            <h2 className="text-2xl font-bold">Let’s build something</h2>
          </div>
          <p className="text-white/70 mb-6">Tell me about your project, timeline, and goals.</p>

          <form onSubmit={onSubmit} className="grid gap-4">
            <input required placeholder="Your name" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none text-white placeholder-white/60" />
            <input required type="email" placeholder="Email" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none text-white placeholder-white/60" />
            <textarea required rows={4} placeholder="Project details" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none text-white placeholder-white/60" />
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium">
              <Send size={16} /> Send message
            </button>
            {status && <p className="text-sm text-white/80">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
