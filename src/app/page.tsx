import Header from "@/components/header/Header";
import MainContent from "@/components/MainContent";
import BottomSections from "@/components/BottomSections";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-mesh">
      <div className="mx-auto max-w-7xl px-6 py-10 pb-24">
        <div className="glass rounded-3xl p-6 sm:p-8">
          <Header />
        </div>
        <div className="mt-6 glass rounded-3xl p-6 sm:p-8">
          <MainContent />
        </div>
        <div className="mt-6 glass rounded-3xl p-6 sm:p-8">
          <BottomSections />
        </div>
      </div>
    </div>
  );
}
