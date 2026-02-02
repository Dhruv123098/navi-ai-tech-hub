import { Award, FileCheck, Briefcase, Shield, Star, CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";

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

const certificationLogos = [
  {
    name: "Ministry of Corporate Affairs",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Ministry_of_Corporate_Affairs_India.svg"
  },
  {
    name: "Digital India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Digital_India_logo.png"
  },
  {
    name: "ISO 9001",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/ISO_9001_2015.svg"
  },
  {
    name: "Skill India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Skill_India_Logo.png"
  },
  {
    name: "Make in India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Make_in_India_logo.png"
  },
  {
    name: "Startup India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Startup_India_Logo.png"
  },
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

  const logoVariants: Variants = {
    hidden: { rotate: -180, scale: 0, opacity: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        duration: 0.6,
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
            rotate: [0, 180, 360],
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
            rotate: [360, 180, 0],
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
          className="text-center mb-20"
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
            We are Proudly Certified by
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our strength lies in providing industry-standard certifications and practical experience
          </motion.p>
        </motion.div>
        
        {/* Certification Logos */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-10 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificationLogos.map((cert, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              whileHover={{ 
                scale: 1.15, 
                y: -10,
                rotate: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer group"
            >
              <div className="flex flex-col items-center gap-4">
                <motion.div 
                  className="w-20 h-20 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src={cert.logo} 
                    alt={cert.name}
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="hidden items-center justify-center h-16 text-2xl font-bold text-primary"
                    style={{ display: 'none' }}
                  >
                    {cert.name.slice(0, 3).toUpperCase()}
                  </div>
                </motion.div>
                <motion.span 
                  className="text-sm font-semibold text-foreground text-center group-hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {cert.name}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Strength Cards */}
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
                rotateX: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              whileTap={{ scale: 0.98 }}
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
              
              <motion.h3 
                className="text-2xl font-heading font-semibold text-foreground mb-6 text-center group-hover:text-primary transition-colors relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                {cert.title}
              </motion.h3>
              
              <motion.p 
                className="text-muted-foreground text-center leading-relaxed relative z-10"
                whileHover={{ scale: 1.02 }}
              >
                {cert.description}
              </motion.p>
              
              {/* Animated stars */}
              <motion.div 
                className="mt-8 flex justify-center gap-2 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.9 + index * 0.2 + star * 0.1,
                      type: "spring"
                    }}
                  >
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
