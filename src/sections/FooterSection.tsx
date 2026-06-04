import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export function FooterSection() {
  return (
    <footer className="px-5 sm:px-8 md:px-10 pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-[#D7E2EA]/5">
      <div className="max-w-7xl mx-auto">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <FadeIn delay={0} y={10}>
            <div className="text-center md:text-left">
              <h3 className="hero-heading font-black text-lg sm:text-xl leading-none mb-1">
                Shafin Mahamud
              </h3>
              <p className="text-[#D7E2EA]/30 text-xs sm:text-sm uppercase tracking-wider">
                Computer Science Student
              </p>
            </div>
          </FadeIn>

          {/* Social Links - Slick Circular Buttons */}
          <FadeIn delay={0.15} y={10}>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/shafin027"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 flex items-center justify-center hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/20 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={16} className="text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/shafin-mahamud/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 flex items-center justify-center hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/20 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors" />
              </a>
              <a
                href="mailto:shafin.mahamud.95@gmail.com"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 flex items-center justify-center hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/20 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={16} className="text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Divider + Bottom Row */}
        <div className="border-t border-[#D7E2EA]/5 pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <FadeIn delay={0.2} y={10}>
            <p className="text-[#D7E2EA]/20 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Shafin Mahamud. All rights reserved.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} y={10}>
            <p className="text-[#D7E2EA]/20 text-xs flex items-center gap-1">
              Built with <Heart size={10} className="text-[#D7E2EA]/30" /> React + TypeScript + Tailwind
            </p>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
