"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { fullSkills, skills } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillTag from "@/components/ui/SkillTag";

export default function SkillsSection() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    if (!isOverlayOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOverlayOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOverlayOpen]);

  return (
    <section>
      <SectionHeading
        title="Skills / Tech Stack"
        linkLabel="View All"
        linkHref="#skills-full"
        onLinkClick={() => setIsOverlayOpen(true)}
      />
      <div className="mt-5 space-y-5">
        {skills.map((category) => (
          <div key={category.label}>
            <p className="mb-2.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {category.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillTag key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {isOverlayOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto px-4 py-6 backdrop-blur-sm">
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            aria-label="Close skills overlay backdrop"
            onClick={() => setIsOverlayOpen(false)}
          />
          <div
            className="relative z-10 mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="skills-overlay-title"
            id="skills-full"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5 sm:px-8">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Full skill catalog
                </p>
                <h3
                  id="skills-overlay-title"
                  className="mt-1 text-2xl font-semibold tracking-tight text-white"
                >
                  Skills / Tech Stack
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOverlayOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                aria-label="Close skills overlay"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[80vh] overflow-y-auto px-6 py-6 sm:px-8">
              <div className="space-y-7">
                {fullSkills.map((category) => (
                  <div key={category.label}>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                      {category.label}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm font-medium text-zinc-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
