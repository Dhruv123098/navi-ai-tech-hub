import { User, BookOpen, Award, MessageSquare, Briefcase, Users } from "lucide-react";

const journeySteps = [
  {
    icon: User,
    title: "Register Yourself",
    position: "top",
  },
  {
    icon: BookOpen,
    title: "Projects",
    position: "bottom",
  },
  {
    icon: Award,
    title: "Certifications",
    position: "top",
  },
  {
    icon: MessageSquare,
    title: "Mock Interview",
    position: "bottom",
  },
  {
    icon: Briefcase,
    title: "Skill Development Training",
    position: "top",
  },
  {
    icon: Users,
    title: "Placement Assistance",
    position: "bottom",
  },
];

const JourneyTimeline = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
          Start your Journey Today for a Better Tomorrow
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Invest in your potential for a brighter future. Start your journey today, stepping ahead toward better opportunities and endless possibilities.
        </p>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Curved Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-6 gap-4">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  step.position === "top" ? "mb-20" : "mt-20"
                }`}
              >
                <div className={`flex flex-col items-center ${step.position === "bottom" ? "flex-col-reverse" : ""}`}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg mb-3">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium text-foreground text-center max-w-24">
                    {step.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {journeySteps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg flex-shrink-0">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex-1 bg-card rounded-lg p-4 shadow-sm border border-border">
                <span className="text-xs text-muted-foreground">Step {index + 1}</span>
                <p className="font-medium text-foreground">{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
