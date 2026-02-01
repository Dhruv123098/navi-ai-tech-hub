import { Users, Clock, GraduationCap, Building, UserCheck } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "40+", label: "Programs" },
  { icon: Clock, value: "10K+", label: "Hours" },
  { icon: UserCheck, value: "50+", label: "Mentors" },
  { icon: Building, value: "10K+", label: "Recruiters" },
  { icon: Users, value: "100K+", label: "Students" },
];

const StatsSection = () => {
  return (
    <section className="py-20 gradient-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
          Success Stats
        </h2>
        <p className="text-center text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
          Get answers to your most pressing questions about programs, admissions, and our approach to elevating education excellence globally.
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-foreground/10 border-2 border-primary-foreground/20 flex items-center justify-center group-hover:border-cyan transition-colors">
                <stat.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
