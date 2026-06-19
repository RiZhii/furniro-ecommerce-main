import BrowseTheRangeSection from "@/components/sections/BrowseTheRangeSection";
import HeroSection from "@/components/sections/HeroSection";
import OurProductSection from "@/components/sections/OurProductSection";
import ShareSetupSection from "@/components/sections/ShareSetupSection";

export default function HomePage() {
  return (
    <main className="bg-white">
      <h1 className="text-center text-4xl font-bold text-red-500">
        CI/CD SUCCESS TEST1234
      </h1>

      <HeroSection />
      <div className="flex flex-col gap-[56px] mx-4 md:mx-[130px]">
        <BrowseTheRangeSection />
        <OurProductSection />
      </div>

      <div className="mt-[56px]">
        <ShareSetupSection />
      </div>
    </main>
  );
}
