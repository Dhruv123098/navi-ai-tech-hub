import { motion } from "framer-motion";
import { Eye, Target, Briefcase, Rocket, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            About <span className="text-gradient-cyan">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transforming businesses and empowering individuals through AI innovation
          </p>
        </motion.div>

        {/* Who We Are, Vision, Mission */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-white rounded-xl p-8 hover-glow transition-all"
          >
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">Who We Are</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• AI technology company focused on business solutions</li>
              <li>• Help businesses grow with intelligent digital systems</li>
              <li>• Provide practical AI internship programs</li>
              <li>• Connect learning with real-world innovation</li>
              <li>• Shape the future through Artificial Intelligence</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-white rounded-xl p-8 hover-glow transition-all"
          >
            <div className="w-12 h-12 rounded-lg gradient-cyan flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Become a global leader in Artificial Intelligence</li>
              <li>• Transform businesses through smart AI solutions</li>
              <li>• Create a future where tech empowers everyone</li>
              <li>• Nurture global talent through AI programs</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-white rounded-xl p-8 hover-glow transition-all"
          >
            <div className="w-12 h-12 rounded-lg gradient-cyan flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Deliver world-class AI business solutions</li>
              <li>• Help organizations grow through innovation</li>
              <li>• Provide practical AI internship programs</li>
              <li>• Commit to excellence and transformation</li>
            </ul>
          </motion.div>
        </div>

        {/* Our Strength */}
        <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
          Our Strength
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Briefcase, title: "Paid Internship Opportunity", desc: "Gain real work experience with paid internships at leading companies while building your career." },
            { icon: Rocket, title: "Capstone Projects", desc: "Work on real-world capstone projects that demonstrate your practical skills to future employers." },
            { icon: Award, title: "Industry-Focused Learning", desc: "Curriculum designed with industry input to ensure you're learning skills that matter." },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 text-center border border-border card-hover"
            >
              <div className="w-16 h-16 mx-auto rounded-full gradient-cyan flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-3">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
