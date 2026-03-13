import { motion } from "framer-motion";
import { ClipboardList, Lightbulb, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Business Requirement Analysis", desc: "We understand your goals, challenges, and automation needs" },
  { icon: Lightbulb, title: "AI Strategy Design", desc: "We create a tailored AI roadmap for your business" },
  { icon: Code, title: "System Development", desc: "We build intelligent systems using cutting-edge AI technology" },
  { icon: TestTube, title: "Integration and Testing", desc: "We integrate with your systems and rigorously test everything" },
  { icon: Rocket, title: "Deployment and Support", desc: "We launch your solution and provide ongoing support" },
];

const OurProcess = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gradient-cyan">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven methodology to deliver AI solutions that work
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex gap-6 mb-8 relative"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-cyan flex items-center justify-center z-10 shadow-lg glow-cyan-sm">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="bg-card rounded-xl p-6 flex-1 border border-border hover-glow transition-all">
                <div className="text-xs text-primary font-semibold mb-1">Step {index + 1}</div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
