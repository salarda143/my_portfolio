import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";

type ActionButtonVariant = "primary" | "light" | "outline";

type ActionButtonProps = {
  label: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
  variant?: ActionButtonVariant;
  showChevron?: boolean;
  className?: string;
  download?: boolean;
};

const variantStyles: Record<ActionButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-500 border border-blue-600/80",
  light:
    "bg-white/80 text-black hover:bg-white border border-white/60",
  outline:
    "bg-white/60 text-zinc-900 hover:bg-white/80 border border-white/50 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:border-white/15",
};

export default function ActionButton({
  label,
  icon: Icon,
  href,
  onClick,
  variant = "outline",
  showChevron = true,
  className = "",
  download = false,
}: ActionButtonProps) {
  const styles = `group flex w-full cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span className="flex items-center gap-3">
        <Icon className="h-4 w-4 shrink-0" />
        {label}
      </span>
      {showChevron && (
        <ChevronRight className="h-4 w-4 shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} download={download ? "" : undefined} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={styles}>
      {content}
    </button>
  );
}
