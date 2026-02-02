import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, GraduationCap, Briefcase, ArrowRight, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";
import heroIllustration from "@/assets/hero-illustration.png";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      duration: 0.8,
    },
  },
};

const textLineVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 20,
      duration: 0.6,
    },
  },
};

const floatingVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    },
  },
};

const sparkleVariants: Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    },
  },
};

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-background via-background to-primary/5 min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6"
              variants={sparkleVariants}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Welcome to the Future</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6"
              variants={itemVariants}
            >
              <motion.div variants={textLineVariants}>
                Transform Your{" "}
              </motion.div>
              <motion.div variants={textLineVariants}>
                Future With{" "}
                <motion.span 
                  className="text-primary inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  NAVI AI TECH
                </motion.span>
              </motion.div>
            </motion.h1>
            
            <motion.p className="text-lg text-muted-foreground mb-4" variants={textLineVariants}>
              Whether it's
            </motion.p>
            <motion.p className="text-muted-foreground mb-8 max-w-lg" variants={textLineVariants}>
              AI Solutions, Career Guidance, or Industry-Ready Training — we provide cutting-edge possibilities to unlock your success.
            </motion.p>
            
            {/* Feature Tags */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center gap-2 bg-muted rounded-full px-4 py-2 border border-border hover:shadow-md transition-shadow cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bot className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">AI Services</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-muted rounded-full px-4 py-2 border border-border hover:shadow-md transition-shadow cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Internship Programs</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-muted rounded-full px-4 py-2 border border-border hover:shadow-md transition-shadow cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Career Support</span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/services">
                  <Button size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg hover:shadow-xl transition-shadow group">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/register">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:border-primary/60 transition-colors">
                    Register Now
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div 
            className="relative"
            variants={floatingVariants}
            initial="initial"
            animate="animate"
          >
            <motion.img
              src={heroIllustration}
              alt="AI Education Illustration"
              className="w-full max-w-2xl mx-auto drop-shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            {/* Floating elements around the illustration */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg"
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg"
              animate={{
                y: [5, -5, 5],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Bot className="w-5 h-5 text-accent-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
