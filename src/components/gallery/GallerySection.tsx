"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  function scroll(direction: "left" | "right") {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let lastTime = performance.now();
    const speed = 0.6;

    function animate(currentTime: number) {
      if (!isPaused && container) {
        const delta = currentTime - lastTime;
        container.scrollLeft += speed * delta;

        const midpoint = (container.scrollWidth - container.clientWidth) / 2;
        if (container.scrollLeft >= midpoint) {
          container.scrollLeft = 0;
        }
      }
      lastTime = currentTime;
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <section>
      <SectionHeading title="Gallery" />
      <div
        className="relative mt-5"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Scroll gallery left"
          className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 text-white backdrop-blur-sm transition-colors hover:bg-zinc-800"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Scroll gallery right"
          className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 text-white backdrop-blur-sm transition-colors hover:bg-zinc-800"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth rounded-2xl border border-white/35 bg-white/50 p-4 scrollbar-none dark:border-white/10 dark:bg-white/5"
        >
          {[...galleryImages, ...galleryImages].map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative h-64 w-64 shrink-0 overflow-hidden rounded-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
