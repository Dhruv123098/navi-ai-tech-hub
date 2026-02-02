import { motion, Variants } from "framer-motion";

const companies = [
  { 
    name: "Microsoft", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  { 
    name: "Amazon", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  { 
    name: "Google", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  { 
    name: "Meta", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
  },
  { 
    name: "Apple", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },
  { 
    name: "Netflix", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
  },
  { 
    name: "Tesla", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg"
  },
  { 
    name: "Adobe", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg"
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
    name: "Intel", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo.svg"
  },
  { 
    name: "Cisco", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
  },
];

const TiedUpCompanies = () => {
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
  const scrollingCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-gradient-to-r from-card via-card to-primary/5 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h3 
          className="text-center text-xl md:text-2xl text-muted-foreground mb-12 font-medium"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Alumni Works At
        </motion.h3>
        
        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-8 md:gap-12"
            animate={{
              x: [0, -50 * companies.length], // Adjust based on company count
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20, // Speed of scrolling
                ease: "linear",
              },
            }}
          >
            {scrollingCompanies.map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer min-w-[120px]"
              >
                <div className="flex flex-col items-center gap-3">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to a simple text representation if image fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="hidden items-center justify-center h-12 text-sm font-bold text-primary"
                    style={{ display: 'none' }}
                  >
                    {company.name.slice(0, 3).toUpperCase()}
                  </div>
                  <span className="text-sm font-semibold text-foreground text-center">
                    {company.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default TiedUpCompanies;
