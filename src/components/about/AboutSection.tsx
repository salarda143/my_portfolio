import { about } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section>
      <SectionHeading title={about.title} />
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
