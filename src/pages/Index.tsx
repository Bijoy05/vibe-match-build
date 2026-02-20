import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DiscoverTemplates from "@/components/DiscoverTemplates";
import DiscoverApps from "@/components/DiscoverApps";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DiscoverTemplates />
      <DiscoverApps />
    </div>
  );
};

export default Index;
