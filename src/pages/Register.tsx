import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    college: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Registration submitted successfully! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", program: "", college: "", message: "" });
  };

  const benefits = [
    "Industry-recognized certifications",
    "Hands-on project experience",
    "Expert mentorship",
    "Placement assistance",
    "Flexible learning schedule",
    "Lifetime access to resources",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Register <span className="text-gradient-cyan">Now</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Take the first step towards your AI career journey with NAVI AI TECH
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Why Join NAVI AI TECH?
              </h2>
              <p className="text-muted-foreground mb-8">
                Invest in your future with our comprehensive AI training programs. Here's what you'll get:
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-muted rounded-xl">
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Need Help?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Contact us for any queries regarding registration
                </p>
                <p className="text-foreground font-medium">📧 helpnaviaitech@gmail.com</p>
                <p className="text-foreground font-medium">📞 8317564642</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Registration Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card"
                />
                <Input
                  placeholder="Email Address *"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card"
                />
                <Input
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-card"
                />
                <Select
                  value={formData.program}
                  onValueChange={(value) => setFormData({ ...formData, program: value })}
                >
                  <SelectTrigger className="bg-card">
                    <SelectValue placeholder="Select Program *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-internship">AI Internship Program</SelectItem>
                    <SelectItem value="campus-ambassador">Campus Ambassador Program</SelectItem>
                    <SelectItem value="career-guidance">Career Guidance</SelectItem>
                    <SelectItem value="data-analytics">Data Analytics & AI Insights</SelectItem>
                    <SelectItem value="ai-content">AI Content Generation</SelectItem>
                    <SelectItem value="voice-ai">Voice AI & Virtual Assistant</SelectItem>
                    <SelectItem value="real-estate">Real Estate Services</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="College/University"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="bg-card"
                />
                <Textarea
                  placeholder="Any message or query?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-card resize-none"
                />
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Submit Registration
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
