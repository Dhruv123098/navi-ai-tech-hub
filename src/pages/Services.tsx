import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Bot, 
  Users, 
  Compass, 
  Building2, 
  BarChart3, 
  FileText, 
  Mic,
  ArrowRight,
  MessageSquare,
  Zap,
  Phone,
  Calendar,
  Headphones,
  Target,
  Mail,
  Workflow,
  Users2,
  HelpCircle,
  Globe,
  Plane,
  GraduationCap,
  BookOpen
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

const aiAutomationServices = [
  {
    icon: MessageSquare,
    title: "AI Chatbot Development",
    description: "Intelligent chatbots for websites, WhatsApp, and Telegram that provide 24/7 customer support, lead generation, and automated responses to common queries.",
    features: ["Multi-platform support", "Natural language processing", "Custom conversation flows", "Analytics dashboard"],
    duration: "2-4 Weeks",
  },
  {
    icon: Zap,
    title: "Business Process Automation (RPA)",
    description: "Robotic Process Automation solutions that streamline repetitive tasks, reduce errors, and increase operational efficiency across your organization.",
    features: ["Process mapping", "Automated workflows", "Error reduction", "Cost savings"],
    duration: "4-8 Weeks",
  },
  {
    icon: Phone,
    title: "AI Voice Assistants",
    description: "Advanced voice AI solutions that understand natural language, handle customer inquiries, and perform tasks through voice commands.",
    features: ["Voice recognition", "Natural understanding", "Multi-language", "Custom voice training"],
    duration: "3-6 Weeks",
  },
  {
    icon: Calendar,
    title: "AI Appointment Booking Systems",
    description: "Smart scheduling systems that automatically manage appointments, send reminders, and optimize calendar management for businesses.",
    features: ["Automated scheduling", "Calendar integration", "Smart reminders", "Cancellation handling"],
    duration: "2-3 Weeks",
  },
  {
    icon: Headphones,
    title: "Customer Support Automation",
    description: "Comprehensive AI-powered customer support solutions that handle tickets, provide instant responses, and escalate complex issues.",
    features: ["Ticket automation", "Instant responses", "Sentiment analysis", "Human escalation"],
    duration: "3-5 Weeks",
  },
  {
    icon: Target,
    title: "AI Lead Generation Systems",
    description: "Intelligent lead generation and qualification systems that identify prospects, score leads, and nurture them through the sales funnel.",
    features: ["Lead scoring", "Automated nurturing", "CRM integration", "Performance analytics"],
    duration: "4-6 Weeks",
  },
  {
    icon: Mail,
    title: "Email & Marketing Automation",
    description: "AI-driven email marketing campaigns that personalize content, optimize send times, and automate follow-ups for maximum engagement.",
    features: ["Personalized campaigns", "Send time optimization", "Automated follow-ups", "A/B testing"],
    duration: "2-4 Weeks",
  },
  {
    icon: Workflow,
    title: "Workflow Automation using n8n / Zapier",
    description: "Custom workflow automation solutions using n8n and Zapier to connect your favorite apps and automate business processes.",
    features: ["Multi-app integration", "Custom workflows", "No-code solutions", "Real-time sync"],
    duration: "1-3 Weeks",
  },
  {
    icon: Users2,
    title: "CRM Automation with AI",
    description: "AI-enhanced CRM solutions that automate data entry, predict customer behavior, and provide actionable insights for sales teams.",
    features: ["Automated data entry", "Predictive analytics", "Customer insights", "Sales optimization"],
    duration: "3-5 Weeks",
  },
  {
    icon: HelpCircle,
    title: "AI-powered Helpdesk Solutions",
    description: "Intelligent helpdesk systems that automatically categorize, prioritize, and resolve support tickets using AI and machine learning.",
    features: ["Ticket categorization", "Auto-resolution", "Priority management", "Knowledge base integration"],
    duration: "3-4 Weeks",
  },
];

const abroadEducationServices = [
  {
    icon: Globe,
    title: "Abroad Education Services by Margam",
    description: "Comprehensive guidance for students aspiring to study abroad. We help you navigate the complex process of international education with expert counseling and support.",
    features: [
      "University selection & application assistance",
      "Visa guidance and documentation support", 
      "Scholarship and financial aid counseling",
      "Pre-departure orientation and post-arrival support"
    ],
    duration: "Ongoing Support",
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

      {/* AI & Automation Services Section */}
      <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              🤖 <span className="text-primary">AI & Automation Services</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI solutions and automation technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiAutomationServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring" as const,
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                className="bg-gradient-to-br from-card via-primary/5 to-accent/5 rounded-2xl p-8 shadow-xl border border-border hover:border-primary/30 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                {/* Background decoration */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />
                
                <motion.div 
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 relative z-10"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors relative z-10"
                  whileHover={{ scale: 1.02 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground mb-4 leading-relaxed relative z-10"
                  whileHover={{ scale: 1.01 }}
                >
                  {service.description}
                </motion.p>
                
                <div className="mb-4">
                  <span className="inline-block text-xs text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                    {service.duration}
                  </span>
                </div>
                
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center gap-2 text-sm text-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + i * 0.05 
                      }}
                    >
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div 
                  className="mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/register">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Abroad Education Services Section */}
      <section className="py-20 bg-gradient-to-b from-accent/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              🌍 <span className="text-primary">Abroad Education Services</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              Your gateway to global education opportunities with Margam's expert guidance
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {abroadEducationServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  type: "spring" as const,
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                className="bg-gradient-to-br from-card via-accent/10 to-primary/10 rounded-3xl p-10 md:p-12 shadow-2xl border border-border hover:border-primary/30 transition-all duration-500 group cursor-pointer relative overflow-hidden"
              >
                {/* Background decorations */}
                <motion.div
                  className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1.3, 1, 1.3],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-2xl">
                        <service.icon className="w-12 h-12 text-primary-foreground" />
                      </div>
                    </motion.div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <motion.h3 
                        className="text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-lg text-muted-foreground mb-6 leading-relaxed"
                        whileHover={{ scale: 1.01 }}
                      >
                        {service.description}
                      </motion.p>
                      
                      <div className="mb-6">
                        <span className="inline-block text-sm text-primary font-semibold bg-primary/10 px-4 py-2 rounded-full">
                          {service.duration}
                        </span>
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-center gap-3 text-foreground"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.5, 
                              delay: i * 0.1 
                            }}
                          >
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <ArrowRight className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-base">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <motion.div 
                        className="flex flex-col sm:flex-row gap-4"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link to="/register">
                          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                            Get Started
                          </Button>
                        </Link>
                        <Link to="/contact">
                          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                            Learn More
                          </Button>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
