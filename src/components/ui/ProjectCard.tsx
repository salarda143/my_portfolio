"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = Project;

export default function ProjectCard({
  title,
  description,
  images,
  url,
}: ProjectCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const uniqueImages = [...new Set(images)];

  useEffect(() => {
    if (!isPreviewOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isPreviewOpen]);

  const content = (
    <>
      <div className="relative mb-4 h-44 overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60">
        <Image
          src={uniqueImages[0]}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-zinc-900 dark:text-white">{title}</h3>
        {url && (
          <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500 transition-colors group-hover:text-zinc-900 dark:group-hover:text-white" />
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      {url && (
        <span className="mt-4 inline-block rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
          {url.replace(/^https?:\/\//, "")}
        </span>
      )}
    </>
  );

  const className =
    "group block rounded-2xl border border-white/35 bg-white/55 p-5 transition-all hover:border-white/60 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/25";

  if (url) {
    return (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={url}
        className={className}
      >
        {content}
      </Link>
    );
  }

  return (
    <>
      <article
        className={`${className} cursor-pointer`}
        role="button"
        tabIndex={0}
        onClick={() => setIsPreviewOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsPreviewOpen(true);
          }
        }}
        aria-label={`View ${title} project image`}
      >
        {content}
      </article>

      {isPreviewOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close project image preview"
            onClick={() => setIsPreviewOpen(false)}
          />
          <div
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} project image`}
          >
            <button
              type="button"
              onClick={() => setIsPreviewOpen(false)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/90 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
              aria-label="Close project image preview"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid max-h-[80vh] gap-4 overflow-y-auto p-4 sm:grid-cols-2">
              {uniqueImages.map((projectImage, index) => (
                <div
                  key={projectImage}
                  className="relative aspect-video overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900"
                >
                  <Image
                    src={projectImage}
                    alt={`${title} project screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
