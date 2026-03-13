import { motion } from "framer-motion";
import { Bot, Mic, Target, Workflow } from "lucide-react";

const cases = [
  { icon: Bot, title: "AI Chatbot", result: "70% faster customer response", color: "from-primary to-cyan-glow" },
  { icon: Mic, title: "Voice Bot", result: "3x call handling capacity", color: "from-accent to-purple-glow" },
  { icon: Target, title: "Lead Generation", result: "150% increase in leads", color: "from-primary to-accent" },
  { icon: Workflow, title: "Workflow Automation", result: "Saved 40 hours/week", color: "from-cyan to-primary" },
];

const CaseStudies = () => {
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
            Case <span className="text-gradient-cyan">Studies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from our AI automation implementations
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, index) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden border border-border card-hover hover-glow"
            >
              <div className={`bg-gradient-to-br ${c.color} p-8 flex items-center justify-center`}>
                <c.icon className="w-12 h-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">{c.title}</h3>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
                  {c.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
