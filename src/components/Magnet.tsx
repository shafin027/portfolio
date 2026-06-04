import { useRef, useState, useCallback, ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
  inactiveTransition = 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0, 0, 0)');
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const thresholdX = rect.width / 2 + padding;
    const thresholdY = rect.height / 2 + padding;

    if (Math.abs(dx) < thresholdX && Math.abs(dy) < thresholdY) {
      setIsActive(true);
      setTransform(`translate3d(${dx / strength}px, ${dy / strength}px, 0)`);
    } else {
      setIsActive(false);
      setTransform('translate3d(0, 0, 0)');
    }
  }, [padding, strength]);

  const handleMouseLeave = useCallback(() => {
    setIsActive(false);
    setTransform('translate3d(0, 0, 0)');
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
