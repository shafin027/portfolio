interface BadgeProps {
  children: string;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'default';
  className?: string;
}

const colorMap = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  green: 'bg-green-500/10 text-green-400 border-green-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  pink: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  default: 'bg-[#D7E2EA]/5 text-[#D7E2EA]/80 border-[#D7E2EA]/10',
};

export function Badge({ children, color = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border transition-colors hover:opacity-80 ${colorMap[color]} ${className}`}
    >
      {children}
    </span>
  );
}
