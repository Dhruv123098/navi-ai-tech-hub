import { motion } from "framer-motion";
import { GraduationCap, Heart, Building2, Banknote, ShoppingBag, ShoppingCart, Rocket, Users } from "lucide-react";

const industries = [
  { icon: GraduationCap, title: "Education" },
  { icon: Heart, title: "Healthcare" },
  { icon: Building2, title: "Real Estate" },
  { icon: Banknote, title: "Finance" },
  { icon: ShoppingBag, title: "Retail" },
  { icon: ShoppingCart, title: "E-commerce" },
  { icon: Rocket, title: "Startups" },
  { icon: Users, title: "SMEs" },
];

const IndustriesSection = () => {
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
            Industries We <span className="text-gradient-cyan">Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI automation solutions across diverse industries
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-card rounded-xl p-6 text-center card-hover hover-glow border border-border group cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                <ind.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">{ind.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
