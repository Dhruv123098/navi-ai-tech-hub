import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Users, 
  Compass, 
  Building2, 
  BarChart3, 
  FileText, 
  Mic,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Internship Program",
    description: "Our flagship AI internship program provides hands-on experience with real-world projects. Learn machine learning, deep learning, and AI implementation under expert mentorship. Gain practical skills that make you job-ready in the rapidly growing AI industry.",
    features: ["Live project experience", "Industry mentorship", "Certificate of completion", "Placement assistance"],
    duration: "2-3 Months",
  },
  {
    icon: Users,
    title: "Campus Ambassador Program",
    description: "Become a leader on your campus and connect students with exciting opportunities. As a campus ambassador, you'll develop leadership skills, expand your network, and earn rewards while helping fellow students discover AI career paths.",
    features: ["Leadership development", "Networking opportunities", "Exclusive rewards", "Certificate & referral bonuses"],
    duration: "Flexible Duration",
  },
  {
    icon: Compass,
    title: "Career Guidance",
    description: "Navigate your professional journey with personalized career counseling. Our experts help you identify your strengths, set career goals, and create actionable plans to achieve success in the tech industry.",
    features: ["One-on-one counseling", "Resume building", "Interview preparation", "Career roadmap planning"],
    duration: "One-on-One Sessions",
  },
  {
    icon: Building2,
    title: "Real Estate Services",
    description: "AI-powered real estate solutions for smarter property management and investment decisions. We leverage data analytics and machine learning to help you make informed real estate choices.",
    features: ["Property valuation AI", "Market analysis", "Investment insights", "Smart recommendations"],
    duration: "Custom Solutions",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & AI Insights",
    description: "Transform your raw data into actionable business insights with our advanced analytics solutions. We help organizations make data-driven decisions that drive growth and efficiency.",
    features: ["Custom dashboards", "Predictive analytics", "Business intelligence", "Data visualization"],
    duration: "Project Based",
  },
  {
    icon: FileText,
    title: "AI Content Generation",
    description: "Create engaging, high-quality content at scale with our AI-powered content generation tools. From blog posts to marketing copy, we help you maintain consistent content output.",
    features: ["Blog & article writing", "Marketing copy", "Social media content", "SEO optimization"],
    duration: "Subscription Plans",
  },
  {
    icon: Mic,
    title: "Voice AI & Virtual Assistant",
    description: "Build intelligent voice interfaces and virtual assistants tailored to your business needs. Enhance customer experience with conversational AI that understands and responds naturally.",
    features: ["Custom voice bots", "24/7 customer support", "Multi-language support", "Integration ready"],
    duration: "Custom Development",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Our <span className="text-gradient-cyan">Services</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive AI-powered services designed to transform your career and business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center bg-muted rounded-2xl p-8 lg:p-12`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <span className="inline-block text-sm text-cyan mb-4">{service.duration}</span>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-foreground">
                        <ArrowRight className="w-4 h-4 text-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/register">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Get Started
                    </Button>
                  </Link>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Join thousands of students and businesses who have transformed their futures with NAVI AI TECH
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-cyan text-navy font-semibold hover:bg-cyan-light glow-cyan">
              Register Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
