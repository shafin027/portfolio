import React from 'react';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { SiGithub, SiKaggle } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export type GradientMenuItem = {
  title: string;
  detail: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
  gradientFrom: string;
  gradientTo: string;
};

type GradientMenuProps = {
  items?: GradientMenuItem[];
  className?: string;
};

const defaultItems: GradientMenuItem[] = [
  {
    title: 'Email',
    detail: 'shafin.mahamud.95@gmail.com',
    icon: <IoMailOutline />, 
    href: 'mailto:shafin.mahamud.95@gmail.com',
    gradientFrom: '#a955ff',
    gradientTo: '#ea51ff',
  },
  {
    title: 'Phone',
    detail: '+8801533764560',
    icon: <IoCallOutline />,
    href: 'tel:+8801533764560',
    gradientFrom: '#56CCF2',
    gradientTo: '#2F80ED',
  },
  {
    title: 'LinkedIn',
    detail: 'linkedin.com/in/shafin-mahamud',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/shafin-mahamud/',
    external: true,
    gradientFrom: '#34D399',
    gradientTo: '#06B6D4',
  },
  {
    title: 'GitHub',
    detail: 'github.com/shafin027',
    icon: <SiGithub />,
    href: 'https://github.com/shafin027',
    external: true,
    gradientFrom: '#F97316',
    gradientTo: '#EF4444',
  },
  {
    title: 'Kaggle',
    detail: 'kaggle.com/shafin-mahamud',
    icon: <SiKaggle />,
    href: 'https://www.kaggle.com/shafin-mahamud',
    external: true,
    gradientFrom: '#FB7185',
    gradientTo: '#C026D3',
  },
];

export default function GradientMenu({ items = defaultItems, className = '' }: GradientMenuProps) {
  return (
    <div className={`flex justify-center items-center min-h-[220px] bg-transparent ${className}`}>
      <ul className="flex flex-wrap justify-center gap-4 px-2 py-2">
        {items.map(({ title, detail, icon, href, external, gradientFrom, gradientTo }, idx) => (
          <li key={idx} className="group relative">
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={`${title}: ${detail}`}
              className="relative block w-[52px] h-[52px] rounded-full bg-white shadow-lg overflow-hidden transition-all duration-500 hover:w-[180px] hover:shadow-none"
              style={{ '--gradient-from': gradientFrom, '--gradient-to': gradientTo } as React.CSSProperties}
            >
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100" />
              <span className="absolute top-[10px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50" />

              <div className="relative z-10 flex h-full items-center justify-center transition-all duration-500 group-hover:scale-0">
                <span className="text-xl text-gray-500">{icon}</span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                <span className="text-sm uppercase tracking-[0.28em] text-white/80">{title}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
