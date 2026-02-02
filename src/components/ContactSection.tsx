import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", city: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Connect Anytime, Anywhere
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Discover the future of learning at Navi AI Tech. Contact us for inquiries, enrollment information, or to schedule an education consultation. Our expert team is here to guide your educational journey with comprehensive technology coaching and dedicated support.
            </p>
            
            {/* Location Map */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                📍 Our Location
              </h3>
              <div className="space-y-4">
                {/* Embedded Map */}
                <div className="rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4210582657!2d78.3747!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392baf9c2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="Navi AI Tech Location - Hyderabad"
                  />
                </div>
                
                {/* Address Details */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Navi AI Tech Headquarters
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Hunayath Nagar, Hyderabad<br />
                        Telangana, India - 5000XX
                      </p>
                      <div className="mt-3 flex flex-col sm:flex-row gap-3">
                        <a
                          href="https://wa.me/918317564642"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          +91 83175 64642
                        </a>
                        <a
                          href="mailto:info@naviaitech.com"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          info@naviaitech.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => window.open('https://maps.google.com/?q=Hunayath+Nagar+Hyderabad', '_blank')}
                    className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </button>
                  <button
                    onClick={() => window.open('https://wa.me/918317564642', '_blank')}
                    className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                Contact Us...
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="pl-10 bg-muted border-border"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="pl-10 bg-muted border-border"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="pl-10 bg-muted border-border"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      required
                      className="pl-10 bg-muted border-border"
                    />
                  </div>
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-muted-foreground" />
                  <Textarea
                    placeholder="Your Query"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="pl-10 bg-muted border-border resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
