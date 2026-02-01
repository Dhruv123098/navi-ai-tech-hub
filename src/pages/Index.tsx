import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TiedUpCompanies from "@/components/TiedUpCompanies";
import Certifications from "@/components/Certifications";
import CareerPotential from "@/components/CareerPotential";
import ServicesSection from "@/components/ServicesSection";
import FounderSection from "@/components/FounderSection";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TiedUpCompanies />
      <Certifications />
      <CareerPotential />
      <ServicesSection />
      <FounderSection />
      <StatsSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
