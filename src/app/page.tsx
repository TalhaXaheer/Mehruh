import { BrandIntro } from "@/components/intro/BrandIntro";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { StorySection } from "@/components/home/StorySection";
import { CollectionSection } from "@/components/home/CollectionSection";
import { BrandStatement } from "@/components/home/BrandStatement";
import { FeaturedFragrance } from "@/components/home/FeaturedFragrance";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#120F10] flex flex-col relative overflow-x-hidden selection:bg-[#4A1726] selection:text-[#DFC285]">
      {/* Cinematic Brand Intro (first visit / session) */}
      <BrandIntro />

      {/* Navigation */}
      <Navbar />

      {/* Section 1: Hero Section with Full-Screen Cinematic Video */}
      <HeroSection />

      {/* Section 2: Warm Cream Brand Story (Reference Image 2) */}
      <StorySection />

      {/* Section 3: The Collection Intro & Grid */}
      <CollectionSection />

      {/* Section 4: Brand Statement ("WEAR THE MEMORY.") */}
      <BrandStatement />

      {/* Section 5: Featured Fragrance Spotlight */}
      <FeaturedFragrance />

      {/* Section 6: Sophisticated Minimal Newsletter */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
