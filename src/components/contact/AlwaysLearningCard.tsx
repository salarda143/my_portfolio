import { alwaysLearning } from "@/data/portfolio";

export default function AlwaysLearningCard() {
  return (
    <section className="overflow-hidden rounded-2xl border border-white/40 bg-white/60 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
        {alwaysLearning.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        {alwaysLearning.description}
      </p>
      <p className="mt-5 text-xs font-semibold tracking-wider text-zinc-500 dark:text-zinc-400">
        CURRENTLY LEARNING
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {alwaysLearning.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-white/40 bg-white/60 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
