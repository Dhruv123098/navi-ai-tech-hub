import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Custom AI solutions tailored to your business",
  "Fast deployment — go live in weeks, not months",
  "Affordable pricing with flexible plans",
  "Expert AI engineers with deep industry experience",
  "End-to-end support from strategy to deployment",
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient-cyan">Us</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-card rounded-xl p-5 mb-4 border border-border hover-glow transition-all"
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
