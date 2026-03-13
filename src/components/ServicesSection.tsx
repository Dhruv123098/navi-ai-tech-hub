import { motion } from "framer-motion";
import {
  Bot, Mic, Brain, Headphones, TrendingUp, FileText, BookOpen, BarChart3,
  GraduationCap, Presentation, Workflow, Zap, MessageSquare, Users,
  Database, Mail, Link2, Code
} from "lucide-react";

const coreServices = [
  { icon: Bot, title: "AI Chatbot Development", desc: "Intelligent chatbots for customer engagement and support" },
  { icon: Mic, title: "AI Voice Bot Development", desc: "Voice-powered AI assistants for seamless communication" },
  { icon: Brain, title: "AI Agents Development", desc: "Autonomous AI agents that handle complex business tasks" },
  { icon: Headphones, title: "AI Customer Support", desc: "24/7 automated customer support with AI intelligence" },
  { icon: TrendingUp, title: "AI Sales Automation", desc: "Boost sales with intelligent automation pipelines" },
  { icon: FileText, title: "AI Document Processing", desc: "Extract and process data from documents automatically" },
  { icon: BookOpen, title: "AI Knowledge Base", desc: "Smart knowledge assistants for instant answers" },
  { icon: BarChart3, title: "AI Data Analysis", desc: "Transform raw data into actionable business insights" },
  { icon: GraduationCap, title: "AI Automation Internships", desc: "Hands-on AI internship programs for students" },
  { icon: Presentation, title: "AI Training Workshops", desc: "Professional workshops on AI and automation" },
];

const automationServices = [
  { icon: Workflow, title: "Business Process Automation", desc: "Streamline operations end-to-end" },
  { icon: Zap, title: "Workflow Automation", desc: "Automate repetitive workflows efficiently" },
  { icon: MessageSquare, title: "WhatsApp Automation", desc: "Engage customers on WhatsApp at scale" },
  { icon: Users, title: "CRM Automation", desc: "Automate your CRM for better relationships" },
  { icon: Database, title: "ERP Integration", desc: "Seamlessly integrate AI with your ERP" },
  { icon: Mail, title: "Email Automation", desc: "Smart email campaigns and responses" },
  { icon: Link2, title: "API Integration Services", desc: "Connect systems with intelligent APIs" },
  { icon: Code, title: "AI SaaS Development", desc: "Build AI-powered SaaS products" },
];

const ServiceCard = ({ icon: Icon, title, desc, index }: { icon: any; title: string; desc: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="glass-white rounded-xl p-6 card-hover hover-glow group cursor-pointer"
  >
    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gradient-cyan">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions to transform every aspect of your business
          </p>
        </motion.div>

        {/* Core AI Services */}
        <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
          Core AI Services
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16">
          {coreServices.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        {/* Automation & Integration */}
        <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
          Automation & Integration
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {automationServices.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
