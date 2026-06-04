import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Brain,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  Youtube,
} from 'lucide-react';
import { ParticlesBackground } from '../components/ParticlesBackground';

const trainingCards = [
  { label: 'Epoch', value: '23 / 100', progress: 0.23 },
  { label: 'Train Loss', value: '0.142', progress: 0.76 },
  { label: 'Val Accuracy', value: '94.1%', progress: 0.94 },
  { label: 'Macro F1', value: '0.93', progress: 0.93 },
];

const values = ['Focused on Performance', 'Driven by Curiosity', 'Powered by Data'];

const connectLinks = [
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/itstheshafin/' },
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/itstheshafin/' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/shafin-mahamud/' },
  { label: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@itstheshafin' },
  { label: 'Email', icon: Mail, href: 'mailto:shafin.mahamud.95@gmail.com' },
];

const sparklineA = '0 26 12 22 24 24 36 18 48 16 60 12 72 10 84 8 96 6 108 4';

function Sparkline({ stroke }: { stroke: string }) {
  return (
    <svg viewBox="0 0 110 28" className="h-7 w-24" fill="none">
      <motion.polyline
        points={sparklineA}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#090b10,_#050607_55%,_#020304_100%)] text-[#D7E2EA]">
      <div className="absolute inset-0 pointer-events-none">
        <ParticlesBackground />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(215,226,234,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(215,226,234,0.12) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,_rgba(56,189,248,0.10),_transparent_35%),radial-gradient(circle_at_80%_30%,_rgba(16,185,129,0.08),_transparent_45%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-20 sm:px-8 lg:px-12">
        <div className="flex justify-end">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#D7E2EA]/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.5)]" />
            Model Training in Progress
            <Sparkline stroke="#7DD3FC" />
          </div>
        </div>

        <div className="relative mt-10 flex flex-col items-center gap-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden lg:flex justify-between text-[clamp(5rem,15vw,14rem)] font-black uppercase tracking-[-0.08em] text-white/10">
            <span className="pl-2">SHAFIN</span>
            <span className="pr-2">MAHAMUD</span>
          </div>

          <div className="relative w-full max-w-[420px]">
            <div className="absolute -inset-6 rounded-[40px] bg-sky-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0B121A]/90 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0A1018]">
                <img
                  src="/uploads/avatar.png"
                  alt="Portrait of Shafin Mahamud"
                  className="h-[420px] w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/420x520?text=Shafin+Mahamud';
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_rgba(34,211,238,0.2),_transparent_55%)]" />
              </div>
              <div className="mt-5 rounded-[28px] border border-white/10 bg-[#0A1018]/90 p-4 text-white/80">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/40">Model stage</p>
                <p className="mt-3 text-2xl font-semibold text-white">Epoch 23 / 100</p>
                <p className="mt-2 text-sm text-[#D7E2EA]/60">Accuracy improving, fine-tuning UX and performance.</p>
              </div>
            </div>
          </div>

          <div className="grid w-full gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-[#0C0C0C]/90 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/70">
                <Brain className="h-5 w-5 text-sky-200" />
                AI Portfolio
              </div>
              <p className="mt-6 text-base leading-7 text-white/80">
                I build, train, and optimize intelligent systems that learn, adapt, and deliver real-world impact.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/60">
                From model development to evaluation, I transform complex data into measurable results.
              </p>
              <div className="mt-6 space-y-3 text-sm text-white/70">
                {values.map((value) => (
                  <div key={value} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-sky-200" />
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-[#0C0C0C]/90 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/70">AI/ML Focus</div>
              <h1 className="mt-5 text-[clamp(2.3rem,4vw,3.2rem)] font-semibold leading-tight text-white">
                Building, training, and optimizing <span className="text-sky-300">intelligent systems</span>
              </h1>
              <p className="mt-4 text-base leading-7 text-white/70">
                End-to-end expertise in designing, training, evaluating, and deploying machine learning models.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="group inline-flex items-center gap-2 rounded-full bg-sky-400/20 px-6 py-3 text-sm font-semibold text-sky-100 shadow-[0_0_30px_rgba(125,211,252,0.35)] transition hover:bg-sky-400/30">
                  View Projects
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/80 backdrop-blur transition hover:border-sky-200/40">
                  Let&apos;s Collaborate
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full rounded-[32px] border border-white/10 bg-[#0C0C0C]/90 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-[#08121A]/90 p-5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[#D7E2EA]/70">
                  <Terminal className="h-4 w-4 text-sky-200" />
                  Training Console
                </div>
                <p className="mt-4 font-mono text-sky-100">$ python train.py --model transformer --epochs 100 --data dataset_v2</p>
                <p className="mt-2 text-white/60">Training...</p>
                <div className="mt-4 h-2 rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300"
                    initial={{ width: 0 }}
                    animate={{ width: '23%' }}
                    transition={{ duration: 1.4, ease: 'easeOut' }}
                  />
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/40">23/100 epochs</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-[#08121A]/90 p-5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[#D7E2EA]/70">
                  <Sparkles className="h-4 w-4 text-sky-200" />
                  Connect
                </div>
                <div className="mt-4 space-y-3 text-sm text-white/70">
                  {connectLinks.map(({ label, icon: Icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-between rounded-xl border border-white/5 px-3 py-2 transition hover:text-[#F8FAFC]"
                    >
                      <span className="flex items-center gap-2"><Icon className="h-4 w-4 text-sky-200" />{label}</span>
                      <ChevronRight className="h-4 w-4 text-sky-200" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid w-full grid-cols-2 gap-4 text-xs uppercase tracking-[0.3em] text-white/60 sm:grid-cols-3 lg:grid-cols-4">
            {trainingCards.map((card) => (
              <div key={card.label} className="rounded-3xl border border-white/10 bg-[#0A1018]/90 p-4 text-sm text-white/70 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-white/40">
                  <span>{card.label}</span>
                  <span>{card.value}</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.round(card.progress * 100)}%` }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
