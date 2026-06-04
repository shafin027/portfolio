import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  target,
  rel,
  ariaLabel,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium uppercase tracking-widest transition-all duration-200 rounded-full cursor-pointer';

  const variants = {
    primary:
      'text-white bg-gradient-to-r from-[#18011F] via-[#B600A8] to-[#BE4C00] shadow-[0px_4px_4px_rgba(181,1,167,0.25),inset_4px_4px_12px_#7721B1] outline-2 outline-white outline-offset-[-3px] hover:opacity-90',
    outline:
      'border-2 border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10',
    ghost:
      'text-[#D7E2EA]/80 hover:text-[#D7E2EA] hover:bg-[#D7E2EA]/5',
  };

  const sizes = {
    sm: 'px-6 py-2 text-xs',
    md: 'px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm',
    lg: 'px-10 py-3.5 sm:px-12 sm:py-4 text-sm sm:text-base',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
