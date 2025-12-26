import HeroSection from "@/components/HeroSection/HeroSection";
import SearchSection from "@/components/SearchSection/SearchSection";
import CoursesSection from "@/components/CoursesSection/CoursesSection";
import ExploreSection from "@/components/ExploreSection/ExploreSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SearchSection />
      <CoursesSection />
      <ExploreSection />
    </main>
  );
}
