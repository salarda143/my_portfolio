import SocialLinksSection from "@/components/social/SocialLinksSection";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import GallerySection from "@/components/gallery/GallerySection";

export default function BottomSections() {
  return (
    <div className="space-y-10">
      <SocialLinksSection />
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-6">
          <ContactInfoSection />
        </div>
        <div className="space-y-6 lg:col-span-2">
          <ContactFormSection />
        </div>
      </div>
      <GallerySection />
    </div>
  );
}
