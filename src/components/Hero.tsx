import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, GraduationCap, Briefcase } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="bg-background min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              Transform Your{" "}
              <br />
              Future With{" "}
              <span className="text-primary">NAVI AI TECH</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Whether it's
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg">
              AI Solutions, Career Guidance, or Industry-Ready Training — we provide cutting-edge possibilities to unlock your success.
            </p>
            
            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
                <Bot className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">AI Services</span>
              </div>
              <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Internship Programs</span>
              </div>
              <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Career Support</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
                  Explore Services
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
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
