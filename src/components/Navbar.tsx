import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0C0C0C]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 md:px-10 py-3 sm:py-4">
        {/* Logo / Name */}
        <a href="#" className="flex flex-col gap-0 text-left hover:opacity-70 transition-opacity">
          <span className="font-black text-base sm:text-lg tracking-tight text-white">Shafin</span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#D7E2EA]/60">AI/ML Engineer</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA]/80 hover:text-[#D7E2EA] text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Social Icons + CV */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://docs.google.com/document/d/1_mW4HdYo6vNaeToBxXim8H4s92BO9pGH/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA] text-sm font-medium uppercase tracking-wider hover:opacity-70 transition-opacity border border-[#D7E2EA]/20 px-4 py-1.5 rounded-full"
          >
            Preview CV
          </a>
          <a
            href="https://docs.google.com/document/d/1_mW4HdYo6vNaeToBxXim8H4s92BO9pGH/export?format=pdf"
            download
            className="text-[#D7E2EA] text-sm font-medium uppercase tracking-wider hover:opacity-70 transition-opacity border border-[#D7E2EA]/20 px-4 py-1.5 rounded-full"
          >
            Download CV
          </a>
          <a
            href="https://github.com/shafin027"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/shafin-mahamud/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#D7E2EA] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0C0C0C]/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col px-5 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#D7E2EA] text-sm font-medium uppercase tracking-wider hover:opacity-70 transition-opacity py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://docs.google.com/document/d/1_mW4HdYo6vNaeToBxXim8H4s92BO9pGH/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D7E2EA] text-sm font-medium uppercase tracking-wider hover:opacity-70 transition-opacity border border-[#D7E2EA]/20 px-4 py-1.5 rounded-full inline-block"
              >
                Preview CV
              </a>
              <a
                href="https://docs.google.com/document/d/1_mW4HdYo6vNaeToBxXim8H4s92BO9pGH/export?format=pdf"
                download
                className="text-[#D7E2EA] text-sm font-medium uppercase tracking-wider hover:opacity-70 transition-opacity border border-[#D7E2EA]/20 px-4 py-1.5 rounded-full inline-block"
              >
                Download CV
              </a>
              <div className="flex gap-4 pt-2 border-t border-[#D7E2EA]/10">
                <a
                  href="https://github.com/shafin027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shafin-mahamud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
