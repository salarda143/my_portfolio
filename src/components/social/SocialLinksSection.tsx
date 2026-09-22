import { socialLinks } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLinkButton from "./SocialLinkButton";

export default function SocialLinksSection() {
  return (
    <section>
      <SectionHeading title="Social Links" />
      <div className="mt-5 flex flex-wrap gap-3">
        {socialLinks.map((link) => (
          <SocialLinkButton key={link.platform} {...link} />
        ))}
      </div>
    </section>
  );
}
