import { Github, ExternalLink } from 'lucide-react';
import { Badge } from './Badge';

interface ProjectCardProps {
  title: string;
  category: string;
  metric: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  index: number;
  total: number;
}

const colorMap: Record<string, { badge: 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'default'; accent: string }> = {
  'Computer Vision': { badge: 'green', accent: 'border-green-500/20 bg-green-500/5' },
  'Full-Stack': { badge: 'pink', accent: 'border-pink-500/20 bg-pink-500/5' },
  'Operating Systems': { badge: 'purple', accent: 'border-purple-500/20 bg-purple-500/5' },
  'NLP': { badge: 'blue', accent: 'border-blue-500/20 bg-blue-500/5' },
  'Networking': { badge: 'orange', accent: 'border-orange-500/20 bg-orange-500/5' },
  'Machine Learning': { badge: 'blue', accent: 'border-blue-500/20 bg-blue-500/5' },
  default: { badge: 'default', accent: 'border-[#D7E2EA]/10 bg-[#D7E2EA]/5' },
};

export function ProjectCard({
  title,
  category,
  metric,
  description,
  techStack,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) {
  const colors = colorMap[category.split('/')[0].trim()] || colorMap.default;

  return (
    <div
      className={`border rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:border-[#D7E2EA]/20 ${colors.accent}`}
      style={{ borderColor: 'rgba(215, 226, 234, 0.1)' }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
        <div className="flex-1">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <span className="hero-heading font-black text-2xl sm:text-3xl md:text-4xl leading-none">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-1 ${colors.accent}`}>
                {category}
              </span>
            </div>
          </div>
          <h3 className="text-[#D7E2EA] font-medium text-lg sm:text-xl md:text-2xl leading-tight">
            {title}
          </h3>
        </div>

        {/* Metric Badge */}
        <div className="bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-xl px-4 py-2.5 text-center flex-shrink-0">
          <div className="hero-heading font-black text-lg sm:text-xl leading-none">
            {metric}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#D7E2EA]/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
        {techStack.map((tech) => (
          <Badge key={tech} color="default">{tech}</Badge>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA] text-sm font-medium hover:bg-[#D7E2EA]/5 transition-colors"
        >
          <Github size={14} />
          <span>GitHub</span>
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA] text-sm font-medium hover:bg-[#D7E2EA]/5 transition-colors"
          >
            <ExternalLink size={14} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}
