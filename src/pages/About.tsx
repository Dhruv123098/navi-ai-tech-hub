import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            About <span className="text-gradient-cyan">Navi AI Technologies</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Transforming businesses and empowering individuals through AI innovation
          </p>
        </div>
      </section>

      <AboutSection />
      <FounderSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;
