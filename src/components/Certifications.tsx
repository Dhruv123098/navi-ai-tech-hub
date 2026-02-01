import { Award, FileCheck, Briefcase } from "lucide-react";

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

const Certifications = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
          We are Proudly Certified by
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our strength lies in providing industry-standard certifications and practical experience
        </p>
        
        {/* Certification Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div className="bg-card border border-border rounded-xl px-6 py-4 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground text-sm">Ministry of Corporate Affairs</span>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl px-6 py-4 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent/20 rounded flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-accent" />
              </div>
              <span className="font-semibold text-foreground text-sm">Digital India</span>
            </div>
          </div>
        </div>

        {/* Strength Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg border border-border card-hover text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <cert.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                {cert.title}
              </h3>
              <p className="text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
