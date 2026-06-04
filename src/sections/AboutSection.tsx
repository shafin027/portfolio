import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { Code, Terminal, FileCode, Cloud, GitBranch, Brain, Cpu, Eye, Layers, BarChart3, MessageCircle, Server, Coffee } from 'lucide-react';

const ABOUT_LINES = [
  'A Computer Science student at Brac University with a strong interest in Machine Learning, AI, Data Science, and Full-Stack Development.',
  'Focused on building practical software, intelligent systems, and real-world technical projects that connect problem-solving with clean, useful implementation.',
];

const SKILLS = [
  { label: 'Python', icon: Code },
  { label: 'Java', icon: Coffee },
  { label: 'C', icon: Terminal },
  { label: 'HTML/CSS', icon: FileCode },
  { label: 'PHP', icon: Code },
  { label: 'AWS', icon: Cloud },
  { label: 'Git', icon: GitBranch },
  { label: 'Machine Learning', icon: Brain },
  { label: 'Deep Learning', icon: Cpu },
  { label: 'NLP', icon: MessageCircle },
  { label: 'Computer Vision', icon: Eye },
  { label: 'xv6 OS', icon: Server },
  { label: 'Full-Stack', icon: Layers },
  { label: 'Data Science', icon: BarChart3 },
];

export function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const lineOpacities = ABOUT_LINES.map((_, index) =>
    useTransform(
      scrollYProgress,
      [index * 0.2, index * 0.2 + 0.15, index * 0.2 + 0.35],
      [0.2, 0.2, 1]
    )
  );

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 max-w-4xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 4.25rem)' }}
          >
            About me
          </h2>
        </FadeIn>

        <motion.div
          ref={textRef}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[640px]"
          style={{ fontSize: 'clamp(1.05rem, 2vw, 1.45rem)' }}
        >
          {ABOUT_LINES.map((line, index) => (
            <motion.p
              key={index}
              className="mb-5 last:mb-0"
              style={{ opacity: lineOpacities[index], whiteSpace: 'pre-wrap' }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        <FadeIn delay={0.2} y={20}>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {SKILLS.map((skill) => {
              const Icon = skill.icon;
              return (
                <span
                  key={skill.label}
                  className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/10 bg-[#141418]/80 px-4 py-2 text-xs sm:text-sm text-[#D7E2EA]/80 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
                >
                  <Icon size={14} className="text-[#D7E2EA]" />
                  {skill.label}
                </span>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-sm text-[#D7E2EA]/60">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/10 bg-[#141418]/80 px-4 py-2">
              <span>📍</span>
              Dhaka, Bangladesh
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/10 bg-[#141418]/80 px-4 py-2">
              <span>🎓</span>
              Brac University — CGPA: 3.61/4.00
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/10 bg-[#141418]/80 px-4 py-2">
              <span>📧</span>
              shafin.mahamud.95@gmail.com
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
