import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  return <footer className="gradient-navy py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="NAVI AI TECH" className="h-10 w-auto" />
              <div>
                <span className="text-lg font-heading font-bold text-primary-foreground">
                  NAVI AI TECH
                </span>
                <p className="text-xs text-primary-foreground/50">Rule the world with NAT </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Navi AI Tech empowers students with AI knowledge, internships, and career guidance.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/naviaitech?igsh=NWk1bmZ2OHQ1cWY=" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-cyan transition-colors group">
                <Instagram className="w-4 h-4 text-primary-foreground group-hover:text-navy" />
              </a>
              <a href="https://www.facebook.com/share/1ASiAnnVYX/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-cyan transition-colors group">
                <Facebook className="w-4 h-4 text-primary-foreground group-hover:text-navy" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-cyan transition-colors group">
                <Linkedin className="w-4 h-4 text-primary-foreground group-hover:text-navy" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-cyan transition-colors group">
                <Twitter className="w-4 h-4 text-primary-foreground group-hover:text-navy" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-heading font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
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
                <a href="#" className="text-primary-foreground/70 hover:text-cyan transition-colors">
                  Privacy Policy & ToS
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-cyan transition-colors">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-cyan transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-primary-foreground font-heading font-semibold mb-4">
              Courses
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-cyan transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-cyan transition-colors">
                  AI/ML Developer
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-cyan transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-cyan transition-colors">
                  Data Science
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-heading font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan" />
                <a href="tel:8317564642" className="text-primary-foreground/70 hover:text-cyan transition-colors">
                  +91 8317564642
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan" />
                <a href="mailto:helpnaviaitech@gmail.com" className="text-primary-foreground/70 hover:text-cyan transition-colors text-xs">
                  helpnaviaitech@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-primary-foreground font-heading font-semibold mb-4">
              Locations
            </h4>
            <p className="text-primary-foreground/70 text-sm">
              India
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            Navi AI Tech India Pvt. Limited © 2024-2025. All Rights Reserved
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Developed by NAVI AI Tech Team
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;