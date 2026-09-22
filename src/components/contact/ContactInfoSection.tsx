import { Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import ActionButton from "@/components/ui/ActionButton";

export default function ContactInfoSection() {
  const phoneHref = `tel:${profile.phone.replace(/[^\d+]/g, "")}`;

  return (
    <div className="space-y-3">
      <a
        href="#contact-form"
        className="group flex w-full cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors bg-white/60 text-zinc-900 hover:bg-white/80 border border-white/50 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:border-white/15"
      >
        <span className="flex items-center gap-3">
          <Mail className="h-4 w-4 shrink-0" />
          {profile.email}
        </span>
      </a>
      <ActionButton
        label={profile.phone}
        icon={Phone}
        href={phoneHref}
        variant="outline"
      />
    </div>
  );
}
