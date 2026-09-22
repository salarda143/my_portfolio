"use client";

import { Download, FolderOpen, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import ActionButton from "@/components/ui/ActionButton";

export default function ActionButtons() {
  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-3">
        <ActionButton
          label="Send Email"
          icon={Mail}
          onClick={() =>
            document
              .getElementById("contact-form")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          variant="light"
        />
        <ActionButton
          label="CV/Resume"
          icon={Download}
          href={profile.cvUrl}
          variant="outline"
          download
        />
        <ActionButton
          label="View Projects"
          icon={FolderOpen}
          href={profile.projectsUrl}
          variant="outline"
        />
      </div>
    </div>
  );
}
