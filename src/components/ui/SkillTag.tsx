type SkillTagProps = {
  label: string;
};

export default function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="rounded-lg border border-white/35 bg-white/55 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
      {label}
    </span>
  );
}
