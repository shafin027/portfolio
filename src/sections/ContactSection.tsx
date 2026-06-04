import { FadeIn } from '../components/FadeIn';
import { Button } from '../components/Button';
import { MapPin } from 'lucide-react';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { SiGithub, SiKaggle } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import GradientMenu from '../components/ui/gradient-menu';

const CONTACT_INFO = [
  {
    title: 'Email',
    detail: 'shafin.mahamud.95@gmail.com',
    href: 'mailto:shafin.mahamud.95@gmail.com',
    external: false,
    icon: <IoMailOutline />,
    gradientFrom: '#a955ff',
    gradientTo: '#ea51ff',
  },
  {
    title: 'Phone',
    detail: '+8801533764560',
    href: 'tel:+8801533764560',
    external: false,
    icon: <IoCallOutline />,
    gradientFrom: '#56CCF2',
    gradientTo: '#2F80ED',
  },
  {
    title: 'LinkedIn',
    detail: 'linkedin.com/in/shafin-mahamud',
    href: 'https://www.linkedin.com/in/shafin-mahamud/',
    external: true,
    icon: <FaLinkedin />,
    gradientFrom: '#34D399',
    gradientTo: '#06B6D4',
  },
  {
    title: 'GitHub',
    detail: 'github.com/shafin027',
    href: 'https://github.com/shafin027',
    external: true,
    icon: <SiGithub />,
    gradientFrom: '#F97316',
    gradientTo: '#EF4444',
  },
  {
    title: 'Kaggle',
    detail: 'kaggle.com/shafin11027',
    href: 'https://www.kaggle.com/shafin11027',
    external: true,
    icon: <SiKaggle />,
    gradientFrom: '#FB7185',
    gradientTo: '#C026D3',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 md:h-96 -z-10 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.14),_transparent_35%),radial-gradient(circle_at_20%_30%,_rgba(59,130,246,0.12),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(236,72,153,0.1),_transparent_20%)]" />
      <div className="max-w-7xl mx-auto text-center relative">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-4 sm:mb-6"
            style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)' }}
          >
            Let&apos;s build something
            <br />
            useful, intelligent, and real.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <p className="text-[#D7E2EA]/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
            I am open to{' '}
            <span className="text-[#D7E2EA]/80">internships, research collaborations, machine learning projects, cloud engineering opportunities, and full-stack development work.</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <div className="mx-auto mb-6 max-w-4xl overflow-hidden rounded-[24px] border border-white/10 bg-[#0F1218]/80 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
            <GradientMenu items={CONTACT_INFO} className="min-h-[160px]" />
          </div>
        </FadeIn>

        {/* Location */}
        <FadeIn delay={0.55} y={20}>
          <div className="flex items-center justify-center gap-2 text-[#D7E2EA]/30 text-sm mb-6">
            <MapPin size={14} />
            <span>Dhaka, Bangladesh</span>
          </div>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={0.6} y={20}>
          <Button
            href="mailto:shafin.mahamud.95@gmail.com"
            variant="primary"
            size="lg"
          >
            Get In Touch
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
