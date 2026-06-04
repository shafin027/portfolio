import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StackedCardsProps<T> {
  items: T[];
  children: (item: T, index: number) => ReactNode;
  className?: string;
}

export function StackedCards<T>({ items, children, className }: StackedCardsProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scales = items.map((_, index) =>
    useTransform(
      scrollYProgress,
      [index / items.length, 1],
      [1, 1 - (items.length - 1 - index) * 0.03]
    )
  );

  return (
    <div ref={containerRef} className={className}>
      <div className="relative max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32">
            <motion.div
              className="absolute w-full"
              style={{
                top: `${index * 28}px`,
                scale: scales[index],
                zIndex: items.length - index,
                transformOrigin: 'top',
              }}
            >
              {children(item, index)}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
