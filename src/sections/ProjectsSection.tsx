import { FadeIn } from '../components/FadeIn';
import { StackedCards } from '../components/StackedCards';
import { LiveProjectButton } from '../components/LiveProjectButton';

const PROJECTS = [
  {
    num: '01',
    name: 'Cattle Skin Disease Prediction',
    category: 'Computer Vision / Deep Learning / Self-Supervised Learning',
    href: 'https://github.com/shafin027/Cattle_Skin_Disease',
    liveUrl: '',
    image: '/uploads/projects/cattle-disease.png',
    highlight: '95.48% Test Accuracy',
    description:
      'Built a high-accuracy cattle skin disease classification system using computer vision and deep learning. Implemented a self-supervised SimCLR fine-tuned model achieving 95.48% test accuracy for disease prediction from cattle skin images. Compared CNN-based architectures including DenseNet121, ResNet50, EfficientNetB0, and SimCLR using Accuracy, F1-score, ROC-AUC, and Confusion Matrix analysis.',
    techStack: ['Python', 'Deep Learning', 'Computer Vision', 'SimCLR', 'DenseNet121', 'ResNet50', 'EfficientNetB0', 'ROC-AUC', 'F1-score'],
  },
  {
    num: '02',
    name: 'GreenLoop — Sustainable Waste Management Ecosystem',
    category: 'Full-Stack MERN Platform / Sustainability Tech',
    href: 'https://github.com/shafin027/GreenLoop',
    liveUrl: '',
    image: '/uploads/projects/greenloop.png',
    highlight: 'Role-based Dashboards + Real-time Features',
    description:
      'Built a MERN-based sustainability platform connecting households, waste collectors, recycling centers, and businesses in a unified recycling ecosystem. Implemented waste pickup scheduling, real-time location tracking, eco-points rewards, community engagement, carbon credit marketplace features, role-based dashboards, proof-image verification, fraud detection logic, and sustainability analytics using React, Node.js, Express.js, and MongoDB.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MERN', 'Location Tracking', 'Dashboard', 'Sustainability Analytics', 'Authentication'],
  },
  {
    num: '03',
    name: 'xv6-riscv-expert — Claude Code Skill',
    category: 'Operating Systems / Developer Tool / AI-Assisted Debugging',
    href: 'https://github.com/shafin027/xv6-riscv-skill',
    liveUrl: '',
    image: '/uploads/projects/xv6-skill.png',
    highlight: 'Open-source Claude Code Skill',
    description:
      'Created an AI-assisted Claude Code skill for solving and debugging xv6-riscv operating system assignments. Built structured workflows for syscalls, schedulers, virtual memory, traps, page-table debugging, and kernel-level troubleshooting, with open-source documentation and automated installation support.',
    techStack: ['xv6', 'RISC-V', 'Operating Systems', 'Kernel Debugging', 'Claude Code Skill', 'Syscalls', 'Virtual Memory', 'Page Tables'],
  },
  {
    num: '04',
    name: 'Multi-Class News Headline Classification',
    category: 'NLP / Machine Learning',
    href: 'https://github.com/shafin027/CSE440-NLP',
    liveUrl: '',
    image: '/uploads/projects/news-classification.png',
    highlight: 'End-to-End NLP Pipeline',
    description:
      'Developed an end-to-end NLP pipeline to classify news headlines into Business, Science & Technology, Sports, and World News categories. Implemented TF-IDF, Skip-gram Word2Vec, Logistic Regression, DNN, RNN, GRU, LSTM, and Bidirectional LSTM models with EDA, preprocessing comparison, hyperparameter tuning, Macro F1-score, ROC-AUC, and Confusion Matrix evaluation.',
    techStack: ['Python', 'NLP', 'TF-IDF', 'Word2Vec', 'Logistic Regression', 'DNN', 'RNN', 'GRU', 'LSTM', 'BiLSTM', 'ROC-AUC'],
  },
  {
    num: '05',
    name: 'Multi-Zone Enterprise Network Design',
    category: 'Computer Networking / Cisco Packet Tracer',
    href: 'https://github.com/shafin027/CSE421_Network-Project',
    liveUrl: '',
    image: '/uploads/projects/network-design.png',
    highlight: 'Six-Zone Enterprise Network',
    description:
      'Designed and configured a six-zone enterprise network in Cisco Packet Tracer using VLSM subnetting from 10.109.0.0/16. Implemented RIP v2, static routes, default routes, floating static routes, DHCP, DNS, HTTP, SMTP, and POP3 services, then verified connectivity using ping, tracert, show ip route, DNS lookup, web access, and email testing.',
    techStack: ['Cisco Packet Tracer', 'VLSM', 'RIP v2', 'Static Routing', 'Floating Static Route', 'DHCP', 'DNS', 'HTTP', 'SMTP', 'POP3'],
  },
  {
    num: '06',
    name: 'Annual Income Prediction',
    category: 'Machine Learning / Classification',
    href: 'https://github.com/shafin027/Annual_Income_Prediction_Project.git',
    liveUrl: '',
    image: '/uploads/projects/income-prediction.png',
    highlight: 'Supervised + Unsupervised ML',
    description:
      'Built a machine learning classification system to predict whether an individual\'s annual income is above or below $50K using the Adult Income dataset. Trained Naive Bayes, Logistic Regression, and Neural Network models, and added K-Means Clustering for unsupervised analysis.',
    techStack: ['Python', 'Machine Learning', 'Naive Bayes', 'Logistic Regression', 'Neural Network', 'K-Means', 'Classification'],
  },
];

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const demoUrl = project.liveUrl || project.href;

  return (
    <div className="w-full rounded-[40px] border border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-6 md:p-8 shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111217]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full aspect-[16/9] object-contain bg-[#111217]"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      </div>

      <div className="mt-6 flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-3">
            <span className="text-[#D7E2EA]/60 uppercase tracking-[0.35em] text-xs sm:text-sm">
              {project.category}
            </span>
            <div className="flex items-baseline gap-4 flex-wrap">
              <span className="hero-heading font-black text-[clamp(2rem,4vw,3rem)] leading-none text-white">
                {project.num}
              </span>
              <h3 className="text-[#D7E2EA] font-bold uppercase text-[clamp(1.35rem,2.3vw,2rem)] leading-tight">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={demoUrl} />
        </div>

        <div>
          <span className="inline-flex rounded-full border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 px-4 py-2 text-sm text-[#D7E2EA]">
            {project.highlight}
          </span>
        </div>

        <p className="text-[#D7E2EA]/70 leading-relaxed text-sm sm:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 px-3 py-1 text-[10px] sm:text-xs text-[#D7E2EA]/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(2.25rem, 6vw, 4.25rem)' }}
        >
          Featured Projects
        </h2>
      </FadeIn>

      <StackedCards items={PROJECTS} className="max-w-5xl mx-auto">
        {(project) => <ProjectCard project={project} />}
      </StackedCards>
    </section>
  );
}
