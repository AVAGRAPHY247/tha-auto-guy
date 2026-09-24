import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ToolsSection from "@/components/sections/ToolsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import HowIWorkSection from "@/components/sections/HowIWorkSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-900 text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ToolsSection />
        <ProjectsSection />
        <HowIWorkSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
