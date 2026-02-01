import { 
  Bot, 
  Users, 
  Compass, 
  Building2, 
  BarChart3, 
  FileText, 
  Mic 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Bot,
    title: "AI Internship Program",
    description: "Hands-on AI internship with real-world projects and industry mentorship.",
    duration: "Duration: 2-3 Months",
  },
  {
    icon: Users,
    title: "Campus Ambassador Program",
    description: "Become a leader on your campus and connect students with opportunities.",
    duration: "Flexible Duration",
  },
  {
    icon: Compass,
    title: "Career Guidance",
    description: "Personalized career counseling to help you navigate your professional journey.",
    duration: "One-on-One Sessions",
  },
  {
    icon: Building2,
    title: "Real Estate Services",
    description: "AI-powered real estate solutions for smarter property management.",
    duration: "Custom Solutions",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & AI Insights",
    description: "Transform your data into actionable insights with advanced analytics.",
    duration: "Project Based",
  },
  {
    icon: FileText,
    title: "AI Content Generation",
    description: "Create engaging content at scale with our AI-powered tools.",
    duration: "Subscription Plans",
  },
  {
    icon: Mic,
    title: "Voice AI & Virtual Assistant",
    description: "Build intelligent voice interfaces and virtual assistants for your business.",
    duration: "Custom Development",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 gradient-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
          Our Trending Services
        </h2>
        <p className="text-center text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
          Explore our comprehensive range of AI-powered services designed to transform your career and business
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan to-cyan-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-primary-foreground/70 mb-4">
                {service.description}
              </p>
              <span className="text-xs text-cyan">{service.duration}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="bg-cyan text-navy font-semibold hover:bg-cyan-light">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
