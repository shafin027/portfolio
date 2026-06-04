import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { SkillsSection } from './sections/SkillsSection';
import { EducationSection } from './sections/EducationSection';
import { LeadershipSection } from './sections/LeadershipSection';
import { ContactSection } from './sections/ContactSection';
import { FooterSection } from './sections/FooterSection';

function App() {
  return (
    <div style={{ overflowX: 'clip', background: '#0C0C0C' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <LeadershipSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;