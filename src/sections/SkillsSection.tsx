import { FadeIn } from '../components/FadeIn';
import { Badge } from '../components/Badge';
import { Brain, Code, Globe, Cloud, Network } from 'lucide-react';

const SKILL_GROUPS = [
  {
    title: 'Machine Learning & AI',
    icon: Brain,
    color: 'text-blue-400' as const,
    bgColor: 'bg-blue-500/5 border-blue-500/10' as const,
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'NLP',
      'Summarization',
      'Classification',
      'NER',
      'Sentiment Analysis',
      'Text Mining',
      'SpaCy',
      'NLTK',
      'Transformers',
      'BERT',
      'T5',
      'LSTM',
      'Self-Supervised Learning',
      'Generative AI',
      'RAG',
      'OpenAI API',
      'Gemini API',
      'Claude API',
      'LangChain',
      'Prompt Engineering',
      'PyTorch',
      'Hugging Face',
      'Scikit-learn',
      'Model Evaluation',
      'ROC-AUC',
      'F1-score',
      'Confusion Matrix',
    ],
  },
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'text-green-400' as const,
    bgColor: 'bg-green-500/5 border-green-500/10' as const,
    skills: ['Python', 'C', 'C++', 'Java', 'PHP', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Web Development',
    icon: Globe,
    color: 'text-pink-400' as const,
    bgColor: 'bg-pink-500/5 border-pink-500/10' as const,
    skills: ['HTML', 'CSS', 'React.js', 'NestJS', 'Node.js', 'Express.js', 'Django', 'Flask', 'Bootstrap', 'Tailwind CSS', 'REST APIs', 'MongoDB'],
  },
  {
    title: 'Database & Query Language',
    icon: Network,
    color: 'text-purple-400' as const,
    bgColor: 'bg-purple-500/5 border-purple-500/10' as const,
    skills: ['SQL', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools & Platforms',
    icon: Cloud,
    color: 'text-orange-400' as const,
    bgColor: 'bg-orange-500/5 border-orange-500/10' as const,
    skills: [
      'AWS EC2',
      'AWS S3',
      'AWS CloudWatch',
      'Git',
      'GitHub',
      'VS Code',
      'PyCharm',
      'Jupyter Notebook',
      'Kaggle',
      'Docker',
      'Linux',
      'Microsoft Azure',
      'Excel',
      'Power BI',
      'Streamlit',
      'Figma',
      'Antigravity',
      'Vercel',
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 4.25rem)' }}
          >
            Technical Skills
          </h2>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] max-w-6xl mx-auto">
          <div className="space-y-5">
            {[SKILL_GROUPS[0], SKILL_GROUPS[2]].map((group, i) => {
              const Icon = group.icon;
              return (
                <FadeIn key={group.title} delay={0.1 + i * 0.1} y={20}>
                  <div className="bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-3xl p-5 hover:bg-[#D7E2EA]/8 hover:border-[#D7E2EA]/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-2xl bg-[#D7E2EA]/5 flex items-center justify-center">
                        <Icon size={16} className={group.color} />
                      </div>
                      <h3 className="text-[#D7E2EA] font-semibold text-base sm:text-lg">
                        {group.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge key={skill} color="default">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="space-y-5">
            {[SKILL_GROUPS[1], SKILL_GROUPS[3], SKILL_GROUPS[4]].map((group, i) => {
              const Icon = group.icon;
              return (
                <FadeIn key={group.title} delay={0.1 + (i + 2) * 0.1} y={20}>
                  <div className="bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-3xl p-5 hover:bg-[#D7E2EA]/8 hover:border-[#D7E2EA]/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-2xl bg-[#D7E2EA]/5 flex items-center justify-center">
                        <Icon size={16} className={group.color} />
                      </div>
                      <h3 className="text-[#D7E2EA] font-semibold text-base sm:text-lg">
                        {group.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge key={skill} color="default">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
