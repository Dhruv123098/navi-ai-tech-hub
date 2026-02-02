import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Contact",
    path: "/register"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <motion.header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm" initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    type: "spring",
    stiffness: 100,
    damping: 20
  }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <Link to="/" className="flex items-center gap-3">
              <motion.img alt="NAVI AI TECH" className="h-12 w-auto drop-shadow-md" whileHover={{
              rotate: 5
            }} transition={{
              type: "spring",
              stiffness: 300
            }} src="/lovable-uploads/c83ed365-aaec-456a-9100-b830a205b098.jpg" />
              <div className="hidden sm:block">
                <motion.span className="text-xl font-heading font-bold text-primary block" whileHover={{
                scale: 1.05
              }} transition={{
                type: "spring",
                stiffness: 400
              }}>
                  NAVI AI TECH
                </motion.span>
                <p className="text-xs text-muted-foreground">Rule the world with <b>NAT</b></p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => <motion.div key={item.name} initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }}>
                <Link to={item.path} className={`text-sm font-medium transition-all duration-300 relative group ${isActive(item.path) ? "text-primary" : "text-foreground hover:text-primary"}`}>
                  {item.name}
                  <motion.span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left" initial={{
                scaleX: 0
              }} whileHover={{
                scaleX: 1
              }} transition={{
                type: "spring",
                stiffness: 400
              }} />
                  {isActive(item.path) && <motion.span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" layoutId="activeTab" initial={{
                scaleX: 1
              }} />}
                </Link>
              </motion.div>)}
          </nav>

          {/* CTA Buttons */}
          <motion.div className="hidden md:flex items-center gap-3" initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.5
        }}>
            {/* WhatsApp Button */}
            <motion.a href="https://wa.me/918317564642" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <MessageCircle className="w-4 h-4" />
              <span className="font-semibold">WhatsApp</span>
            </motion.a>
            
            {/* Register Button */}
            <Link to="/register">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 rounded-full px-6 shadow-lg hover:shadow-xl transition-shadow">
                  Register
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }}>
            <AnimatePresence mode="wait">
              {isMenuOpen ? <motion.div key="close" initial={{
              rotate: -90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: 90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }}>
                  <X size={24} />
                </motion.div> : <motion.div key="menu" initial={{
              rotate: 90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: -90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }}>
                  <Menu size={24} />
                </motion.div>}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && <motion.nav className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md" initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: "auto",
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.3
        }}>
              {navItems.map((item, index) => <motion.div key={item.name} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: index * 0.1
          }}>
                  <Link to={item.path} className={`block py-3 text-sm font-medium transition-colors px-4 rounded-lg hover:bg-muted ${isActive(item.path) ? "text-primary bg-primary/10" : "text-foreground hover:text-primary"}`} onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                </motion.div>)}
              {/* WhatsApp Button */}
              <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="px-4">
                <a href="https://wa.me/918317564642" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-green-500 text-white px-4 py-3 rounded-full hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl" onClick={() => setIsMenuOpen(false)}>
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-semibold">WhatsApp</span>
                </a>
              </motion.div>
              
              <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="px-4">
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 rounded-full shadow-lg hover:shadow-xl">
                    Register
                  </Button>
                </Link>
              </motion.div>
            </motion.nav>}
        </AnimatePresence>
      </div>
    </motion.header>;
};
export default Header;