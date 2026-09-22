import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";

export default function EducationSection() {
  return (
    <section>
      <SectionHeading title="Education" />
      <div className="mt-5">
        {education.map((entry, index) => (
          <TimelineItem
            key={`${entry.title}-${entry.year}`}
            {...entry}
            icon={GraduationCap}
            isLast={index === education.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
