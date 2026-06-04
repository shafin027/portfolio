import { FadeIn } from '../components/FadeIn';
import { StackedCards } from '../components/StackedCards';
import { BookOpen } from 'lucide-react';

const EDUCATION = [
  {
    degree: "B.S. in Computer Science",
    school: "Brac University",
    location: "Merul Badda, Dhaka, Bangladesh",
    duration: "Expected Graduation: May 2027",
    gpa: "3.61/4.00",
    image: '/uploads/education/brac-university.png',
    concentrations: ["Data Science", "Machine Learning", "Artificial Intelligence"],
    coursework: [
      "Neural Network Processing",
      "Computer Networks",
      "Computer Operating System",
      "Artificial Intelligence",
      "Data Structures",
      "Algorithms",
      "Discrete Mathematics",
      "Object-Oriented Programming",
      "Data Communications",
      "Statistics and Probability",
      "Advanced Probability & Stochastic Process Analysis",
    ],
  },
  {
    degree: "Higher Secondary Certificate, Science Department",
    school: "Dhaka Residential Model College",
    location: "Mohammadpur, Dhaka, Bangladesh",
    duration: "July 2018 – April 2020",
    gpa: "5.00/5.00",
    image: '/uploads/education/drmc-campus.jpg',
    concentrations: ["Physics", "Chemistry", "Mathematics", "Biology", "ICT"],
    activities: [
      "Organized DRMC Science Fest",
      "Core Member, DRMC IT Club",
      "Organizer of the first DRMC International IT Carnival",
    ],
  },
];

export function EducationSection() {
  return (
    <section className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 4.25rem)' }}
          >
            Education
          </h2>
        </FadeIn>

        <StackedCards items={EDUCATION} className="max-w-4xl mx-auto">
          {(edu) => (
            <div className="w-full overflow-hidden rounded-[40px] border border-[#D7E2EA] bg-[#0C0C0C] shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-[40px] bg-[#111217]">
                <img
                  src={edu.image}
                  alt={`${edu.school} banner`}
                  className="w-full h-full object-contain bg-[#111217]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#D7E2EA]/20 via-transparent to-[#7C3AED]/15" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="text-[#D7E2EA]/50 uppercase tracking-[0.35em] text-[10px]">{edu.school}</span>
                  <h3 className="text-[#D7E2EA] font-black text-2xl sm:text-3xl leading-tight">
                    {edu.degree}
                  </h3>
                </div>
              </div>
              <div className="flex h-full flex-col justify-between gap-4 p-5 sm:p-6 md:p-8">
                <div>
                  <div className="mb-3">
                    <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-wider">Duration</span>
                    <p className="text-[#D7E2EA]/60 text-sm mt-1">{edu.duration}</p>
                  </div>
                  <div className="mb-3">
                    <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-wider">Concentrations</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {edu.concentrations.map((c) => (
                        <span
                          key={c}
                          className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-[#D7E2EA]/5 text-[#D7E2EA]/50 border border-[#D7E2EA]/5"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {'coursework' in edu && (
                    <div>
                      <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-wider flex items-center gap-1">
                        <BookOpen size={10} /> Relevant Coursework
                      </span>
                      <p className="text-[#D7E2EA]/40 text-xs sm:text-sm mt-1 leading-relaxed">
                        {(edu as any).coursework.join(', ')}
                      </p>
                    </div>
                  )}

                  {'activities' in edu && (
                    <div>
                      <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-wider">Activities</span>
                      <ul className="text-[#D7E2EA]/40 text-xs sm:text-sm mt-1 space-y-0.5">
                        {(edu as any).activities.map((a: string) => (
                          <li key={a} className="flex items-start gap-1.5">
                            <span className="text-[#D7E2EA]/20 mt-1">•</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </StackedCards>
      </div>
    </section>
  );
}
