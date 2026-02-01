import { BookOpen, Users, Lightbulb, Award } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Continuous Innovation",
    description: "Latest curriculum updates aligned with industry trends",
  },
  {
    icon: Users,
    title: "Tailored Curriculum", 
    description: "Personalized learning paths for diverse needs",
  },
  {
    icon: Lightbulb,
    title: "Interactive Learning Tools",
    description: "Engaging and immersive learning environments",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Experienced educators providing clear direction",
  },
];

const CareerPotential = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Unlock Your Career Potential with Our Proven Educational Approach
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Navi AI Tech, we are committed to delivering excellence through continuous innovation in education and technology. Our tailored curriculum is designed to meet diverse learning needs and provide a comprehensive, career-focused learning experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With state-of-the-art interactive learning tools, we create engaging and immersive environments that inspire students to grow with confidence. Backed by expert guidance and experienced educators, we ensure every learner receives clear direction, strong support, and the skills needed to succeed in the evolving world of AI and technology.
            </p>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPotential;
