import { FadeIn } from '../components/FadeIn';
import { StackedCards } from '../components/StackedCards';

const HIGHLIGHTS = [
  {
    type: 'leadership',
    title: 'ALP Community Moderator',
    subtitle: 'Aspire Institute Inc. (spin-off from Harvard University)',
    location: 'New York, USA (Remote)',
    duration: 'Dec. 2024 – June 2025',
    description:
      'Managed and supported a community of 200+ selected Aspire Leadership Program participants. Shared announcements, tracked program updates and deadlines, answered participant queries, encouraged peer discussion, and coordinated with program administrators to improve the community experience.',
    image: '/uploads/leadership/leadership.jpg',
    imageLabel: 'Leadership',
  },
  {
    type: 'activity',
    title: 'Brac University Cricket Team',
    description: 'Main Team Player',
    image: '/uploads/leadership/activity-1.jpg',
    imageLabel: 'Activity',
  },
  {
    type: 'activity',
    title: 'Runner-up, RS-64 Cricket Tournament',
    description: 'Brac University',
    image: '/uploads/leadership/activity-2.jpg',
    imageLabel: 'Activity',
  },
  {
    type: 'activity',
    title: 'Champion, RS Cup Cricket 2025',
    description: 'Brac University',
    image: '/uploads/leadership/activity-3.jpg',
    imageLabel: 'Activity',
  },
];

export function LeadershipSection() {
  return (
    <section className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 4.25rem)' }}
          >
            Activity Highlights
          </h2>
        </FadeIn>

        <StackedCards items={HIGHLIGHTS} className="max-w-4xl mx-auto">
          {(item: any) => (
            <div className="w-full overflow-hidden rounded-[40px] border border-[#D7E2EA] bg-[#0C0C0C] shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
              <div className="aspect-[16/9] relative overflow-hidden bg-[#111217]">
                <img
                  src={item.image}
                  alt={`${item.title} banner`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#D7E2EA]/20 via-transparent to-[#7C3AED]/15" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/10 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-[#D7E2EA]/70">
                      {item.imageLabel}
                    </span>
                    <span className="rounded-full bg-sky-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-sky-200">
                      {item.type === 'leadership' ? 'Leadership' : 'Activity'}
                    </span>
                  </div>
                  <h3 className="mt-4 max-w-2xl text-[#D7E2EA] font-black text-2xl sm:text-3xl leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="flex min-h-[250px] flex-col justify-between gap-5 p-5 sm:p-6 md:p-8">
                <div className="grid gap-4 lg:grid-cols-[1.1fr_auto] lg:items-end">
                  <div className="space-y-4">
                    {item.type === 'leadership' ? (
                      <>
                        <div>
                          <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-wider">Organization</span>
                          <p className="text-[#D7E2EA]/60 text-sm mt-1">{item.subtitle}</p>
                        </div>
                        <div>
                          <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-wider">Location</span>
                          <p className="text-[#D7E2EA]/60 text-sm mt-1">{item.location}</p>
                        </div>
                        <div>
                          <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-wider">Duration</span>
                          <p className="text-[#D7E2EA]/60 text-sm mt-1">{item.duration}</p>
                        </div>
                      </>
                    ) : (
                      <div>
                        <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-wider">Activity</span>
                        <p className="text-[#D7E2EA]/60 text-sm mt-1">{item.title}</p>
                      </div>
                    )}
                  </div>
                  <div className="rounded-[24px] bg-[#08121A]/90 border border-white/10 p-4 text-[#D7E2EA]/70">
                    <p className="text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-[#D7E2EA]/60">
                  <span className="rounded-full border border-[#D7E2EA]/10 bg-white/5 px-3 py-2">{item.type === 'leadership' ? 'Program Management' : 'Campus Activity'}</span>
                  {item.type === 'leadership' && <span className="rounded-full border border-[#D7E2EA]/10 bg-white/5 px-3 py-2">Remote Leadership</span>}
                </div>
              </div>
            </div>
          )}
        </StackedCards>
      </div>
    </section>
  );
}
