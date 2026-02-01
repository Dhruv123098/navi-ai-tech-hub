import { CheckCircle, Lightbulb, BookOpen } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Continuous Innovation",
    description: "State-of-the-art interactive learning tools that create engaging environments.",
  },
  {
    icon: Lightbulb,
    title: "Tailored Curriculum",
    description: "Designed to meet diverse learning needs with comprehensive career focus.",
  },
  {
    icon: BookOpen,
    title: "Expert Guidance",
    description: "Experienced educators ensuring every learner receives direction and support.",
  },
];

const CareerPotential = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Unlock Your Career Potential with Our Proven Educational Approach
            </h2>
            <p className="text-muted-foreground mb-8">
              With state-of-the-art interactive learning tools, we create engaging and immersive environments that inspire students to grow with confidence. Backed by expert guidance and experienced educators, we ensure every learner receives clear direction, strong support, and the skills needed to succeed in the evolving world of AI and technology.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Programs</div>
              </div>
              <div className="bg-card rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Hours</div>
              </div>
              <div className="bg-card rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Mentors</div>
              </div>
              <div className="bg-card rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPotential;
