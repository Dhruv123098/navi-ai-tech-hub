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
    <section className="py-16 gradient-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-12">
          Success Stats
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-cyan" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
