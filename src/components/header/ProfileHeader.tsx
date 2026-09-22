import Image from "next/image";
import { BadgeCheck, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function ProfileHeader() {
  return (
    <div className="flex items-start justify-between gap-6">
      <div className="flex gap-5">
        <div className="relative aspect-square w-40 shrink-0 overflow-hidden rounded-2xl border border-white/30 bg-white/50 shadow-lg dark:border-white/10 dark:bg-white/5 sm:w-48">
          <Image
            src={profile.image}
            alt={profile.name}
            fill
            sizes="(max-width: 640px) 10rem, 12rem"
            className="object-cover"
            priority
          />
        </div>
        <div className="pt-1">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              {profile.name}
            </h1>
            {profile.verified && (
              <BadgeCheck
                className="h-6 w-6 shrink-0 fill-blue-500 text-black"
                aria-label="Verified"
              />
            )}
          </div>
          <p className="mt-1 flex items-center gap-1.5 text-base text-zinc-400 sm:text-lg">
            <MapPin className="h-4 w-4 shrink-0" />
            {profile.location}
          </p>
          <p className="mt-1 text-base text-zinc-600 sm:text-lg dark:text-zinc-300">
            {profile.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
