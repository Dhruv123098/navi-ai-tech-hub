import { motion } from "framer-motion";
import { Target, Headphones, TrendingUp, Calendar, Megaphone, Users, ClipboardList, BarChart3 } from "lucide-react";

const solutions = [
  { icon: Target, title: "Lead Generation Automation", desc: "Capture and nurture leads automatically with AI" },
  { icon: Headphones, title: "Customer Support Automation", desc: "AI-powered support that never sleeps" },
  { icon: TrendingUp, title: "Sales Funnel Automation", desc: "Optimize every stage of your sales funnel" },
  { icon: Calendar, title: "Appointment Booking Automation", desc: "Smart scheduling that saves time" },
  { icon: Megaphone, title: "Marketing Automation", desc: "Targeted campaigns driven by AI insights" },
  { icon: Users, title: "HR & Recruitment Automation", desc: "Streamline hiring with intelligent screening" },
  { icon: ClipboardList, title: "Data Entry Automation", desc: "Eliminate manual data entry errors" },
  { icon: BarChart3, title: "Business Reporting Automation", desc: "Real-time reports generated automatically" },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            AI <span className="text-gradient-cyan">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end automation solutions tailored for your business needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, index) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card rounded-xl p-6 card-hover hover-glow group cursor-pointer border border-border"
            >
              <div className="w-14 h-14 rounded-xl gradient-cyan flex items-center justify-center mb-4">
                <sol.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{sol.title}</h3>
              <p className="text-sm text-muted-foreground">{sol.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
