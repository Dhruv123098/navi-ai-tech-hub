import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-navy py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/lovable-uploads/c83ed365-aaec-456a-9100-b830a205b098.jpg" alt="Navi AI Technologies" className="h-10 w-auto rounded-lg" />
              <div>
                <span className="text-lg font-heading font-bold text-white">
                  NAVI AI TECH
                </span>
                <p className="text-xs text-white/50">AI Automation Company</p>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-6">
              Navi AI Technologies provides AI automation, chatbots, voice bots, and intelligent business solutions.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/naviaitech" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="https://www.facebook.com/share/1ASiAnnVYX/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-white/60 hover:text-primary transition-colors">AI Chatbot Development</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-primary transition-colors">AI Voice Bot</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-primary transition-colors">Business Automation</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-primary transition-colors">WhatsApp Automation</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-primary transition-colors">AI Internships</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-white/60 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/register" className="text-white/60 hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/60">
                  Manjeera Corporate, KPHB<br />
                  Kukatpally, Hyderabad<br />
                  Telangana - 500072
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:8317564642" className="text-white/60 hover:text-primary transition-colors">+91 83175 64642</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:helpnaviaitech@gmail.com" className="text-white/60 hover:text-primary transition-colors text-xs">helpnaviaitech@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Navi AI Technologies. All Rights Reserved.
          </p>
          <p className="text-white/40 text-sm">
            Developed by Navi AI Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
