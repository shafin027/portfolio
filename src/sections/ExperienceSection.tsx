import { FadeIn } from '../components/FadeIn';
import { StackedCards } from '../components/StackedCards';
import { Cloud, GitBranch, Server } from 'lucide-react';

const EXPERIENCE = [
  {
    role: 'Cloud Engineering Intern',
    company: 'BayShore Communication',
    location: 'Aftab Nagar, Dhaka',
    duration: 'Sept. 2024 – Present',
    description:
      'Assisted in deploying and managing AWS services including EC2, S3, and CloudWatch. Monitored cloud system performance, supported troubleshooting of cloud environments, documented deployment processes, and gained hands-on experience with Git-based version control.',
    icons: [
      { icon: Cloud, label: 'AWS', color: 'orange' as const },
      { icon: GitBranch, label: 'Git', color: 'blue' as const },
      { icon: Server, label: 'Cloud', color: 'purple' as const },
    ],
    image: '/uploads/experience/cloud-internship.jpg',
    imageLabel: 'Cloud',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 4.25rem)' }}
          >
            Experience
          </h2>
        </FadeIn>

        <StackedCards items={EXPERIENCE} className="max-w-3xl mx-auto">
          {(item) => (
            <div className="aspect-square rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
              <div className="aspect-[16/9] relative overflow-hidden bg-[#111217]">
                <img
                  src={item.image}
                  alt={`${item.role} banner`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#D7E2EA]/20 via-transparent to-[#7C3AED]/15" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="text-[#D7E2EA]/50 uppercase tracking-[0.35em] text-[10px]">{item.imageLabel}</span>
                  <h3 className="text-[#D7E2EA] font-black text-2xl sm:text-3xl leading-tight">
                    {item.role}
                  </h3>
                </div>
              </div>
              <div className="flex h-full flex-col justify-between gap-4 p-5 sm:p-6 md:p-8">
                <div>
                  <div className="mb-3">
                    <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-wider">Company</span>
                    <p className="text-[#D7E2EA]/60 text-sm mt-1">{item.company}</p>
                  </div>
                  <div className="mb-3">
                    <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-wider">Location</span>
                    <p className="text-[#D7E2EA]/60 text-sm mt-1">{item.location}</p>
                  </div>
                  <div className="mb-3">
                    <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-wider">Duration</span>
                    <p className="text-[#D7E2EA]/60 text-sm mt-1">{item.duration}</p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {item.icons.map((iconItem: any) => {
                      const Icon = iconItem.icon;
                      return (
                        <div
                          key={iconItem.label}
                          className="flex items-center gap-2 px-3 py-1.5 bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-full"
                        >
                          <Icon size={14} className="text-[#D7E2EA]/60" />
                          <span className="text-[#D7E2EA]/60 text-xs">{iconItem.label}</span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-[#D7E2EA]/60 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </StackedCards>
      </div>
    </section>
  );
}
