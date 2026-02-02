import { motion, Variants } from "framer-motion";

const collaborationCompanies = [
  { 
    name: "Tech Mahindra", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Tech_Mahindra_logo.svg"
  },
  { 
    name: "Accenture", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Accenture_logo.svg"
  },
  { 
    name: "Infosys", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
  },
  { 
    name: "TCS", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Tata_Consultancy_Services_Logo.svg"
  },
  { 
    name: "Wipro", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Wipro_logo.svg"
  },
  { 
    name: "HCL", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/86/HCL_Tech_logo.svg"
  },
  { 
    name: "Capgemini", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Capgemini_logo.svg"
  },
  { 
    name: "Deloitte", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Deloitte_logo.svg"
  },
  { 
    name: "IBM", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  },
  { 
    name: "Oracle", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Oracle_logo.svg"
  },
  { 
    name: "SAP", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
  },
  { 
    name: "Cisco", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
  },
  { 
    name: "Intel", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo.svg"
  },
  { 
    name: "HP", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/Hp_logo_2D.svg"
  },
  { 
    name: "Dell", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Dell_logo.svg"
  },
  { 
    name: "Swiggy", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Swiggy_logo.svg"
  },
];

const CollaborationSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  // Duplicate companies for seamless scrolling
  const scrollingCompanies = [...collaborationCompanies, ...collaborationCompanies];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Collaboration That Drives Career Growth
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
            At Navi AI Tech, we believe in the power of collaboration. Our network of top-tier industry partners, over-achiever mentors, and super career opportunities and support through internships.
          </p>
        </motion.div>
        
        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-6 md:gap-8"
            animate={{
              x: [0, -50 * collaborationCompanies.length], // Adjust based on company count
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25, // Slightly slower for better readability
                ease: "linear",
              },
            }}
          >
            {scrollingCompanies.map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer min-w-[140px] group"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full h-16 flex items-center justify-center">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="h-14 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 max-w-full"
                      onError={(e) => {
                        // Fallback to a simple text representation if image fails
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="hidden items-center justify-center h-14 text-lg font-bold text-primary"
                      style={{ display: 'none' }}
                    >
                      {company.name.slice(0, 3).toUpperCase()}
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                    {company.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        
        {/* Additional Stats Section */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Partner Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Career Opportunities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Industry Mentors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Placement Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborationSection;
