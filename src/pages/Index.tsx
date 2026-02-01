import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TiedUpCompanies from "@/components/TiedUpCompanies";
import Certifications from "@/components/Certifications";
import CareerPotential from "@/components/CareerPotential";
import CollaborationSection from "@/components/CollaborationSection";
import TrendingPrograms from "@/components/TrendingPrograms";
import JourneyTimeline from "@/components/JourneyTimeline";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TiedUpCompanies />
      <Certifications />
      <CareerPotential />
      <CollaborationSection />
      <TrendingPrograms />
      <JourneyTimeline />
      <StatsSection />
      <Testimonials />
      <FounderSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
