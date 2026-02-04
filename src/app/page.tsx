import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { MarqueeSection } from "@/components/marquee-section";
import { ContentSections } from "@/components/content-sections";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ContentSections />
      </main>
      <Footer />
    </div>
  );
}
