import ProfileHeader from "./ProfileHeader";
import ActionButtons from "./ActionButtons";

export default function Header() {
  return (
    <header className="space-y-6">
      <ProfileHeader />
      <ActionButtons />
    </header>
  );
}
