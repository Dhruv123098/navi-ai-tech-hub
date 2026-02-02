import { Award, FileCheck, Briefcase } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Import certificate images
import certPerformance from "@/assets/certificate-performance.jpeg";
import certCompletion from "@/assets/certificate-completion.jpeg";
import certInternship from "@/assets/certificate-internship.jpeg";
import certRecommendation from "@/assets/certificate-recommendation.jpeg";
import certAmbassador from "@/assets/certificate-ambassador.jpeg";

const certifications = [
  {
    icon: Award,
    title: "Certifications",
    description: "Industry-recognized certifications to validate your skills and boost your career prospects.",
  },
  {
    icon: FileCheck,
    title: "Capstone Projects",
    description: "Real-world projects that demonstrate your practical abilities to future employers.",
  },
  {
    icon: Briefcase,
    title: "Paid Internship Opportunity",
    description: "Gain valuable work experience with our paid internship programs at leading companies.",
  },
];

const certificateImages = [
  { src: certPerformance, title: "Certificate of Outstanding Performance" },
  { src: certCompletion, title: "Certificate of Completion" },
  { src: certInternship, title: "Certificate of Internship" },
  { src: certRecommendation, title: "Letter of Recommendation" },
  { src: certAmbassador, title: "Campus Ambassador Appointment" },
];

const Certifications = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 60, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-accent/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            Our Certifications
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Industry-recognized certificates to validate your skills and accelerate your career
          </motion.p>
        </motion.div>

        {/* Certificate Images Gallery */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificateImages.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-border cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={cert.src} 
                  alt={cert.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-lg">{cert.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Strength Cards */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Strength
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What makes us the preferred choice for aspiring professionals
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -15,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              className="bg-gradient-to-br from-card via-primary/5 to-accent/5 rounded-2xl p-10 shadow-xl border border-border hover:border-primary/30 transition-all duration-500 group cursor-pointer relative overflow-hidden"
            >
              {/* Background decoration */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />
              
              <motion.div 
                className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-2xl relative z-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <cert.icon className="w-12 h-12 text-primary-foreground" />
              </motion.div>
              
              <h4 className="text-2xl font-heading font-semibold text-foreground mb-6 text-center group-hover:text-primary transition-colors relative z-10">
                {cert.title}
              </h4>
              
              <p className="text-muted-foreground text-center leading-relaxed relative z-10">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
