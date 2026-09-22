import { Briefcase, type LucideIcon } from "lucide-react";
import type { TimelineEntry } from "@/data/portfolio";

type TimelineItemProps = TimelineEntry & {
  isLast?: boolean;
  icon?: LucideIcon;
};

export default function TimelineItem({
  title,
  subtitle,
  year,
  isLast = false,
  icon: Icon = Briefcase,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-4 pb-8 last:pb-0">
      {!isLast && (
        <span
          className="absolute left-[11px] top-6 h-[calc(100%-8px)] w-px bg-zinc-200/70 dark:bg-white/10"
          aria-hidden
        />
      )}
      <div className="relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/60 dark:border-white/10 dark:bg-white/10">
        <Icon className="h-3 w-3 text-zinc-500 dark:text-zinc-300" />
      </div>
      <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
        <div>
          <p className="font-medium text-zinc-900 dark:text-white">{title}</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{subtitle}</p>
        </div>
        <span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400">{year}</span>
      </div>
    </div>
  );
}
