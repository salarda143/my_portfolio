import { experience } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";

export default function ExperienceSection() {
  return (
    <section>
      <SectionHeading title="Experience" />
      <div className="mt-5">
        {experience.map((entry, index) => (
          <TimelineItem
            key={`${entry.title}-${entry.year}`}
            {...entry}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
