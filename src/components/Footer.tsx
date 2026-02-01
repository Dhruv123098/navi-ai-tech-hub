import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="gradient-navy py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="NAVI AI TECH" className="h-12 w-auto" />
              <span className="text-xl font-heading font-bold text-primary-foreground">
                NAVI AI TECH
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Navi AI Tech empowers students with AI knowledge, internships, and career guidance. We connect learning with real-world innovation to build tomorrow's AI leaders.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/naviaitech?igsh=NWk1bmZ2OHQ1cWY="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-cyan transition-colors group"
              >
                <Instagram className="w-5 h-5 text-primary-foreground group-hover:text-navy" />
              </a>
              <a
                href="https://www.facebook.com/share/1ASiAnnVYX/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-cyan transition-colors group"
              >
                <Facebook className="w-5 h-5 text-primary-foreground group-hover:text-navy" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-heading font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-cyan transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-primary-foreground/70 hover:text-cyan transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-heading font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan" />
                <a href="mailto:helpnaviaitech@gmail.com" className="text-primary-foreground/70 hover:text-cyan transition-colors">
                  helpnaviaitech@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan" />
                <a href="tel:8317564642" className="text-primary-foreground/70 hover:text-cyan transition-colors">
                  8317564642
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} NAVI AI TECH. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
