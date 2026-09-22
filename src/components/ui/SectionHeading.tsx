"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

type SectionHeadingProps = {
  title: string;
  linkLabel?: string;
  linkHref?: string;
  onLinkClick?: () => void;
  className?: string;
};

export default function SectionHeading({
  title,
  linkLabel,
  linkHref,
  onLinkClick,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex items-center justify-between gap-4 ${className}`}>
      <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
        {title}
      </h2>
      {linkLabel && linkHref && !onLinkClick && (
        <Link
          href={linkHref}
          className="flex cursor-pointer items-center gap-0.5 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
        >
          {linkLabel}
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      )}
      {linkLabel && onLinkClick && (
        <button
          type="button"
          onClick={onLinkClick}
          className="flex cursor-pointer items-center gap-0.5 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
        >
          {linkLabel}
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
