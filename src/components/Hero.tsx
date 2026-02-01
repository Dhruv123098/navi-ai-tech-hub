import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="gradient-hero min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Transform Your Future With{" "}
              <span className="text-gradient-cyan">NAVI AI TECH</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-4">
              Whether it's AI Solutions, Career Guidance, or Industry-Ready Training
            </p>
            <p className="text-primary-foreground/70 mb-8 max-w-lg">
              At Navi AI Tech, we are committed to delivering excellence through continuous innovation in education and technology. Our tailored curriculum meets diverse learning needs with comprehensive, career-focused experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-cyan text-navy font-semibold hover:bg-cyan-light glow-cyan">
                  Explore Services
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative animate-float">
            <img
              src={heroIllustration}
              alt="AI Education Illustration"
              className="w-full max-w-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
