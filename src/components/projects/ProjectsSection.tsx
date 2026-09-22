"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsSection() {
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
    <section id="projects">
      <SectionHeading
        title="Recent Projects"
        linkLabel="View All"
        linkHref="#projects"
        onLinkClick={() => setIsOverlayOpen(true)}
      />
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {isOverlayOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto px-4 py-6 backdrop-blur-sm">
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            aria-label="Close projects overlay backdrop"
            onClick={() => setIsOverlayOpen(false)}
          />
          <div
            className="relative z-10 mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="projects-overlay-title"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5 sm:px-8">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Full project catalog
                </p>
                <h3
                  id="projects-overlay-title"
                  className="mt-1 text-2xl font-semibold tracking-tight text-white"
                >
                  Recent Projects
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOverlayOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                aria-label="Close projects overlay"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[80vh] overflow-y-auto px-6 py-6 sm:px-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
