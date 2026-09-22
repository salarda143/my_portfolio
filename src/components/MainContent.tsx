import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import EducationSection from "@/components/experience/EducationSection";
import AlwaysLearningCard from "@/components/contact/AlwaysLearningCard";

export default function MainContent() {
  return (
    <main className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
      <div className="space-y-10">
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
      </div>
      <aside className="space-y-10">
        <ExperienceSection />
        <EducationSection />
        <AlwaysLearningCard />
      </aside>
    </main>
  );
}
